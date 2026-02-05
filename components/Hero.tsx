'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen relative flex items-center pt-24 pb-16 overflow-hidden transition-colors duration-500 bg-[var(--background)]">
      {/* Background Decorative Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-left animate-fade-in-up">
            {/* Ready for hire badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-primary-500 uppercase tracking-[0.2em]">
                {t('hero_tag')}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-[var(--foreground)]">
              {t('hero_title').split('Code')[0]}
              <span className="bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">Code</span>
              {t('hero_title').split('Code')[1]}
            </h1>

            {/* Name and Intro */}
            <div className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl text-[var(--text-muted)]">
              <span>
                {t('hero_desc').split(t('hero_name_highlight'))[0]}
                <span className="text-[var(--foreground)] font-bold underline decoration-primary-500 underline-offset-4 decoration-2">{t('hero_name_highlight')}</span>
                {t('hero_desc').split(t('hero_name_highlight'))[1]}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a href="#contact" className="btn-primary group relative overflow-hidden flex items-center justify-center gap-2 !px-8 !py-4 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-primary-500/20">
                <span className="relative z-10">{t('hero_cta_contact')}</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#experience" className="px-8 py-4 bg-[var(--card-bg)] hover:bg-[var(--card-border)] border border-[var(--card-border)] rounded-xl text-[var(--foreground)] font-medium transition-all text-center backdrop-blur-sm">
                {t('hero_cta_experience')}
              </a>
            </div>
          </div>

          {/* Right Content: Professional VS Code Mockup */}
          <div className="flex-1 w-full lg:max-w-[650px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative group perspective-1000">
              {/* VS Code Frame */}
              <div className={`
                ${theme === 'dark' ? 'bg-[#0d0d1a] border-white/10' : 'bg-[#f0f0f5] border-black/10'}
                border rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-2xl overflow-hidden flex flex-col transform transition-all duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[2deg] group-hover:scale-[1.02]
              `}>
                
                {/* Title Bar */}
                <div className={`flex items-center gap-4 px-4 py-2 ${theme === 'dark' ? 'bg-[#16162a] border-white/5' : 'bg-[#e5e5f0] border-black/5'} border-b`}>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-black/20 text-gray-400' : 'bg-white/40 text-gray-600'} px-4 py-0.5 rounded-md border border-[var(--card-border)] text-[10px] font-mono`}>
                       <svg className={`w-3 h-3 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="currentColor"><path d="M24 6.6L19 1.5c-.3-.3-.8-.5-1.2-.5H6.2c-.4 0-.9.2-1.2.5L0 6.6v10.8c0 .4.2.9.5 1.2l5 5.1c.3.3.8.5 1.2.5h11.6c.4 0 .9-.2 1.2-.5l5-5.1c.3-.3.5-.8.5-1.2V6.6zM12 18.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5 6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z"/></svg>
                       HeroProfile.tsx - Portfolio
                    </div>
                  </div>
                </div>

                {/* Main Editor Body */}
                <div className="flex h-[380px]">
                  {/* Left Activity Bar */}
                  <div className={`w-12 ${theme === 'dark' ? 'bg-[#0a0a14] text-gray-600' : 'bg-[#dedee8] text-gray-400'} border-right border-[var(--card-border)] flex flex-col items-center py-4 gap-6`}>
                    <div className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" /></svg></div>
                    <div className="hover:text-primary-500 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div>
                    <div className="hover:text-primary-500 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2" /></svg></div>
                    <div className="mt-auto hover:text-primary-500 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  </div>

                  {/* Editor Content */}
                  <div className="flex-1 flex flex-col font-mono text-[11px] md:text-xs overflow-hidden">
                    {/* Tabs */}
                    <div className={`flex ${theme === 'dark' ? 'bg-[#0a0a14]' : 'bg-[#dedee8]'} border-b border-[var(--card-border)]`}>
                      <div className={`${theme === 'dark' ? 'bg-[#0d0d1a] text-white' : 'bg-white text-gray-800'} px-4 py-2 border-t border-primary-500 border-x border-[var(--card-border)] flex items-center gap-2`}>
                        <span className="text-blue-500">TSX</span> HeroProfile.tsx
                      </div>
                      <div className="px-4 py-2 text-gray-500 hover:text-gray-300 transition-colors border-r border-[var(--card-border)] flex items-center gap-2 cursor-pointer">
                        <span className="text-blue-400">TS</span> App.tsx
                      </div>
                    </div>

                    {/* Code Area */}
                    <div className={`flex-1 p-4 ${theme === 'dark' ? 'bg-[#0d0d1a]' : 'bg-white'} overflow-hidden relative group/code`}>
                      <div className="flex gap-4">
                        {/* Line Numbers */}
                        <div className="text-gray-400 text-right select-none space-y-2 opacity-30">
                          {Array.from({length: 12}).map((_, i) => <div key={i}>{i + 1}</div>)}
                        </div>
                        
                        {/* Syntax Highlighting */}
                        <div className={`space-y-2 overflow-hidden ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          <div className="flex gap-2">
                             <span className="text-blue-500">import</span> 
                             <span className="text-orange-500">{"{ useState, useEffect }"}</span> 
                             <span className="text-blue-500">from</span> 
                             <span className="text-green-600">'react'</span><span className="opacity-50">;</span>
                          </div>
                          <div className="flex gap-2">
                             <span className="text-purple-500">export const</span> 
                             <span className="text-blue-600 font-bold">{language === 'vi' ? 'NhaPhatTrien' : 'Developer'}</span> 
                             <span className="opacity-50">= () {"=>"} {"{"}</span>
                          </div>
                          <div className="pl-4 flex gap-2">
                            <span className="text-blue-500">const</span> 
                            <span className="opacity-80">[capacity, setCapacity] = </span>
                            <span className="text-orange-500">useState</span><span>(</span><span className="text-red-500">100</span><span>);</span>
                          </div>
                          <div className="pl-4 flex gap-2">
                            <span className="text-purple-500">return</span> <span className="opacity-50">(</span>
                          </div>
                          <div className="pl-8 flex gap-2">
                            <span className="text-blue-600 font-semibold">{"<Portfolio>"}</span>
                          </div>
                          <div className="pl-12 flex gap-2">
                            <span className="text-blue-600 font-semibold">{"<Experience"}</span> <span className="text-purple-500">level</span><span>="</span><span className="text-green-600">Pro</span><span>" /{">"}</span>
                          </div>
                          <div className="pl-12 flex gap-2">
                            <span className="text-blue-600 font-semibold">{"<Innovation"}</span> <span className="text-purple-500">status</span><span>="</span><span className="text-green-600">Active</span><span>" /{">"}</span>
                          </div>
                          <div className="pl-12 flex gap-2">
                            <span className="text-blue-600 font-semibold">{"<Passion"}</span> <span className="text-purple-500">heart</span><span>={"{"}</span><span className="text-blue-500 font-bold">Full</span><span>{"}"} /&gt;</span>
                          </div>
                          <div className="pl-8 flex gap-2">
                            <span className="text-blue-600 font-semibold">{"</Portfolio>"}</span>
                          </div>
                          <div className="pl-4 flex gap-2">
                            <span className="opacity-50">);</span>
                          </div>
                          <div className="flex gap-2 opacity-50">
                            {"}"};
                          </div>
                          <div className="flex gap-2 animate-pulse">
                            <span className="bg-primary-500/80 w-[2px] h-4"></span>
                          </div>
                        </div>
                      </div>

                      {/* Floating Decorative Orbs inside editor */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className={`${theme === 'dark' ? 'bg-[#0a0a14] border-white/5 text-gray-500' : 'bg-[#dedee8] border-black/5 text-gray-500'} border-t py-1 px-4 flex justify-between items-center text-[9px] select-none`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 hover:text-primary-500 transition-colors cursor-pointer">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      main*
                    </div>
                    <div className="flex items-center gap-1 text-green-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {language === 'vi' ? 'Không lỗi' : 'No issues'}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-primary-500/20 text-primary-600 px-2 py-0.5 rounded-sm font-bold">TypeScript JSX</span>
                  </div>
                </div>
              </div>

              {/* Enhanced System Status Pop-up Overlay */}
              <div className="absolute -top-6 -right-6 md:top-20 md:-right-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-4 shadow-2xl backdrop-blur-2xl animate-float-slow z-20 flex items-center gap-4 min-w-[220px] transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-green-500/20">
                  <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider mb-0.5">{t('hero_app_state')}</p>
                  <p className="text-xs font-bold text-[var(--foreground)] mb-1">{t('hero_uptime')}</p>
                  <div className="flex items-center gap-1.5 text-green-500 text-[10px] font-bold">
                    <div className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></div>
                    {t('hero_online')}
                  </div>
                </div>
              </div>

              {/* Bottom Info Card */}
              <div className="absolute -bottom-10 -left-6 md:-bottom-12 md:-left-12 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl p-5 shadow-2xl backdrop-blur-2xl z-20 flex flex-col gap-1.5 min-w-[200px] transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2">
                 <div className="text-xs font-bold text-[var(--foreground)] mb-2 flex items-center justify-between">
                    {t('hero_dev_progress')}
                    <span className="text-primary-500 text-[10px]">100%</span>
                 </div>
                 <div className="w-full h-1.5 bg-gray-600/10 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-primary-500 to-accent-500 animate-shimmer"></div>
                 </div>
                 <div className="flex justify-between mt-2">
                    <div className="flex flex-col">
                       <span className="text-[10px] text-[var(--text-muted)]">{t('hero_commits')}</span>
                       <span className="text-xs font-bold text-[var(--foreground)]">4,842</span>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-[10px] text-[var(--text-muted)]">{t('hero_experience')}</span>
                       <span className="text-xs font-bold text-[var(--foreground)]">{t('hero_years')}</span>
                    </div>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1200px;
        }
        .rotate-y-[-5deg] {
          transform: rotateY(-5deg);
        }
        @keyframes shimmer {
          0% { background-position: -200px 0; }
          100% { background-position: 200px 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Hero;
