'use client';

import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaCertificate, FaAward, FaUserCheck, FaCode, FaRocket, FaHeart, FaMusic, FaFutbol, FaLightbulb } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      role: "Front-end Developer",
      contact_location: "Chương Mỹ, Hà Nội",
      career_objective: {
        title: "Mục tiêu nghề nghiệp",
        desc: <>Là một <span className="text-[var(--primary)] font-semibold">Front-End Developer</span> với hơn 1 năm kinh nghiệm xây dựng ứng dụng web <span className="italic underline decoration-[var(--primary)]/30 underline-offset-4">responsive</span>. Tôi hướng đến vị trí <span className="text-[var(--accent)] font-semibold">Junior Developer</span> hoặc <span className="text-[var(--accent)] font-semibold">Mid-Level Developer</span>.</>
      },
      learning: {
        title: "Đang học tập & Phát triển",
        items: [
          { name: "Học Backend với C#", icon: <FaCode /> },
          { name: "Tối ưu Core Web Vitals", icon: <FaRocket /> },
          { name: "Xây dựng Design System", icon: <FaLightbulb /> },
          { name: "Đóng góp Open Source projects", icon: <FaHeart /> }
        ]
      },
      activities: {
        title: "Hoạt động tại Hacom",
        company: "Hacom",
        period: "09/2024 - 01/2026",
        role: "Front-end Developer",
        tasks: [
          "Phát triển và tối ưu giao diện web bằng TypeScript, TailwindCSS, Scss",
          "Kết nối API, xử lý dữ liệu bằng Axios",
          "Làm việc nhóm qua GitLab, review code và xử lý lỗi",
          "Đảm bảo tính responsive trên đa thiết bị"
        ]
      },
      hobbies: {
        title: "Sở thích",
        items: [
          { name: "Nghe nhạc", icon: <FaMusic /> },
          { name: "Đá bóng", icon: <FaFutbol /> },
          { name: "Tìm hiểu code & công nghệ mới", icon: <FaRocket /> }
        ]
      },
      certificates: {
        title: "Chứng chỉ",
        items: [
          { name: "Xây dựng và triển khai website bán hàng với Reactjs và TypeScript", period: "11/2023 - 01/2024" },
          { name: "Xây dựng website giao diện bán hàng NNShop", period: "11/2023 - 01/2024" },
          { name: "Xây dựng dịch vụ chuyên nghiệp với Node.js", period: "11/2023 - 01/2024" }
        ]
      },
      awards: {
        title: "Danh hiệu",
        items: [
          { name: "Sinh viên giỏi và xuất sắc 5 kỳ", period: "08/2022 - 12/2024" },
          { name: "GPA đạt: 9.0/10", period: "Toàn khóa" },
          { name: "Tốt nghiệp bằng Xuất sắc", period: "Năm 2024" }
        ]
      }
    },
    en: {
      role: "Front-end Developer",
      contact_location: "Chuong My, Ha Noi",
      career_objective: {
        title: "Career Objective",
        desc: <>As a <span className="text-[var(--primary)] font-semibold">Front-End Developer</span> with over 1 year of experience building <span className="italic underline decoration-[var(--primary)]/30 underline-offset-4">responsive</span> web applications. I am looking for a position as a <span className="text-[var(--accent)] font-semibold">Junior Developer</span> or <span className="text-[var(--accent)] font-semibold">Mid-Level Developer</span>.</>
      },
      learning: {
        title: "Learning & Development",
        items: [
          { name: "Backend with C#", icon: <FaCode /> },
          { name: "Optimizing Core Web Vitals", icon: <FaRocket /> },
          { name: "Building Design Systems", icon: <FaLightbulb /> },
          { name: "Contributing to Open Source projects", icon: <FaHeart /> }
        ]
      },
      activities: {
        title: "Activities at Hacom",
        company: "Hacom",
        period: "09/2024 - 01/2026",
        role: "Front-end Developer",
        tasks: [
          "Developing and optimizing web interfaces using TypeScript, TailwindCSS, Scss",
          "Connecting APIs and processing data using Axios",
          "Collaborating via GitLab, performing code reviews and bug fixing",
          "Ensuring responsive design across multiple devices"
        ]
      },
      hobbies: {
        title: "Hobbies",
        items: [
          { name: "Listening to music", icon: <FaMusic /> },
          { name: "Playing football", icon: <FaFutbol /> },
          { name: "Exploring new code & tech", icon: <FaRocket /> }
        ]
      },
      certificates: {
        title: "Certificates",
        items: [
          { name: "Building and deploying E-commerce website with Reactjs and TypeScript", period: "11/2023 - 01/2024" },
          { name: "Building NNShop E-commerce interface", period: "11/2023 - 01/2024" },
          { name: "Building professional services with Node.js", period: "11/2023 - 01/2024" }
        ]
      },
      awards: {
        title: "Honors & Awards",
        items: [
          { name: "Excellent Student Award (5 Semesters)", period: "08/2022 - 12/2024" },
          { name: "GPA: 9.0/10", period: "Full Course" },
          { name: "Graduated with Honors", period: "2024" }
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section id="about" className="section bg-[var(--card-bg)]/30">
      <div className="container-custom">
        {/* Profile & Header Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 animate-fade-in-up">
            {/* Profile Image with Premium Frame */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-40 h-64 md:w-52 md:h-64 rounded-2xl overflow-hidden border-2 border-[var(--card-border)] bg-[var(--card-bg)] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative w-full h-full p-2">
                  <Image
                    src="/Image/AnhLogo.jpg"
                    alt="Nguyễn Văn Trường"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/40 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-3 rounded-xl shadow-lg animate-float hidden md:block text-white">
                <FaBriefcase className="text-white text-xl" />
              </div>
            </div>

            {/* Header Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="heading-gradient text-4xl md:text-6xl mb-2">Nguyễn Văn Trường</h1>
              <p className="text-xl md:text-2xl font-semibold text-[var(--accent)] mb-8 tracking-wide">{t.role}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-sm md:text-lg text-[var(--text-muted)]">
                <p className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors shadow-sm">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <FaPhone />
                  </span>
                  <span className="font-medium">0364275585</span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors shadow-sm">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <FaEnvelope />
                  </span>
                  <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">truongha21062004@gmail.com</span>
                </p>
                <p className="flex items-center justify-center md:justify-start gap-4 p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--primary)] transition-colors shadow-sm lg:col-span-1">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <FaMapMarkerAlt />
                  </span>
                  <span className="font-medium leading-tight">{t.contact_location}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Career Objective */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaUserCheck className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">{t.career_objective.title}</h3>
              </div>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                {t.career_objective.desc}
              </p>
            </div>

            {/* Current Focus / Learning */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <FaRocket className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">{t.learning.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.learning.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--foreground)]/5 border border-[var(--card-border)] hover:border-[var(--primary)] transition-all group">
                    <span className="text-[var(--primary)] group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="text-sm font-medium text-[var(--text-muted)] group-hover:text-[var(--foreground)] transition-colors">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Activities */}
            <div className="card animate-fade-in-up md:col-span-2" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaAward className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">{t.activities.title}</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--card-border)] pb-2 mb-4">
                  <span>{t.activities.role}</span>
                  <span className="text-[var(--primary)]">{t.activities.period}</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  {t.activities.tasks.map((task, idx) => (
                    <li key={idx} className="flex gap-3 text-[var(--text-muted)] group/item">
                      <span className="text-[var(--primary)] transition-transform group-hover/item:scale-125">✦</span>
                      <span className="text-base group-hover/item:text-[var(--foreground)] transition-colors">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Hobbies */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaHeart className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">{t.hobbies.title}</h3>
              </div>
              <div className="space-y-4">
                {t.hobbies.items.map((hobby, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-[var(--foreground)]/5 border border-[var(--card-border)] group">
                    <span className="text-[var(--accent)] group-hover:animate-float text-xl">{hobby.icon}</span>
                    <span className="font-medium text-[var(--text-muted)] group-hover:text-[var(--foreground)] transition-colors">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certificates */}
            <div className="card animate-fade-in-up md:p-8" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaCertificate className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">{t.certificates.title}</h3>
              </div>
              <div className="space-y-6">
                {t.certificates.items.map((cert, idx) => (
                  <div key={idx} className="group relative pl-4 border-l-2 border-[var(--card-border)] hover:border-[var(--primary)] transition-colors">
                    <p className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-tight mb-1">{cert.name}</p>
                    <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-tighter opacity-70">{cert.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="card animate-fade-in-up md:p-8" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <FaAward className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold">{t.awards.title}</h3>
              </div>
              <div className="space-y-6">
                {t.awards.items.map((award, idx) => (
                  <div key={idx} className="bg-[var(--foreground)]/5 p-5 rounded-xl border border-[var(--card-border)] hover:shadow-lg transition-all duration-300">
                    <p className="text-lg font-bold text-[var(--foreground)] mb-1 leading-snug">{award.name}</p>
                    <p className="text-sm font-medium text-[var(--primary)]">{award.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




