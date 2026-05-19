import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Ajibola",
  description: "Personal blog by Isaac Ajibola",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
