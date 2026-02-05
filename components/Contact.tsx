const Contact = () => {
  return (
    <section id="contact" className="section bg-[var(--card-bg)]/30">
      <div className="container-custom">
        <h2 className="heading-gradient text-center mb-12">
          Liên hệ
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-400 mb-2">
                Điện thoại
              </h3>
              <a
                href="tel:0942471984"
                className="text-[var(--text-muted)] hover:text-primary-400 transition-colors"
              >
                0942471984
              </a>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-400 mb-2">
                Email
              </h3>
              <a
                href="mailto:truongnv24092004@gmail.com"
                className="text-[var(--text-muted)] hover:text-primary-400 transition-colors break-all"
              >
                truongnv24092004@gmail.com
              </a>
            </div>

            <div className="card text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-primary-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-400 mb-2">
                Địa chỉ
              </h3>
              <p className="text-[var(--text-muted)]">3 Tháng Mỹ, Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
