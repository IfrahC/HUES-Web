import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "react-hot-toast";

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

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
      <body className={grotesk.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
