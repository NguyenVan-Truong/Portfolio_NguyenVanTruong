const Skills = () => {
  const skillCategories = [
    {
      title: 'Ngôn ngữ lập trình',
      skills: ['HTML', 'CSS', 'TypeScript', 'React.js'],
    },
    {
      title: 'UI Frameworks',
      skills: ['Next.js', 'TailwindCSS', 'Bootstrap', 'Sass'],
    },
    {
      title: 'Công cụ & Kỹ năng',
      skills: ['Git', 'Figma', 'Canva'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="heading-gradient text-center mb-12">
          Kỹ năng
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-primary-400 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
