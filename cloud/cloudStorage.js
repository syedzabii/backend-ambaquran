import { config } from "dotenv";
config({
  path: "./data/config.env",
});
import { Storage } from "@google-cloud/storage";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentialsPath = path.join(__dirname, "..", process.env.GCP_FILEPATH);
// Create a storage client
const storage = new Storage({
  keyFilename: credentialsPath,
  projectId: process.env.GCP_PID,
});

const bucketName = process.env.GCP_BUCKET;
const bucket = storage.bucket(bucketName);

// Configure multer for memory storage
const multerStorage = multer.memoryStorage();
const upload = multer({
  storage: multerStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// Function to upload a file to GCP
const uploadToGCS = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file provided");
      return;
    }

    // Create a unique filename
    const fileName = `${Date.now()}-${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    const blobStream = fileUpload.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on("error", (error) => {
      reject(error);
    });

    blobStream.on("finish", () => {
      // Make the file public
      fileUpload.makePublic().then(() => {
        // Get the public URL
        const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
        resolve(publicUrl);
      });
    });

    blobStream.end(file.buffer);
  });
};

export { upload, uploadToGCS };
