import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 | 로그인 페이지",
  description: "로그인을 해주세요",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
