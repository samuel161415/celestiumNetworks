"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AlertIcon,
  CoinIcon,
  HelpIcon,
  LockIcon,
  MenuIcon,
  PoolIcon,
  SparklesIcon,
  TrendingIcon,
  UsersIcon,
} from "./icons";

type CycleStatTone = "primary" | "green" | "red";

type CycleStatItem = {
  label: string;
  value: string;
  sub: string;
  tone: CycleStatTone;
  coin?: boolean;
};

type StatRow = {
  label: string;
  value: string;
  icon: "pool" | "trending" | "sparkles";
  coin?: boolean;
};

export type RangeKey = "1 hour" | "1 day" | "1 week" | "1 cycle";

export type ChartSeries = {
  /** points by chart tab name, then by range key */
  byTab: Record<string, Partial<Record<RangeKey, number[]>>>;
};

export type TableTabSpec = {
  name: string;
  columns: string[];
  rows?: (string | React.ReactNode)[][];
  pagination?: { totalResults: number; page: number; totalPages: number; pageSize: number };
};

export type StakingDashboardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  totals: { label: string; value: string; coin?: boolean; usersIcon?: boolean }[];
  helpLabel: string;
  stakeTitle: string;
  stakeSubtitle: string;
  stakeButtonLabel?: string;
  stakeEnded?: boolean;
  stakeEndedNote?: string;
  smallStats: { label: string; value: string; coin?: boolean }[];
  statsCardTitle: string;
  statsRows: StatRow[];
  cycleTitle: string;
  cycleNumber: string;
  cycleProgressPct: number;
  cycleProgressLabel: string;
  cycleStartDate: string;
  cycleEndDate: string;
  cycleStats: CycleStatItem[];
  chartTabs: string[];
  chartSeries: ChartSeries;
  defaultRange?: RangeKey;
  ranges?: RangeKey[];
  chartColor?: "primary" | "green" | "purple";
  tableTabs: TableTabSpec[];
};

const ALL_RANGES: RangeKey[] = ["1 hour", "1 day", "1 week", "1 cycle"];

export function StakingDashboard(props: StakingDashboardProps) {
  const {
    title,
    subtitle,
    icon,
    totals,
    helpLabel,
    stakeTitle,
    stakeSubtitle,
    stakeButtonLabel = "Stake",
    stakeEnded,
    stakeEndedNote,
    smallStats,
    statsCardTitle,
    statsRows,
    cycleTitle,
    cycleNumber,
    cycleProgressPct,
    cycleProgressLabel,
    cycleStartDate,
    cycleEndDate,
    cycleStats,
    chartTabs,
    chartSeries,
    defaultRange = "1 day",
    ranges = ALL_RANGES,
    chartColor = "primary",
    tableTabs,
  } = props;

  const [chartTab, setChartTab] = useState<string>(chartTabs[0]);
  const [range, setRange] = useState<RangeKey>(defaultRange);
  const [tableTab, setTableTab] = useState<string>(tableTabs[0]?.name ?? "");
  const [amount, setAmount] = useState("");

  const ICON_MAP = { pool: PoolIcon, trending: TrendingIcon, sparkles: SparklesIcon } as const;

  const activeData = useMemo(() => {
    const tabSeries = chartSeries.byTab[chartTab] ?? {};
    return tabSeries[range] ?? tabSeries[defaultRange] ?? Object.values(tabSeries)[0] ?? [];
  }, [chartSeries, chartTab, range, defaultRange]);

  const colorForTab = useMemo<"primary" | "green" | "purple">(() => {
    if (chartTab.toLowerCase() === "revenues") return "green";
    if (chartTab.toLowerCase() === "stakers" || chartTab.toLowerCase() === "liquidity providers")
      return "purple";
    return chartColor;
  }, [chartTab, chartColor]);

  const activeTable = tableTabs.find((t) => t.name === tableTab) ?? tableTabs[0];

  return (
    <div className="w-full p-2 md:p-3 lg:p-4 gap-2 md:gap-3 lg:gap-4 flex flex-col 2xl:px-0 relative">
      <div className="border border-border rounded-lg bg-background-lighter p-4 flex items-center gap-4 flex-wrap">
        <button className="md:hidden h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-background-light">
          <MenuIcon className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div className="min-w-0">
            <h1 className="text-lg font-semibold truncate">{title}</h1>
            <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          {totals.map((t) => (
            <Stat key={t.label} label={t.label} value={t.value} coin={t.coin} usersIcon={t.usersIcon} />
          ))}
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <HelpIcon className="w-6 h-6 text-primary" />
            <span>{helpLabel}</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <AlertIcon className="w-6 h-6 text-primary" />
            <span>Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
        <div className="lg:col-span-2 flex flex-col gap-3 lg:gap-4">
          <div className="relative overflow-hidden rounded-lg border border-border p-5 bg-gradient-to-br from-violet-900/60 via-violet-800/30 to-background-lighter">
            <div
              className={`relative z-10 ${
                stakeEnded ? "blur-sm pointer-events-none select-none" : ""
              }`}
            >
              <h2 className="text-xl font-semibold">{stakeTitle}</h2>
              <p className="text-xs text-muted-foreground mt-1">{stakeSubtitle}</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <div className="flex-1 flex items-center gap-2 h-12 rounded-md bg-background/60 border border-border px-3">
                  <LockIcon className="w-4 h-4 text-muted-foreground" />
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
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
                  className="h-12 px-6 rounded-md bg-emerald-500/80 hover:bg-emerald-500 text-white text-sm font-medium transition-colors disabled:opacity-50"
                  disabled={stakeEnded}
                >
                  {stakeButtonLabel}
                </button>
              </div>
            </div>

            {stakeEnded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-background/40 backdrop-blur-[2px]">
                <p className="text-sm font-semibold">
                  {stakeEndedNote ?? "Staking has ended."}{" "}
                  <button className="underline text-primary hover:opacity-80 transition-opacity">
                    More info
                  </button>
                </p>
                <a
                  href="/"
                  className="text-sm text-primary underline hover:opacity-80 transition-opacity"
                >
                  Use liquidity pool now
                </a>
              </div>
            )}
          </div>

          <div className="rounded-lg border border-border bg-background-lighter p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {chartTabs.map((t) => (
                  <button
                    key={t}
                    onClick={() => setChartTab(t)}
                    className={`px-4 h-9 rounded-md text-sm border transition-colors ${
                      chartTab === t
                        ? "border-primary text-foreground"
                        : "border-transparent bg-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <RangeSelect value={range} options={ranges} onChange={setRange} />
            </div>
            <div className="mt-4 h-56 w-full">
              <Sparkline data={activeData} color={colorForTab} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-4">
          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
            {smallStats.map((s) => (
              <SmallStat key={s.label} label={s.label} value={s.value} coin={s.coin} />
            ))}
          </div>

          <div className="rounded-lg border border-border bg-background-lighter p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">{statsCardTitle}</h3>
              <span className="text-xs text-muted-foreground">Your revenues:</span>
            </div>
            <div className="mt-4 flex gap-4 items-start">
              <div className="shrink-0 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CoinIcon className="w-12 h-12" />
              </div>
              <div className="flex-1 flex flex-col gap-2 text-sm">
                {statsRows.map((r) => {
                  const Icon = ICON_MAP[r.icon];
                  return (
                    <Row
                      key={r.label}
                      icon={<Icon className="w-4 h-4 text-muted-foreground" />}
                      label={r.label}
                      value={r.value}
                      coin={r.coin}
                    />
                  );
                })}
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
                {cycleTitle} <span className="text-primary">#{cycleNumber}</span> overview
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
                style={{ width: `${Math.max(0, Math.min(100, cycleProgressPct))}%` }}
              >
                {cycleProgressLabel}
              </div>
            </div>
            <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
              <span>{cycleStartDate}</span>
              <span>{cycleEndDate}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
              {cycleStats.map((c) => (
                <CycleStat key={c.label} {...c} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <DataTable
        tabs={tableTabs}
        active={activeTable}
        onChangeTab={setTableTab}
        currentTab={tableTab}
      />
    </div>
  );
}

function DataTable({
  tabs,
  active,
  onChangeTab,
  currentTab,
}: {
  tabs: TableTabSpec[];
  active: TableTabSpec;
  onChangeTab: (t: string) => void;
  currentTab: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background-lighter p-4 mt-2">
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.name}
            onClick={() => onChangeTab(t.name)}
            className={`px-4 h-9 rounded-md text-sm border transition-colors ${
              currentTab === t.name
                ? "border-primary text-foreground"
                : "border-gray-800 bg-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div
        className="mt-4 grid text-xs text-muted-foreground py-2 border-b border-border"
        style={{ gridTemplateColumns: `repeat(${active.columns.length}, minmax(0,1fr))` }}
      >
        {active.columns.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>

      {active.rows && active.rows.length > 0 ? (
        <div className="divide-y divide-border/60">
          {active.rows.map((r, i) => (
            <div
              key={i}
              className="grid items-center text-sm py-3"
              style={{ gridTemplateColumns: `repeat(${active.columns.length}, minmax(0,1fr))` }}
            >
              {r.map((cell, j) => (
                <div key={j} className="truncate pr-2">
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center text-sm text-muted-foreground">No results.</div>
      )}

      {active.pagination && (
        <div className="flex items-center justify-between text-xs text-muted-foreground mt-4 flex-wrap gap-2">
          <span>{active.pagination.totalResults} results.</span>
          <div className="flex items-center gap-2">
            <span>Results per page</span>
            <button className="h-8 w-14 rounded border border-border bg-background flex items-center justify-center gap-1">
              {active.pagination.pageSize} ▾
            </button>
            <span className="ml-3">
              Page {active.pagination.page} of {active.pagination.totalPages}
            </span>
            <PageBtn>«</PageBtn>
            <PageBtn>‹</PageBtn>
            <PageBtn>›</PageBtn>
            <PageBtn>»</PageBtn>
          </div>
        </div>
      )}
    </div>
  );
}

function PageBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="h-8 w-8 rounded border border-border bg-background hover:bg-background-light transition-colors">
      {children}
    </button>
  );
}

function RangeSelect({
  value,
  options,
  onChange,
}: {
  value: RangeKey;
  options: RangeKey[];
  onChange: (v: RangeKey) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="h-9 min-w-[110px] px-3 rounded-md border border-border text-sm flex items-center justify-between gap-2 hover:bg-background-light transition-colors"
        aria-expanded={open}
      >
        <span>{value}</span>
        <span className="opacity-60">▾</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-32 rounded-md border border-border bg-background-lighter shadow-lg z-30 overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-3 h-9 text-sm text-left hover:bg-background-light ${
                opt === value ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              <span className="w-3 inline-flex justify-center">{opt === value ? "✓" : ""}</span>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  coin,
  usersIcon,
}: {
  label: string;
  value: string;
  coin?: boolean;
  usersIcon?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold flex items-center gap-1">
        {value}
        {coin && <CoinIcon className="w-3.5 h-3.5" />}
        {usersIcon && <UsersIcon className="w-3.5 h-3.5 text-muted-foreground" />}
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

function CycleStat({ label, value, sub, tone, coin = true }: CycleStatItem) {
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
        {coin && <CoinIcon className="w-3 h-3" />}
      </span>
      <span className="text-[10px] text-muted-foreground">{sub}</span>
    </div>
  );
}

function Sparkline({
  data,
  color = "primary",
}: {
  data: number[];
  color?: "primary" | "green" | "purple";
}) {
  const stroke = color === "green" ? "#22c55e" : color === "purple" ? "#8b5cf6" : "#FFC800";
  const points = data.length >= 2 ? data : [0, 0];
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

  const gradId = `sparkFill-${color}`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L${width},${height} L0,${height} Z`} fill={`url(#${gradId})`} />
      <path d={path} fill="none" stroke={stroke} strokeWidth={2} />
      {points.map((p, i) => {
        const x = i * stepX;
        const y = height - ((p - min) / range) * (height - 20) - 10;
        return <circle key={i} cx={x} cy={y} r={3} fill={stroke} />;
      })}
    </svg>
  );
}
