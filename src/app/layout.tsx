import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Header from './components/Header';

export const metadata: Metadata = {
  title: "HUES",
  description: "Habib University Entrepreneurship Society",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans" suppressHydrationWarning>
        <Header />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
