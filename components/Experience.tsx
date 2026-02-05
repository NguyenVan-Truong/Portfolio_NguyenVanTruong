const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'FWA Management',
      period: '6/2023 - 6/2024',
      projects: [
        {
          name: 'Typeshop, Boomi, Monoless TK 2020',
          description: 'Phát triển giao diện và tính năng cho 3 dự án sử dụng Next.js và Tailwind CSS.',
          technologies: ['Next.js', 'TailwindCSS'],
        },
        {
          name: 'Typeshop, Boomi, Monoless TK 2020',
          description: 'Chịu trách nhiệm code giao diện, xây dựng các tính năng và tích hợp API.',
          technologies: ['React.js', 'API Integration'],
        },
        {
          name: 'Typeshop, Boomi, Monoless TK 2020',
          description: 'Xây dựng các tính năng như tìm kiếm, chi tiết sản phẩm và tích hợp API.',
          technologies: ['React.js', 'Search', 'Product Details'],
        },
        {
          name: 'Typeshop, Boomi, Monoless TK 2020',
          description: 'Phát triển tính năng quản lý sản phẩm, tìm kiếm và tích hợp API.',
          technologies: ['React.js', 'Product Management'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng giao diện và tính năng cho các dự án sử dụng React.js và Sass.',
          technologies: ['React.js', 'Sass'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Chịu trách nhiệm code giao diện, xây dựng các tính năng và tích hợp API.',
          technologies: ['React.js', 'API Integration'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng tính năng tìm kiếm và tích hợp API cho các dự án.',
          technologies: ['React.js', 'Search Functionality'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Phát triển tính năng quản lý sản phẩm và tích hợp API.',
          technologies: ['React.js', 'Product Management'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng giao diện và tính năng cho các dự án sử dụng React.js.',
          technologies: ['React.js', 'UI Development'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Chịu trách nhiệm code giao diện và xây dựng các tính năng.',
          technologies: ['React.js', 'Frontend Development'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng tính năng tìm kiếm và tích hợp API.',
          technologies: ['React.js', 'API Integration'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Phát triển tính năng quản lý sản phẩm và tích hợp API.',
          technologies: ['React.js', 'Product Management'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng giao diện và tính năng cho các dự án.',
          technologies: ['React.js', 'UI Development'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Chịu trách nhiệm code giao diện và xây dựng các tính năng.',
          technologies: ['React.js', 'Frontend Development'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng tính năng tìm kiếm và tích hợp API.',
          technologies: ['React.js', 'API Integration'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Phát triển tính năng quản lý sản phẩm và tích hợp API.',
          technologies: ['React.js', 'Product Management'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Xây dựng giao diện và tính năng cho các dự án.',
          technologies: ['React.js', 'UI Development'],
        },
        {
          name: 'Ngôn Ngữ, Topshop, Boomi',
          description: 'Chịu trách nhiệm code giao diện và xây dựng các tính năng.',
          technologies: ['React.js', 'Frontend Development'],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="section bg-[var(--card-bg)]/30">
      <div className="container-custom">
        <h2 className="heading-gradient text-center mb-12">
          Kinh nghiệm làm việc
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="card mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-[var(--text-muted)]">{exp.company}</p>
                </div>
                <span className="text-accent-500 font-semibold mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary-300 mb-3">
                  Các dự án đã tham gia:
                </h4>
                <ul className="space-y-3">
                  {exp.projects.slice(0, 6).map((project, projectIndex) => (
                    <li key={projectIndex} className="flex items-start gap-3">
                      <span className="text-accent-500 mt-1">•</span>
                      <div>
                        <p className="text-[var(--foreground)]">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs bg-primary-500/10 text-primary-300 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
