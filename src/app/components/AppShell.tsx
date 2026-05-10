"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";
import { MenuIcon, PersonNavIcon, PlugIcon, StakingIcon, WalletIcon } from "./icons";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const connectRef = useRef<HTMLButtonElement>(null);

  const stakingActive =
    pathname === "/" || pathname.startsWith("/staking") || pathname.startsWith("/statistics");
  const affiliateActive = pathname.startsWith("/affiliate");

  return (
    <div className="w-full min-h-dvh max-w-screen-2xl overflow-x-hidden mx-auto bg-background text-foreground flex relative">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />

      <div className="flex flex-col flex-1 w-full md:pl-64">
        <header className="flex flex-row items-center justify-between md:justify-end border-b px-4 border-border h-[68px] bg-background sticky top-0 z-10 gap-3">
          <Link
            href="/"
            className="shrink-0 md:hidden text-foreground hover:opacity-90 transition-opacity"
            onClick={() => setMobileOpen(false)}
          >
            <Logo className="[&_span:last-child]:text-sm [&_span:last-child]:max-[360px]:hidden" />
          </Link>

          <div className="flex flex-row items-center gap-2 shrink-0">
            <button
              id="connect-wallet"
              type="button"
              ref={connectRef}
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium border bg-transparent hover:bg-background-light text-foreground h-10 px-4 py-2 rounded-md border-primary gap-2 transition-colors"
            >
              <PlugIcon className="w-4 h-4" />
              Connect wallet
            </button>
          </div>
        </header>

        <main className="relative w-full flex-1 pb-[calc(4.25rem+env(safe-area-inset-bottom,0))] md:pb-0">
          {children}
        </main>

        {/* Mobile bottom navigation (reference: menu, staking, affiliate, wallet) */}
        <nav
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom,0px)]"
          aria-label="Primary navigation"
        >
          <div className="mx-auto max-w-screen-2xl grid grid-cols-4 h-16">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-sidebar-drawer"
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                mobileOpen ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <MenuIcon className="w-6 h-6" />
              Menu
            </button>

            <Link
              href="/staking/conservative"
              onClick={() => setMobileOpen(false)}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                stakingActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <StakingIcon className="w-6 h-6" />
              Staking
            </Link>

            <Link
              href="/affiliate"
              onClick={() => setMobileOpen(false)}
              className={`flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors ${
                affiliateActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <PersonNavIcon className="w-6 h-6" />
              Affiliate
            </Link>

            <button
              type="button"
              onClick={() => connectRef.current?.click()}
              className="flex flex-col items-center justify-center gap-1 text-[11px] font-medium text-muted-foreground"
            >
              <WalletIcon className="w-6 h-6" />
              Wallet
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
