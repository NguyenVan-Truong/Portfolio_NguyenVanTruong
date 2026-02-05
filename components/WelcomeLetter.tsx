'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WelcomeLetter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Tạm thời bỏ qua kiểm tra localStorage để bạn có thể thấy thư mỗi khi load lại trang trong lúc test
    // const hasVisited = localStorage.getItem('hasVisitedBefore');
    // if (!hasVisited) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    // }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasVisitedBefore', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div 
        className="relative max-w-lg w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 animate-fade-in-up border-t-8 border-accent-500"
        style={{ animationDuration: '0.6s' }}
      >
        {/* Paper Texture Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none rounded-2xl"></div>

        <div className="relative text-center font-serif text-gray-800">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-accent-50 text-accent-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent-600 border-b border-accent-100 pb-4">
            {t('welcome_title')}
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed mb-10 italic text-gray-600">
            <p>
              {t('welcome_body')}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              From Nguyễn Văn Trường
            </p>
            <button
              onClick={handleClose}
              className="btn-primary w-full md:w-auto px-10 shadow-lg shadow-primary-500/30"
            >
              {t('welcome_close')}
            </button>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-accent-500/10 rounded-full blur-2xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WelcomeLetter;
