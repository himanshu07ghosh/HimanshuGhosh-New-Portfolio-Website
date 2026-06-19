import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://himanshughosh.dev"),
  title: "Himanshu Ghosh — Software Engineer & AI/ML Developer",
  description:
    "Portfolio of Himanshu Ghosh, B.Tech CSE student building machine learning systems, scalable web applications, and software solutions. Open to Software Engineering, AI/ML, and Full Stack internships.",
  keywords: [
    "Himanshu Ghosh",
    "Software Engineer Intern",
    "AI ML Developer",
    "Full Stack Developer",
    "B.Tech Computer Science",
    "Portfolio",
  ],
  authors: [{ name: "Himanshu Ghosh" }],
  openGraph: {
    title: "Himanshu Ghosh — Software Engineer & AI/ML Developer",
    description:
      "Building machine learning systems, scalable web apps, and software solutions. B.Tech CSE student open to SWE, AI/ML and Full Stack internships.",
    url: "https://himanshughosh.dev",
    siteName: "Himanshu Ghosh",
    images: ["/images/himanshu-landscape.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Ghosh — Software Engineer & AI/ML Developer",
    description: "Software Engineer | AI/ML Developer | Full Stack Developer",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink text-paper antialiased">{children}</body>
    </html>
  );
}
