import "./globals.css";
import Header from "@/src/components/layout/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import BottomNav from "@/src/components/layout/BottomNav";
import ReactQueryProvider from "./ReactQueryProvider";

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
    <html lang="es">
      <body className={robotoFont.className}>
        <ReactQueryProvider>
          <Header />
          <BottomNav className="fixed bottom-0 left-0 right-0 lg:hidden z-20" />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
