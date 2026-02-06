"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const content = {
    vi: {
      title: "Liên hệ",
      subtitle: "Hãy cùng tạo nên điều gì đó tuyệt vời!",
      phone: "Điện thoại",
      email: "Email",
      address: "Địa chỉ",
      address_val: "Chương Mỹ, Hà Nội",
      form_title: "Sẵn sàng hợp tác?",
      form_desc:
        "Tôi luôn sẵn sàng thảo luận về dự án mới hoặc cơ hội hợp tác nghề nghiệp.",
      name_label: "Họ tên",
      email_label: "Email",
      subject_label: "Tiêu đề",
      message_label: "Lời nhắn",
      name_placeholder: "Nguyễn Văn A",
      email_placeholder: "ban@congty.com",
      subject_placeholder: "Chủ đề bạn muốn thảo luận",
      message_placeholder: "Hãy chia sẻ về nhu cầu của bạn...",
      send_btn: "Gửi tin nhắn",
      sending: "Đang gửi...",
      success: "Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất.",
      error_generic: "Không gửi được email, vui lòng thử lại.",
      validation_name: "Tên cần ít nhất 2 ký tự.",
      validation_email: "Email chưa hợp lệ.",
      validation_message: "Lời nhắn cần ít nhất 10 ký tự.",
    },
    en: {
      title: "Get In Touch",
      subtitle: "Let's create something amazing together!",
      phone: "Phone",
      email: "Email",
      address: "Address",
      address_val: "Chuong My, Ha Noi",
      form_title: "Ready to collaborate?",
      form_desc:
        "I'm available to discuss new projects, ideas, or collaboration opportunities.",
      name_label: "Full Name",
      email_label: "Email",
      subject_label: "Subject",
      message_label: "Message",
      name_placeholder: "John Doe",
      email_placeholder: "you@company.com",
      subject_placeholder: "What would you like to discuss?",
      message_placeholder: "Tell me more about your project...",
      send_btn: "Send Message",
      sending: "Sending...",
      success: "Thanks! I'll get back to you soon.",
      error_generic: "Could not send email, please try again.",
      validation_name: "Name must be at least 2 characters.",
      validation_email: "Email is not valid.",
      validation_message: "Message should be at least 10 characters.",
    },
  };

  const t = content[language];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (formData.name.trim().length < 2) {
      setStatus("error");
      setError(t.validation_name);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      setStatus("error");
      setError(t.validation_email);
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus("error");
      setError(t.validation_message);
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || t.error_generic);
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err.message || t.error_generic);
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
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
            <div className="space-y-6">
              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center text-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-sm">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    {t.phone}
                  </h3>
                  <a
                    href="tel:0364275585"
                    className="text-xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                  >
                    0364275585
                  </a>
                </div>
              </div>

              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center text-2xl group-hover:bg-[var(--accent)] group-hover:text-white transition-all shadow-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    {t.email}
                  </h3>
                  <a
                    href="mailto:truongha21062004@gmail.com"
                    className="text-xl font-bold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors break-all"
                  >
                    truongha21062004@gmail.com
                  </a>
                </div>
              </div>

              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-2xl group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--text-muted)] mb-1">
                    {t.address}
                  </h3>
                  <p className="text-xl font-bold text-[var(--foreground)]">
                    {t.address_val}
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 bg-gradient-to-br from-[var(--card-bg)] to-[var(--primary)]/5 border-2 border-[var(--primary)]/20">
              <div className="flex flex-col h-full gap-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3 text-[var(--foreground)]">
                    {t.form_title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {t.form_desc}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-sm font-semibold text-[var(--text-muted)]"
                        htmlFor="name"
                      >
                        {t.name_label}
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.name_placeholder}
                        className="input"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        className="text-sm font-semibold text-[var(--text-muted)]"
                        htmlFor="email"
                      >
                        {t.email_label}
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t.email_placeholder}
                        className="input"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-[var(--text-muted)]"
                      htmlFor="subject"
                    >
                      {t.subject_label}
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder={t.subject_placeholder}
                      className="input"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-semibold text-[var(--text-muted)]"
                      htmlFor="message"
                    >
                      {t.message_label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.message_placeholder}
                      className="input min-h-[140px] resize-none"
                      required
                    ></textarea>
                  </div>

                  {status === "success" && (
                    <div
                      className="flex items-center gap-2 text-green-600 text-sm font-semibold"
                      aria-live="polite"
                    >
                      <FaCheckCircle />
                      <span>{t.success}</span>
                    </div>
                  )}

                  {status === "error" && error && (
                    <div
                      className="flex items-center gap-2 text-red-500 text-sm font-semibold"
                      aria-live="assertive"
                    >
                      <FaExclamationTriangle />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    disabled={status === "loading"}
                  >
                    <FaPaperPlane />
                    {status === "loading" ? t.sending : t.send_btn}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
