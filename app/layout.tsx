import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Belajar Anatomi",
  description: "Pengenalan Anggota Tubuh Manusia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />*/}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
