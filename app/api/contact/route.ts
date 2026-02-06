import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  language?: "vi" | "en";
}

const requiredEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const getTransporter = () => {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing environment variables: ${missing.join(", ")}`);
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export async function POST(req: Request) {
  try {
    const {
      name = "",
      email = "",
      subject = "",
      message = "",
      language = "en",
    } = (await req.json()) as ContactPayload;

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();
    const resolvedLanguage = language === "vi" ? "vi" : "en";

    const labels =
      resolvedLanguage === "vi"
        ? {
            heading: "Thông tin liên hệ mới",
            name: "Họ và tên",
            email: "Email",
            subject: "Tiêu đề",
            message: "Nội dung",
            footer: "Email này được gửi từ form liên hệ portfolio",
            subject_prefix: "Liên hệ từ",
          }
        : {
            heading: "New Contact Form Submission",
            name: "Name",
            email: "Email",
            subject: "Subject",
            message: "Message",
            footer: "This email was sent from your portfolio contact form",
            subject_prefix: "Portfolio contact from",
          };

    if (trimmedName.length < 2) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    if (!validateEmail(trimmedEmail)) {
      return NextResponse.json({ error: "Email is invalid" }, { status: 400 });
    }

    if (trimmedSubject.length < 3) {
      return NextResponse.json(
        { error: "Subject is too short" },
        { status: 400 },
      );
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        { error: "Message is too short" },
        { status: 400 },
      );
    }

    const transporter = getTransporter();

    // Email sẽ được gửi đến truongha21062004@gmail.com
    const toAddress = "truongha21062004@gmail.com";

    await transporter.sendMail({
      from:
        process.env.CONTACT_FROM ||
        `Portfolio Mailer <${process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: trimmedEmail,
      subject: `${labels.subject_prefix} ${trimmedName} - ${trimmedSubject}`,
      text: `${labels.name}: ${trimmedName}\n${labels.email}: ${trimmedEmail}\n${labels.subject}: ${trimmedSubject}\n\n${labels.message}:\n${trimmedMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 3px solid #4CAF50; padding-bottom: 10px;">${labels.heading}</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #666;">${labels.name}:</strong> <span style="color: #333;">${trimmedName}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #666;">${labels.email}:</strong> <a href="mailto:${trimmedEmail}" style="color: #4CAF50; text-decoration: none;">${trimmedEmail}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #666;">${labels.subject}:</strong> <span style="color: #333;">${trimmedSubject}</span></p>
            </div>
            
            <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #4CAF50; border-radius: 5px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #666;">${labels.message}:</strong></p>
              <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${trimmedMessage}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 12px;">
              <p>${labels.footer}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Unable to send message right now." },
      { status: 500 },
    );
  }
}
