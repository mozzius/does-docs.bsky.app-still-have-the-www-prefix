import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Does docs.bsky.app still have the www. prefix?",
  description: "probably yes but click to find out",
  metadataBase: new URL(
    "https://www.does-docs.bsky.app-still-have-the-www-prefix.mozzius.dev"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
