import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://devmako.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Devmako — Software Developer",
  description:
    "Devmako — Software developer building modern web applications, digital experiences, and full-stack solutions.",
  openGraph: {
    title: "Devmako — Software Developer",
    description:
      "Devmako — Software developer building modern web applications, digital experiences, and full-stack solutions.",
    url: siteUrl,
    siteName: "Devmako",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devmako — Software Developer",
    description:
      "Devmako — Software developer building modern web applications, digital experiences, and full-stack solutions.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
