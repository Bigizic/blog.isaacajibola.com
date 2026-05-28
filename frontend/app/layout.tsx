import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
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
    <html lang="en" className={bricolage.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <main className="site">
            <SiteHeader />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
