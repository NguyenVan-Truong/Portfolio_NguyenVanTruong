const Footer = () => {
  return (
    <footer className="bg-[var(--card-bg)] border-t border-[var(--card-border)] py-8">
      <div className="container-custom px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © 2026 Nguyễn Văn Trường. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="tel:0942471984"
              className="text-[var(--text-muted)] hover:text-primary-400 transition-colors duration-300"
              aria-label="Phone"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            
            <a
              href="mailto:truongnv24092004@gmail.com"
              className="text-[var(--text-muted)] hover:text-primary-400 transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
