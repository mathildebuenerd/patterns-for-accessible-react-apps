import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Story Seekers - Book store",
  description:
    "Embark on boundless adventures in captivating books at Story Seekers. Discover thrilling novels, fantasy epics, and heartwarming tales that will ignite your imagination.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
