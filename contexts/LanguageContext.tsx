'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  vi: {
    home: 'Trang chủ',
    about: 'Giới thiệu',
    skills: 'Kỹ năng',
    experience: 'Dự án',
    activities: 'Hoạt động',
    contact: 'Liên hệ',
    welcome_title: 'Chào Quý công ty và Nhà tuyển dụng!',
    welcome_body: 'Cảm ơn bạn đã ghé thăm Portfolio của tôi. Tôi là Nguyễn Văn Trường, một Frontend Developer đầy nhiệt huyết với đam mê tạo ra những trải nghiệm người dùng tuyệt vời. Hy vọng bạn sẽ tìm thấy những thông tin hữu ích tại đây!',
    welcome_close: 'Khám phá ngay',
    hero_tag: 'SẴN SÀNG NHẬN VIỆC',
    hero_title: 'Nâng Tầm Ý Tưởng Bằng Ngôn Ngữ Của Code.',
    hero_desc: 'Hi! Tôi là Nguyễn Văn Trường, Frontend Developer với chuyên môn sâu trong việc phát triển các ứng dụng web hiệu suất cao, tối ưu trải nghiệm người dùng và kiến trúc Frontend hiện đại.',
    hero_cta_contact: 'Liên Hệ',
    hero_cta_experience: 'Xem Dự Án',
    hero_name_highlight: 'Nguyễn Văn Trường',
    hero_app_state: 'TRẠNG THÁI HỆ THỐNG',
    hero_uptime: 'Hoạt động 99.9%',
    hero_online: 'Trực Tuyến & Hoạt Động',
    hero_dev_progress: 'Tiến độ phát triển',
    hero_commits: 'Commits',
    hero_experience: 'Kinh Nghiệm',
    hero_years: '1+ Năm',
    skills_title: 'Kỹ năng',
    skills_prog_lang: 'Ngôn ngữ lập trình',
    skills_fe_frameworks: 'Frontend Frameworks & Thư viện',
    skills_ui_frameworks: 'UI Frameworks',
    skills_tools_tech: 'Công cụ & Kỹ thuật',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Projects',
    activities: 'Activities',
    contact: 'Contact',
    welcome_title: 'Welcome, Company & Recruiter!',
    welcome_body: 'Thank you for visiting my portfolio. I am Nguyen Van Truong, a passionate Frontend Developer dedicated to creating exceptional user experiences. I hope you find what you are looking for here!',
    welcome_close: 'Explore Now',
    hero_tag: 'READY TO WORK',
    hero_title: 'Elevating Ideas Through The Language of Code.',
    hero_desc: "Hi! I'm Nguyen Van Truong, a Frontend Developer with deep expertise in developing high-performance web applications, optimizing user experiences, and modern frontend architecture.",
    hero_cta_contact: 'Contact Me',
    hero_cta_experience: 'View Projects',
    hero_name_highlight: 'Nguyen Van Truong',
    hero_app_state: 'SYSTEM STATUS',
    hero_uptime: '99.9% Uptime',
    hero_online: 'Online & Active',
    hero_dev_progress: 'Dev Progress',
    hero_commits: 'Commits',
    hero_experience: 'Experience',
    hero_years: '1+ Years',
    skills_title: 'Skills',
    skills_prog_lang: 'Programming Languages',
    skills_fe_frameworks: 'Frontend Frameworks & Libraries',
    skills_ui_frameworks: 'UI Frameworks',
    skills_tools_tech: 'Tools & Techniques',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      document.documentElement.setAttribute('lang', language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.vi] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
