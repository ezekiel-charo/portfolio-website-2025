import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezekiel Charo | Projects",
  description: "Ezekiel Charo's personal projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
