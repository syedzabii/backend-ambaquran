import mongoose from "mongoose";
import { Student } from "../models/student.js";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "ambuloom-backend",
    })
    .then(async (c) => {
      console.log(`Database Connected with ${c.connection.host}`);
      try {
        await Student.syncIndexes();
      } catch (err) {
        console.warn("Index sync warning:", err.message);
      }
    })
    .catch((e) => console.log(e));
};
