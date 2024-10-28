import type { Metadata } from "next";

import "@repo/tailwind-config/tailwind.css";

export const metadata: Metadata = {
  title: "MBTI 테스트",
  description: "MBTI 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
