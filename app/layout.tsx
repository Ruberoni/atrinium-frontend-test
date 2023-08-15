import Header from "@/components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import BottomNav from "@/components/layout/BottomNav";

const robotoFont = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Pokemon",
  description: "Atrinium front-end test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoFont.className}>
        <Header />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
