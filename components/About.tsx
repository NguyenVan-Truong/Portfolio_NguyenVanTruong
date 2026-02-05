const About = () => {
  return (
    <section id="about" className="section bg-[var(--card-bg)]/30">
      <div className="container-custom">
        <h2 className="heading-gradient text-center mb-12">
          Mục tiêu nghề nghiệp
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card">
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Là sinh viên năm cuối ngành Công nghệ thông tin với 1 năm kinh nghiệm làm việc tại vị trí{' '}
              <span className="text-primary-400 font-semibold">Frontend Developer</span>, tôi mong muốn tìm kiếm cơ hội để phát triển và nâng cao kỹ năng chuyên môn của mình. 
              Tôi mong muốn được làm việc tại vị trí{' '}
              <span className="text-primary-400 font-semibold">Junior Developer</span> hoặc{' '}
              <span className="text-primary-400 font-semibold">Mid-Level Developer</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
