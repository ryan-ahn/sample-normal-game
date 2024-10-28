import type { Metadata } from "next";

import "@repo/tailwind-config/tailwind.css";

export const metadata: Metadata = {
  title: "테이블 데이터 위치 변경하기",
  description: "테이블 데이터 위치 변경하기",
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
