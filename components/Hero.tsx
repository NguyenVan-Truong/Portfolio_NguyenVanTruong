'use client';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section pt-32">
      <div className="container-custom text-center">
        <div className="animate-fade-in-up">
          <h1 className="heading-gradient mb-4">
            Nguyễn Văn Trường
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary-400 mb-6 font-semibold">
            Frontend Developer
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-[var(--text-muted)] mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:0942471984" className="hover:text-primary-400 transition-colors">
                0942471984
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="mailto:truongnv24092004@gmail.com" className="hover:text-primary-400 transition-colors">
                truongnv24092004@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>3 Tháng Mỹ, Hà Nội</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="#contact" className="btn-primary">
              Liên hệ với tôi
            </a>
            <a href="#experience" className="btn-outline">
              Xem kinh nghiệm
            </a>
          </div>
        </div>

        {/* Floating decoration */}
        <div className="mt-16 flex justify-center gap-8">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-20 animate-float"></div>
          <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
