"use client";

import { useState } from "react";
import {
  AlertIcon,
  CoinIcon,
  HelpIcon,
  LiquidityIcon,
  LockIcon,
  PoolIcon,
  SparklesIcon,
  TrendingIcon,
  UsersIcon,
} from "./components/icons";

type Tab = "Deposited" | "Liquidity providers" | "Revenues";
type TableTab = "Deposits" | "Claims";

export default function Home() {
  const [chartTab, setChartTab] = useState<Tab>("Deposited");
  const [tableTab, setTableTab] = useState<TableTab>("Deposits");
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full h-full p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 flex flex-col 2xl:px-0 relative">
      {/* Top header card */}
      <div className="border border-border rounded-lg bg-background-lighter p-4 flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <LiquidityIcon className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg font-semibold truncate">Liquidity Pool</h1>
            <p className="text-xs text-muted-foreground truncate">
              Provide liquidity for game payouts
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <Stat label="Total locked" value="6.67B" coin />
          <Stat label="Total earned" value="38.17M" coin />
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <HelpIcon className="w-6 h-6 text-primary" />
            <span>How to provide liquidity</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <AlertIcon className="w-6 h-6 text-primary" />
            <span>Report</span>
          </button>
        </div>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
        {/* LEFT: Provide liquidity + Nothing to claim */}
        <div className="lg:col-span-2 flex flex-col gap-3 lg:gap-4">
          <div className="relative overflow-hidden rounded-lg border border-border p-5 bg-gradient-to-br from-violet-900/60 via-violet-800/30 to-background-lighter">
            <div className="relative z-10">
              <h2 className="text-xl font-semibold">Provide liquidity</h2>
              <p className="text-xs text-muted-foreground mt-1">
                Lock period is 80 weeks per position
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 h-12 rounded-md bg-background/60 border border-border px-3">
                  <LockIcon className="w-4 h-4 text-muted-foreground" />
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount to Deposit"
                    inputMode="decimal"
                    className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => setAmount("0")}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    MAX
                  </button>
                </div>
                <button
                  type="button"
                  className="h-12 px-6 rounded-md bg-emerald-500/80 hover:bg-emerald-500 text-white text-sm font-medium transition-colors"
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background-lighter p-5">
            <h3 className="text-base font-semibold">Nothing to claim yet</h3>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span className="text-foreground font-medium">0</span>
              <CoinIcon className="w-3.5 h-3.5" />
              <span>pending next sync</span>
            </div>
          </div>

          {/* Chart card */}
          <div className="rounded-lg border border-border bg-background-lighter p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {(["Deposited", "Liquidity providers", "Revenues"] as Tab[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => setChartTab(t)}
                    className={`px-4 h-9 rounded-md text-sm transition-colors ${
                      chartTab === t
                        ? "bg-background-light text-foreground"
                        : "bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button className="h-9 px-3 rounded-md border border-border text-sm flex items-center gap-2 hover:bg-background-light transition-colors">
                1 hour
                <span className="opacity-60">▾</span>
              </button>
            </div>
            <div className="mt-4 h-56 w-full">
              <Sparkline />
            </div>
          </div>
        </div>

        {/* RIGHT: stats column */}
        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
            <SmallStat label="Your deposit" value="0" />
            <SmallStat label="Your share" value="0%" coin={false} />
            <SmallStat label="Your earnings" value="0" />
          </div>

          <div className="rounded-lg border border-border bg-background-lighter p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">Liquidity Pool stats</h3>
              <span className="text-xs text-muted-foreground">Your revenues:</span>
            </div>
            <div className="mt-4 flex gap-4 items-start">
              <div className="shrink-0 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CoinIcon className="w-12 h-12" />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-sm">
                <Row icon={<PoolIcon className="w-4 h-4 text-muted-foreground" />} label="Total deposited" value="6.67B" />
                <Row icon={<TrendingIcon className="w-4 h-4 text-muted-foreground" />} label="Share value" value="1.027" coin={false} />
                <Row icon={<SparklesIcon className="w-4 h-4 text-muted-foreground" />} label="Pool balance" value="6.77B" />
              </div>
              <div className="shrink-0 flex flex-col items-center gap-1 text-xs text-muted-foreground">
                <UsersIcon className="w-10 h-10 text-primary" />
                <span className="text-foreground font-medium flex items-center gap-1">
                  0 <CoinIcon className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background-lighter p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">
                LP sync cycle <span className="text-primary">#735</span> overview
              </div>
              <HelpIcon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="mt-3 flex justify-between text-xs text-muted-foreground">
              <span>Cycle start</span>
              <span>Cycle end</span>
            </div>
            <div className="mt-1 h-6 w-full rounded-md bg-background relative overflow-hidden border border-border">
              <div
                className="absolute inset-y-0 left-0 bg-emerald-500/80 flex items-center px-2 text-[10px] font-semibold text-black"
                style={{ width: "18%" }}
              >
                24D 12H 51M
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>May 7, 2026</span>
              <span>Jun 4, 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <CycleStat label="New deposits" value="+355.49M" sub="(110 providers)" tone="primary" />
              <CycleStat label="Cycle revenue" value="+42.26M" sub="(0.63%)" tone="green" />
              <CycleStat label="Ending deposits" value="0" sub="0 positions" tone="red" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom table */}
      <div className="rounded-lg border border-border bg-background-lighter p-4 mt-2">
        <div className="flex gap-2">
          {(["Deposits", "Claims"] as TableTab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTableTab(t)}
              className={`px-4 h-9 rounded-md text-sm transition-colors ${
                tableTab === t
                  ? "bg-background-light text-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-5 text-xs text-muted-foreground py-2 border-b border-border">
          <span>Token ID</span>
          <span>Status</span>
          <span>Amount</span>
          <span>Unlock Date</span>
          <span>Claimable</span>
        </div>
        <div className="py-12 text-center text-sm text-muted-foreground">
          No results.
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, coin }: { label: string; value: string; coin?: boolean }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold flex items-center gap-1">
        {value}
        {coin && <CoinIcon className="w-3.5 h-3.5" />}
      </span>
    </div>
  );
}

function SmallStat({ label, value, coin = true }: { label: string; value: string; coin?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-background-lighter p-3 flex flex-col gap-2">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-base font-semibold flex items-center gap-1">
        {value}
        {coin && <CoinIcon className="w-3.5 h-3.5" />}
      </span>
    </div>
  );
}

function Row({
  icon,
  label,
  value,
  coin = true,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  coin?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span className="font-semibold">{value}</span>
      {coin && <CoinIcon className="w-3 h-3" />}
      <span className="text-muted-foreground text-xs">{label}</span>
    </div>
  );
}

function CycleStat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: "primary" | "green" | "red";
}) {
  const toneCls =
    tone === "primary"
      ? "border-primary/40"
      : tone === "green"
      ? "border-emerald-500/40"
      : "border-red-500/40";
  const textCls =
    tone === "primary" ? "text-primary" : tone === "green" ? "text-emerald-400" : "text-red-400";
  return (
    <div className={`rounded-md border ${toneCls} p-2 flex flex-col items-center text-center gap-1`}>
      <span className="text-[10px] text-muted-foreground">{label}</span>
      <span className={`text-sm font-semibold ${textCls} flex items-center gap-1`}>
        {value}
        <CoinIcon className="w-3 h-3" />
      </span>
      <span className="text-[10px] text-muted-foreground">{sub}</span>
    </div>
  );
}

function Sparkline() {
  // 24 sample points trending upward
  const points = [
    6.66, 6.66, 6.66, 6.66, 6.66, 6.66, 6.66, 6.66, 6.665, 6.665, 6.665, 6.665, 6.665, 6.665, 6.665,
    6.665, 6.667, 6.667, 6.668, 6.669, 6.669, 6.669, 6.669, 6.67,
  ];
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const width = 800;
  const height = 200;
  const stepX = width / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * stepX;
      const y = height - ((p - min) / range) * (height - 20) - 10;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lpFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFC800" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FFC800" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L${width},${height} L0,${height} Z`} fill="url(#lpFill)" />
      <path d={path} fill="none" stroke="#FFC800" strokeWidth={2} />
      {points.map((p, i) => {
        const x = i * stepX;
        const y = height - ((p - min) / range) * (height - 20) - 10;
        return <circle key={i} cx={x} cy={y} r={3} fill="#FFC800" />;
      })}
    </svg>
  );
}
