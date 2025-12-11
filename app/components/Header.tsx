import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white px-30 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center flex items-center justify-center gap-4">
          <Image
            src="/images/Favico.png"
            alt="Worry less Meds Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <div className="text-4xl lg:text-5xl font-light italic tracking-wide leading-tight">
            <span 
              className="text-gray-600"
              style={{
                textShadow: '0 2px 4px rgba(102, 126, 234, 0.3)'
              }}
            >
              Worry less{' '}
            </span>
            <span 
              className="text-[#667eea]"
              style={{
                textShadow: '0 2px 4px rgba(102, 126, 234, 0.3)'
              }}
            >
              Meds
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
