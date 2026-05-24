import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Isaac Ajibola",
  description: "Personal blog by Isaac Ajibola",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>
        <main className="site">
          <header className="site-header">
            <Link className="brand" href="/">
              Isaac Ajibola
            </Link>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
