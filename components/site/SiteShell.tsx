import type { ReactNode } from "react";
import {Navbar} from "@/components/home/Navbar";
import { Footer } from "@/components/home/Footer";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}