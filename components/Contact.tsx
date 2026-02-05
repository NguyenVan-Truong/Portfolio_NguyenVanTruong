'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      title: "Liên hệ",
      subtitle: "Hãy cùng tạo nên điều gì đó tuyệt vời!",
      phone: "Điện thoại",
      email: "Email",
      address: "Địa chỉ",
      address_val: "Chương Mỹ, Hà Nội",
      send_btn: "Gửi tin nhắn"
    },
    en: {
      title: "Get In Touch",
      subtitle: "Let's create something amazing together!",
      phone: "Phone",
      email: "Email",
      address: "Address",
      address_val: "Chuong My, Ha Noi",
      send_btn: "Send Message"
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-gradient text-4xl md:text-5xl mb-4">
            {t.title}
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto italic">
            {t.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-sm">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">{t.phone}</h3>
                  <a href="tel:0364275585" className="text-xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors">
                    0364275585
                  </a>
                </div>
              </div>

              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-2xl group-hover:bg-[var(--accent)] group-hover:text-white transition-all shadow-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">{t.email}</h3>
                  <a href="mailto:truongha21062004@gmail.com" className="text-xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors break-all">
                    truongha21062004@gmail.com
                  </a>
                </div>
              </div>

              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">{t.address}</h3>
                  <p className="text-xl font-bold text-[var(--foreground)]">
                    {t.address_val}
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Call to Action (Mock Form) */}
            <div className="card p-8 bg-gradient-to-br from-[var(--card-bg)] to-[var(--primary)]/5 border-2 border-[var(--primary)]/20">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
                    {language === 'vi' ? 'Sẵn sàng hợp tác?' : 'Ready to collaborate?'}
                  </h3>
                  <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                    {language === 'vi' 
                      ? 'Tôi luôn sẵn sàng thảo luận về các dự án mới, các ý tưởng sáng tạo hoặc cơ hội hợp tác nghề nghiệp.'
                      : 'I am always available to discuss new projects, creative ideas, or professional collaboration opportunities.'}
                  </p>
                </div>
                
                <button className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                  <FaPaperPlane />
                  {t.send_btn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

