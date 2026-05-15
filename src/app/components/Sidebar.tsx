"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import {
  AffiliateIcon,
  ChartIcon,
  ChevronDownIcon,
  ConservativeIcon,
  DocsIcon,
  DynamicIcon,
  GlobeIcon,
  LiquidityIcon,
  NetworkIcon,
  PanelLeftCloseIcon,
  ShieldIcon,
  StakingIcon,
  SupportIcon,
  WorkflowIcon,
} from "./icons";

type SubItem = { label: string; href: string; icon: React.ComponentType<{ className?: string }> };
type MenuItem = {
  label: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  external?: boolean;
  children?: SubItem[];
};

const MENU: MenuItem[] = [
  {
    label: "Staking",
    icon: StakingIcon,
    children: [
      { label: "Conservative", href: "/staking/conservative", icon: ConservativeIcon },
      { label: "Dynamic", href: "/staking/dynamic", icon: DynamicIcon },
      { label: "Liquidity Pool", href: "/", icon: LiquidityIcon },
    ],
  },
  {
    label: "Affiliate",
    icon: AffiliateIcon,
    children: [
      { label: "Overview", href: "/affiliate", icon: AffiliateIcon },
      { label: "Linear tree", href: "/affiliate/linear", icon: WorkflowIcon },
      { label: "Binary tree", href: "/affiliate/binary", icon: NetworkIcon },
      { label: "Career", href: "/affiliate/career", icon: ShieldIcon },
    ],
  },
  { label: "Statistics", href: "/statistics", icon: ChartIcon },
  {
    label: "Documentation",
    href: "https://celestium-docs.gitbook.io/celestium-docs",
    icon: DocsIcon,
    external: true,
  },
  {
    label: "Support",
    href: "mailto:contact@celestium.digital",
    icon: SupportIcon,
    external: true,
  },
];

type Props = {
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({ mobileOpen, onMobileClose }: Props) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    Staking: true,
    Affiliate: false,
  });

  useEffect(() => {
    setOpenGroups((prev) => {
      const next = { ...prev };
      for (const item of MENU) {
        if (item.children?.some((c) => c.href === pathname)) {
          next[item.label] = true;
        }
      }
      return next;
    });
  }, [pathname]);

  function toggleGroup(label: string) {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  function isActive(href: string) {
    return pathname === href;
  }

  const content = (
    <div className="flex h-full w-full flex-col relative overflow-hidden bg-gradient-to-b from-background to-secondary rounded-lg border border-border">
      <div className="w-80 h-[617px] top-1/2 -translate-y-[40%] bg-violet-900/70 rounded-full blur-[180px] absolute -right-32 pointer-events-none" />

      <div className="flex h-[54px] flex-row items-center gap-2 px-3 py-2 w-full justify-between relative">
        <Link href="/" className="text-foreground" onClick={onMobileClose}>
          <Logo />
        </Link>
        <button
          className="md:hidden h-7 w-7 inline-flex items-center justify-center text-muted-foreground rounded-md hover:bg-sidebar-item/40"
          onClick={onMobileClose}
          aria-label="Close sidebar"
        >
          <PanelLeftCloseIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="h-px w-full bg-border/60" />

      <nav className="flex min-h-0 flex-1 flex-col gap-2 relative overflow-y-auto scrollbar-thin p-2">
        {MENU.map((item) => {
          if (item.children) {
            const open = openGroups[item.label] ?? false;
            return (
              <div key={item.label} className="rounded-lg bg-sidebar-item/10 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleGroup(item.label)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-2 cursor-pointer rounded-md p-3 text-left h-10 text-sm hover:bg-sidebar-item/20 transition-colors"
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                  <span className="ml-auto">
                    <ChevronDownIcon
                      className={`w-4 h-4 bg-foreground/20 rounded-sm transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
                {open && (
                  <div className="flex flex-col gap-1 bg-sidebar-item/10 p-2 rounded-b-lg">
                    {item.children.map((sub) => {
                      const active = isActive(sub.href);
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={onMobileClose}
                          aria-current={active ? "page" : undefined}
                          className={`flex w-full items-center gap-2 rounded-md p-3 text-left h-10 text-sm transition-colors ${
                            active
                              ? "bg-sidebar-item/40 text-foreground"
                              : "hover:bg-sidebar-item/20 text-foreground/90"
                          }`}
                        >
                          <sub.icon className="w-4 h-4 shrink-0" />
                          <span className="truncate">{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          if (item.external && item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={onMobileClose}
                className="flex w-full items-center gap-2 rounded-lg p-3 h-10 text-sm bg-sidebar-item/10 hover:bg-sidebar-item/20 transition-colors"
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </a>
            );
          }

          if (item.href) {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onMobileClose}
                aria-current={active ? "page" : undefined}
                className={`flex w-full items-center gap-2 rounded-lg p-3 h-10 text-sm transition-colors ${
                  active
                    ? "bg-sidebar-item/30 text-foreground"
                    : "bg-sidebar-item/10 hover:bg-sidebar-item/20"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          }

          return (
            <button
              key={item.label}
              type="button"
              className="flex w-full items-center gap-2 rounded-lg p-3 h-10 text-sm bg-sidebar-item/10 hover:bg-sidebar-item/20 transition-colors text-left"
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="h-px w-full bg-border/60" />

      <div className="p-2 relative">
        <button
          type="button"
          className="h-10 w-full rounded-md border border-border bg-background-lighter px-3 py-2 text-sm flex items-center justify-between gap-2 hover:bg-background-light transition-colors"
        >
          <span className="flex items-center gap-2">
            <GlobeIcon className="w-4 h-4" />
            English
          </span>
          <ChevronDownIcon className="w-4 h-4 opacity-50" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 z-20 w-64 p-2">
        {content}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onMobileClose}
          aria-hidden
        />
      )}
      <aside
        id="mobile-sidebar-drawer"
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 p-2 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {content}
      </aside>
    </>
  );
}
