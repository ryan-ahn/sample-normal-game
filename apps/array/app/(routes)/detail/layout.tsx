import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 | 디테일 페이지",
  description: "상세 내용을 확인하세요.",
};

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
