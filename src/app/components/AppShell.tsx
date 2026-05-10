"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MenuIcon, PlugIcon } from "./icons";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full min-h-dvh max-w-screen-2xl overflow-x-hidden mx-auto bg-background text-foreground flex relative">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <div className="flex flex-col flex-1 w-full md:pl-64">
        <header className="flex flex-row items-center justify-between md:justify-end relative border-b px-4 border-border h-[68px] bg-background sticky top-0 z-10">
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-background-light text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open sidebar"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
          <div className="flex flex-row items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border bg-transparent hover:bg-background-light text-foreground h-10 px-4 py-2 rounded-md border-primary gap-2 transition-colors"
            >
              <PlugIcon className="w-4 h-4" />
              Connect wallet
            </button>
          </div>
        </header>

        <main className="relative w-full flex-1">{children}</main>
      </div>
    </div>
  );
}
