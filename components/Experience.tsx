"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaExternalLinkAlt,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaMobileAlt,
  FaServer,
  FaCogs,
} from "react-icons/fa";
import Image from "next/image";

const Experience = () => {
  const { language } = useLanguage();

  const content = {
    vi: {
      title: "Dự án nổi bật",
      view_live: "Xem Trực Tiếp",
      view_source: "Mã Nguồn",
      projects: [
        {
          id: "pos",
          category: "Hệ thống quản lý",
          name: "Hacom POS",
          image: "/Image/Poshacom.png",
          desc: "Hệ thống quản trị và đơn hàng tiên tiến được thiết kế cho hoạt động kinh doanh đa chức năng. Tối ưu hóa quy trình xử lý đơn hàng và quản lý tồn kho với phân tích thời gian thực.",
          features: [
            "Quản lý đơn hàng, tồn kho và doanh thu hiệu quả.",
            "Tích hợp RESTful API liền mạch với kiến trúc backend.",
            "Báo cáo bán hàng toàn diện và theo dõi kiểm tra kỹ thuật.",
          ],
          tech: ["Next.js", "TypeScript", "RESTful API", "Tailwind CSS"],
          icon: <FaCogs />,
        },
        {
          id: "admin",
          category: "Hệ thống quản trị",
          name: "Admin Dashboard",
          image: "/Image/AdminHacom.png",
          desc: "Bảng điều khiển quản trị mạnh mẽ giúp theo dõi hiệu suất kinh doanh và quản lý người dùng tập trung. Được xây dựng với độ bảo mật cao và khả năng mở rộng tối đa.",
          features: [
            "Biểu đồ thống kê dữ liệu trực quan sinh động.",
            "Phân quyền người dùng và quản lý bảo mật.",
            "Tối ưu hóa hiệu suất load dữ liệu lớn.",
          ],
          tech: ["React", "TypeScript", "Axios", "Mantine UI"],
          icon: <FaServer />,
        },
        {
          id: "shipping",
          category: "Ứng dụng di động",
          name: "Shipping App",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
          desc: "Giải pháp theo dõi vận chuyển đa nền tảng cho phép tài xế và khách hàng kết nối thời gian thực. Mang lại trải nghiệm giao nhận mượt mà và chính xác.",
          features: [
            "Theo dõi vị trí GPS thời gian thực.",
            "Hệ thống thông báo đẩy (Push Notification) tức thời.",
            "Xử lý ngoại tuyến và đồng bộ hóa thông minh.",
          ],
          tech: ["React Native", "Express.js", "MongoDB", "Redux"],
          icon: <FaMobileAlt />,
        },
        {
          id: "dvt",
          category: "Dịch vụ trực tuyến",
          name: "Dịch Vụ Tốt Web",
          image: "/Image/DVT.png",
          desc: "Nền tảng cung cấp dịch vụ trực tuyến hiện đại, tối ưu trải nghiệm đặt lịch và thanh toán cho người dùng. Đạt điểm số Core Web Vitals tối ưu.",
          features: [
            "Tối ưu SEO mạnh mẽ và chia sẻ mạng xã hội.",
            "Quy trình thanh toán an toàn và nhanh chóng.",
            "Giao diện responsive tương thích mọi thiết bị.",
          ],
          tech: ["Next.js", "Mantine UI", "SCSS", "SEO"],
          icon: <FaRocket />,
          specialButtons: true,
        },
      ],
    },
    en: {
      title: "Featured Projects",
      view_live: "Live View",
      view_source: "Source Code",
      view_admin: "Admin Panel",
      projects: [
        {
          id: "pos",
          category: "B2B SOFTWARE",
          name: "Hacom POS",
          image: "/Image/Poshacom.png",
          desc: "Advanced sales and order management system designed for multi-functional business operations. Optimizes order processing and inventory management with real-time analytics.",
          features: [
            "Efficient order, inventory, and revenue management.",
            "Seamless RESTful API integration with backend architecture.",
            "Comprehensive sales reporting and technical audit tracking.",
          ],
          tech: ["Next.js", "TypeScript", "RESTful API", "Tailwind CSS"],
          icon: <FaCogs />,
        },
        {
          id: "admin",
          category: "MANAGEMENT SYSTEM",
          name: "Admin Dashboard",
          image: "/Image/AdminHacom.png",
          desc: "Powerful administrative dashboard for monitoring business performance and centralized user management. Built with high security and maximum scalability.",
          features: [
            "Vivid visual data statistics charts.",
            "User permissions and security management.",
            "Optimization for large data load performance.",
          ],
          tech: ["React", "TypeScript", "Axios", "Mantine UI"],
          icon: <FaServer />,
        },
        {
          id: "shipping",
          category: "MOBILE APPLICATION",
          name: "Shipping App",
          image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
          desc: "Cross-platform shipping tracking solution that enables real-time connection between drivers and customers. Provides a smooth and accurate delivery experience.",
          features: [
            "Real-time GPS location tracking.",
            "Instant Push Notification system.",
            "Offline processing and smart synchronization.",
          ],
          tech: ["React Native", "Express.js", "MongoDB", "Redux"],
          icon: <FaMobileAlt />,
        },
        {
          id: "dvt",
          category: "ONLINE SERVICE",
          name: "DVT Web Service",
          image: "/Image/DVT.png",
          desc: "Modern online service provision platform, optimizing user scheduling and payment experience. Achieved optimal Core Web Vitals scores.",
          features: [
            "Strong SEO optimization and social sharing.",
            "Secure and fast payment process.",
            "Responsive interface compatible with all devices.",
          ],
          tech: ["Next.js", "Mantine UI", "SCSS", "SEO"],
          icon: <FaRocket />,
          specialButtons: true,
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section
      id="experience"
      className="section relative bg-[var(--background)] overflow-hidden py-32"
    >
      {/* Background Decorative Elemets */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-24 animate-fade-in-up">
          <h2 className="heading-gradient text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mx-auto"></div>
        </div>

        <div className="space-y-32">
          {t.projects.map((project, idx) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 animate-fade-in-up ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <p className="text-primary-400 font-bold text-sm tracking-[0.2em] uppercase">
                  {project.category}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">
                  {project.name}
                </h3>
                <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-xl">
                  {project.desc}
                </p>

                <ul className="space-y-4 pt-2">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 group">
                      <FaCheckCircle className="text-primary-500 text-xl mt-1 shrink-0 transition-transform group-hover:scale-110" />
                      <span className="text-[var(--text-muted)] text-base leading-relaxed group-hover:text-[var(--foreground)] transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-4 py-1.5 text-xs font-semibold bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-muted)] rounded-full hover:border-primary-500 hover:text-[var(--foreground)] transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.specialButtons && (
                  <div className="flex flex-wrap gap-4 pt-8">
                    <a
                      href="https://dichvutot.vn/"
                      target="_blank"
                      className="px-8 py-3 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                      {t.view_live}
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                )}
              </div>

              {/* Image Content */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                  <div className="relative h-[300px] md:h-[450px] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d0d1a] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
