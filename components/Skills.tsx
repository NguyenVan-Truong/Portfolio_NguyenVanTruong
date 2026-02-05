'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { 
  SiHtml5, SiCss3, SiTypescript, SiJavascript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiSass, SiAntdesign,
  SiGit, SiFigma, SiCanva, SiAxios, SiPostman
} from 'react-icons/si';
import { FaCode, FaLayerGroup, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills_prog_lang'),
      icon: <FaCode className="text-2xl" />,
      skills: [
        { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      ],
    },
    {
      title: t('skills_fe_frameworks'),
      icon: <FaLayerGroup className="text-2xl" />,
      skills: [
        { name: 'React.js', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-current" /> },
      ],
    },
    {
      title: t('skills_ui_frameworks'),
      icon: <FaLaptopCode className="text-2xl" />,
      skills: [
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Ant Design', icon: <SiAntdesign className="text-[#0170FE]" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" /> },
        { name: 'Sass/Scss', icon: <SiSass className="text-[#CC6699]" /> },
      ],
    },
    {
      title: t('skills_tools_tech'),
      icon: <FaTools className="text-2xl" />,
      skills: [
        { name: 'Git/GitHub', icon: <SiGit className="text-[#F05032]" /> },
        { name: 'Axios/REST API', icon: <SiAxios className="text-[#5A29E4]" /> },
        { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--primary)] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--accent)] rounded-full blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="mb-16 animate-fade-in-up">
          <h2 className="heading-gradient text-4xl md:text-5xl mb-4 text-left">
            {t('skills_title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 text-[var(--primary)] group-hover:from-[var(--primary)]/20 group-hover:to-[var(--accent)]/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--foreground)] to-[var(--text-muted)] group-hover:to-[var(--foreground)] transition-all">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-all group/skill"
                  >
                    <div className="text-3xl mb-3 group-hover/skill:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-muted)] group-hover/skill:text-[var(--foreground)] text-center">
                      {skill.name}
                    </span>
                  </div>
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

