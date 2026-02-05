const Certifications = () => {
  const certifications = [
    {
      name: 'TOEIC',
      score: '450',
      date: '1/2023 - 04/2024',
    },
  ];

  return (
    <section id="certifications" className="section bg-[var(--card-bg)]/30">
      <div className="container-custom">
        <h2 className="heading-gradient text-center mb-12">
          Chứng chỉ
        </h2>

        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12 text-primary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-400 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-[var(--text-muted)]">
                      Điểm số: <span className="text-accent-500 font-semibold">{cert.score}</span>
                    </p>
                  </div>
                </div>
                <span className="text-accent-500 font-semibold mt-4 md:mt-0">
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
