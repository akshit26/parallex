import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parallex | Cyberpunk Growth Experience",
  description: "Cinematic agency experience for AI automation, influencer marketing, performance media, and SEO."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
