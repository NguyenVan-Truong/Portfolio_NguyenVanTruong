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
    experience: 'Kinh nghiệm',
    activities: 'Hoạt động',
    contact: 'Liên hệ',
    welcome_title: 'Chào mừng quý Nhà tuyển dụng!',
    welcome_body: 'Cảm ơn bạn đã ghé thăm Portfolio của tôi. Tôi là Nguyễn Văn Trường, một Frontend Developer đầy nhiệt huyết với đam mê tạo ra những trải nghiệm người dùng tuyệt vời. Hy vọng bạn sẽ tìm thấy những thông tin hữu ích tại đây!',
    welcome_close: 'Khám phá ngay',
  },
  en: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    activities: 'Activities',
    contact: 'Contact',
    welcome_title: 'Welcome, Recruiter!',
    welcome_body: 'Thank you for visiting my portfolio. I am Nguyen Van Truong, a passionate Frontend Developer dedicated to creating exceptional user experiences. I hope you find what you are looking for here!',
    welcome_close: 'Explore Now',
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
