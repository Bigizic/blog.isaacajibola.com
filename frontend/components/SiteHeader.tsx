"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Isaac Ajibola
      </Link>
      <ThemeToggle />
    </header>
  );
}
