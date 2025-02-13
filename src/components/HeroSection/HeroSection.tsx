import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-24">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Digital Presence with{' '}
              <span className="text-blue-600">Designora360</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              We create stunning digital experiences that captivate your audience and drive results. From web design to branding, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                href="/get-quote"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* 3D Image/Illustration */}
          <div className="flex-1 relative">
            <div className="w-full h-[400px] lg:h-[500px] relative animate-float">
              <Image
                src="/images/hero-image.png"
                alt="3D Design Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <div className="w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10">
        <div className="w-64 h-64 bg-purple-400 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;