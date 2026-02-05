'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WelcomeLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasVisitedBefore', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="relative max-w-2xl w-full bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in-up"
        style={{ animationDuration: '0.5s' }}
      >
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-accent-500 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 text-accent-500">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h2 className="heading-gradient mb-6 text-2xl md:text-4xl">
            {t('welcome_title')}
          </h2>
          
          <div className="space-y-4 text-[var(--foreground)] text-lg leading-relaxed mb-8">
            <p>
              {t('welcome_body')}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="btn-primary w-full md:w-auto px-8"
          >
            {t('welcome_close')}
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default WelcomeLetter;
