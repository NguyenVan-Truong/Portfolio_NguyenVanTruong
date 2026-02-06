"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Alert,
  Button,
  Grid,
  Paper,
  Modal,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaRegClock,
  FaUser,
  FaAt,
  FaPenNib,
  FaRegCommentDots,
} from "react-icons/fa";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { language } = useLanguage();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [pendingValues, setPendingValues] = useState<ContactFormValues | null>(
    null,
  );

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
      form_kicker: "Bắt đầu dự án mới",
      name_label: "Họ tên",
      email_label: "Email",
      subject_label: "Tiêu đề",
      message_label: "Lời nhắn",
      name_placeholder: "Nguyễn Văn A",
      email_placeholder: "ban@congty.com",
      subject_placeholder: "Chủ đề bạn muốn thảo luận",
      message_placeholder: "Hãy chia sẻ về nhu cầu của bạn...",
      send_btn: "Gửi tin nhắn",
      preview_title: "Xem trước nội dung gửi",
      preview_desc: "Nội dung dưới đây sẽ được gửi qua email.",
      email_heading: "Thong tin lien he moi",
      email_footer: "Email nay duoc gui tu form lien he portfolio",
      preview_confirm: "Xác nhận gửi",
      preview_cancel: "Chỉnh sửa lại",
      sending: "Đang gửi...",
      success: "Cảm ơn bạn! Tôi sẽ phản hồi sớm nhất.",
      response_label: "Thời gian phản hồi",
      response_value: "Trong 24 giờ",
      error_generic: "Không gửi được email, vui lòng thử lại.",
      validation_name: "Tên cần ít nhất 2 ký tự.",
      validation_email: "Email chưa hợp lệ.",
      validation_subject: "Tiêu đề cần ít nhất 2 ký tự.",
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
      form_kicker: "Start a new project",
      name_label: "Full Name",
      email_label: "Email",
      subject_label: "Subject",
      message_label: "Message",
      name_placeholder: "John Doe",
      email_placeholder: "you@company.com",
      subject_placeholder: "What would you like to discuss?",
      message_placeholder: "Tell me more about your project...",
      send_btn: "Send Message",
      preview_title: "Preview your message",
      preview_desc: "This content will be sent via email.",
      email_heading: "New Contact Form Submission",
      email_footer: "This email was sent from your portfolio contact form",
      preview_confirm: "Confirm & send",
      preview_cancel: "Edit message",
      sending: "Sending...",
      success: "Thanks! I'll get back to you soon.",
      response_label: "Response time",
      response_value: "Within 24 hours",
      error_generic: "Could not send email, please try again.",
      validation_name: "Name must be at least 2 characters.",
      validation_email: "Email is not valid.",
      validation_subject: "Subject must be at least 2 characters.",
      validation_message: "Message should be at least 10 characters.",
    },
  };

  const t = content[language];

  const form = useForm<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? t.validation_name : null),
      email: (value) =>
        /\S+@\S+\.\S+/.test(value.trim()) ? null : t.validation_email,
      subject: (value) =>
        value.trim().length < 2 ? t.validation_subject : null,
      message: (value) =>
        value.trim().length < 10 ? t.validation_message : null,
    },
  });

  const handleSubmit = async (values: ContactFormValues) => {
    setError("");
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, language }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || t.error_generic);
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err.message || t.error_generic);
    }
  };

  const openPreview = (values: ContactFormValues) => {
    setPendingValues(values);
    setIsPreviewOpen(true);
  };

  const confirmSend = async () => {
    if (!pendingValues) {
      return;
    }

    setIsPreviewOpen(false);
    await handleSubmit(pendingValues);
  };

  const inputClassNames = {
    input:
      "contact-input border-[var(--card-border)] transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/30",
    label: "text-[var(--text-muted)] font-semibold",
    error: "text-red-400",
  };

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute -top-24 right-[-6rem] w-[480px] h-[480px] bg-emerald-400/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-32 left-[-8rem] w-[520px] h-[520px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-30 pointer-events-none [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,165,233,0.12)_1px,transparent_1px),linear-gradient(rgba(14,165,233,0.12)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="heading-gradient text-4xl md:text-5xl mb-4 font-display tracking-tight">
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
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-2">
                    {t.phone}
                  </h3>
                  <a
                    href="tel:0364275585"
                    className="text-xl font-bold text-[var(--foreground)] hover:text-emerald-300 transition-colors"
                  >
                    0364275585
                  </a>
                </div>
              </div>

              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/10 text-sky-300 flex items-center justify-center text-2xl group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-2">
                    {t.email}
                  </h3>
                  <a
                    href="mailto:truongha21062004@gmail.com"
                    className="text-xl font-bold text-[var(--foreground)] hover:text-sky-300 transition-colors break-all"
                  >
                    truongha21062004@gmail.com
                  </a>
                </div>
              </div>

              <div className="card group hover:scale-[1.02] transition-all duration-500 flex items-center gap-6 p-8">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-300 flex items-center justify-center text-2xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-2">
                    {t.address}
                  </h3>
                  <p className="text-xl font-bold text-[var(--foreground)]">
                    {t.address_val}
                  </p>
                </div>
              </div>
            </div>

            <Paper className="card p-8 bg-gradient-to-br from-[var(--card-bg)] via-[var(--card-bg)] to-emerald-500/10 border-2 border-emerald-500/20 shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
              <Stack gap="lg">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <Text className="text-xs uppercase tracking-[0.4em] text-[var(--primary)] opacity-80 mb-2">
                      {t.form_kicker}
                    </Text>
                    <Title
                      order={3}
                      className="text-3xl md:text-4xl text-[var(--foreground)] font-display"
                    >
                      {t.form_title}
                    </Title>
                    <Text className="text-[var(--text-muted)] leading-relaxed mt-2">
                      {t.form_desc}
                    </Text>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10 px-4 py-3 text-[var(--foreground)] animate-glow animate-badge-float">
                    <FaRegClock className="text-lg text-emerald-300" />
                    <div className="text-right">
                      <Text className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
                        {t.response_label}
                      </Text>
                      <Text className="text-sm font-semibold text-[var(--foreground)]">
                        {t.response_value}
                      </Text>
                    </div>
                  </div>
                </div>

                <form onSubmit={form.onSubmit(openPreview)}>
                  <Stack gap="md">
                    <Grid gutter="md">
                      <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput
                          label={t.name_label}
                          placeholder={t.name_placeholder}
                          withAsterisk
                          leftSection={<FaUser />}
                          leftSectionPointerEvents="none"
                          {...form.getInputProps("name")}
                          classNames={inputClassNames}
                          radius="lg"
                        />
                      </Grid.Col>
                      <Grid.Col span={{ base: 12, md: 6 }}>
                        <TextInput
                          label={t.email_label}
                          placeholder={t.email_placeholder}
                          withAsterisk
                          type="email"
                          leftSection={<FaAt />}
                          leftSectionPointerEvents="none"
                          {...form.getInputProps("email")}
                          classNames={inputClassNames}
                          radius="lg"
                        />
                      </Grid.Col>
                    </Grid>

                    <TextInput
                      label={t.subject_label}
                      placeholder={t.subject_placeholder}
                      withAsterisk
                      leftSection={<FaPenNib />}
                      leftSectionPointerEvents="none"
                      {...form.getInputProps("subject")}
                      classNames={inputClassNames}
                      radius="lg"
                    />

                    <Textarea
                      label={t.message_label}
                      placeholder={t.message_placeholder}
                      withAsterisk
                      leftSection={<FaRegCommentDots />}
                      leftSectionPointerEvents="none"
                      minRows={5}
                      autosize
                      {...form.getInputProps("message")}
                      classNames={inputClassNames}
                      radius="lg"
                    />

                    {status === "success" && (
                      <Alert
                        icon={<FaCheckCircle />}
                        color="green"
                        variant="light"
                        className="bg-green-500/10 border border-green-500/20 text-green-200"
                      >
                        {t.success}
                      </Alert>
                    )}

                    {status === "error" && error && (
                      <Alert
                        icon={<FaExclamationTriangle />}
                        color="red"
                        variant="light"
                        className="bg-red-500/10 border border-red-500/20 text-red-200"
                      >
                        {error}
                      </Alert>
                    )}

                    <Button
                      type="submit"
                      loading={status === "loading"}
                      leftSection={<FaPaperPlane />}
                      classNames={{
                        root: "w-full py-6 px-8 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:scale-[1.01] transition-all",
                        label: "text-lg font-bold",
                        section: "text-lg",
                      }}
                    >
                      {status === "loading" ? t.sending : t.send_btn}
                    </Button>
                  </Stack>
                </form>
              </Stack>
            </Paper>
          </div>
        </div>
      </div>

      <Modal
        opened={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={t.preview_title}
        centered
        radius="lg"
        overlayProps={{ opacity: 0.55, blur: 4 }}
        withCloseButton={false}
        classNames={{
          content:
            "bg-[var(--background)] text-[var(--foreground)] border border-[var(--card-border)]",
          header: "bg-transparent",
          body: "bg-transparent",
        }}
      >
        <Stack gap="md">
          <Text className="text-[var(--text-muted)]">{t.preview_desc}</Text>

          <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]/80 p-4">
            <div className="rounded-xl border border-emerald-500/20 bg-white p-5 text-slate-900 shadow-lg">
              <div className="border-b-2 border-emerald-500 pb-3">
                <Text className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {t.email_heading}
                </Text>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <Text className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {t.name_label}
                  </Text>
                  <Text className="text-base font-semibold text-slate-900">
                    {pendingValues?.name}
                  </Text>
                </div>
                <div>
                  <Text className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {t.email_label}
                  </Text>
                  <Text className="text-base font-semibold text-slate-900">
                    {pendingValues?.email}
                  </Text>
                </div>
                <div>
                  <Text className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {t.subject_label}
                  </Text>
                  <Text className="text-base font-semibold text-slate-900">
                    {pendingValues?.subject}
                  </Text>
                </div>
              </div>

              <div className="mt-4 rounded-lg border-l-4 border-emerald-500 bg-slate-50 p-4">
                <Text className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {t.message_label}
                </Text>
                <Text className="mt-2 text-sm text-slate-700 whitespace-pre-wrap">
                  {pendingValues?.message}
                </Text>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-3 text-center text-xs text-slate-400">
                <Text>{t.email_footer}</Text>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              classNames={{
                root: "flex-1 border-[var(--card-border)] text-[var(--foreground)] hover:bg-[var(--card-bg)]",
              }}
              onClick={() => setIsPreviewOpen(false)}
            >
              {t.preview_cancel}
            </Button>
            <Button
              classNames={{
                root: "flex-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white",
              }}
              onClick={confirmSend}
              loading={status === "loading"}
            >
              {t.preview_confirm}
            </Button>
          </div>
        </Stack>
      </Modal>
    </section>
  );
};

export default Contact;
