import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { Providers } from "@/components/Providers";
import WelcomeLetter from "@/components/WelcomeLetter";
import Chatbot from "@/components/Chatbot";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nguyễn Văn Trường - Frontend Developer Portfolio",
  description:
    "Portfolio website của Nguyễn Văn Trường - Frontend Developer chuyên về React.js, Next.js, TypeScript và TailwindCSS",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Nguyễn Văn Trường" }],
  openGraph: {
    title: "Nguyễn Văn Trường - Frontend Developer",
    description: "Portfolio website của Frontend Developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} ${spaceGrotesk.variable}`}>
        <Providers>
          <WelcomeLetter />
          {children}
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
