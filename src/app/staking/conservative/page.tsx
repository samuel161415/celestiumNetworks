import { StakingDashboard } from "../../components/StakingDashboard";
import { ConservativeIcon, CoinIcon } from "../../components/icons";

const STAKED_1D = [
  3.68, 3.68, 3.68, 3.675, 3.675, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67, 3.67,
  3.67, 3.66, 3.66, 3.66, 3.66, 3.66, 3.66, 3.66, 3.66, 3.66, 3.66, 3.65, 3.65, 3.65, 3.65, 3.65,
];
const STAKED_1H = [3.66, 3.66, 3.66, 3.66, 3.66, 3.66, 3.65, 3.65, 3.65, 3.65, 3.65, 3.65];
const STAKED_1W = [3.7, 3.69, 3.69, 3.68, 3.68, 3.67, 3.66, 3.65];
const STAKED_1C = [3.78, 3.76, 3.74, 3.72, 3.7, 3.68, 3.66, 3.65];

const STAKERS_1D = [
  8510, 8510, 8510, 8508, 8506, 8504, 8503, 8502, 8500, 8498, 8497, 8495, 8493, 8492, 8490, 8488,
  8487, 8486, 8485,
];
const STAKERS_1H = [8489, 8489, 8488, 8487, 8487, 8486, 8485, 8485];
const STAKERS_1W = [8540, 8530, 8520, 8510, 8500, 8495, 8488, 8485];
const STAKERS_1C = [8700, 8650, 8600, 8550, 8520, 8500, 8490, 8485];

const REVENUES_1D = [
  4.19, 4.2, 4.2, 4.21, 4.22, 4.23, 4.25, 4.27, 4.29, 4.31, 4.32, 4.33, 4.34, 4.35, 4.36, 4.36,
  4.37,
];
const REVENUES_1H = [4.36, 4.36, 4.365, 4.367, 4.368, 4.369, 4.37, 4.37];
const REVENUES_1W = [4.2, 4.22, 4.25, 4.28, 4.31, 4.33, 4.35, 4.37];
const REVENUES_1C = [4.0, 4.05, 4.1, 4.15, 4.22, 4.28, 4.33, 4.37];

const POOL_ROWS: (string | React.ReactNode)[][] = [
  ["0xcb3...779", <ProgressCell key="1" value={37} />, <CoinCell key="1v" value="3.45M" />],
  ["0xA30...933", <ProgressCell key="2" value={100} />, <CoinCell key="2v" value="13.04M" />],
  ["0x0c2...FAC", <ProgressCell key="3" value={100} />, <CoinCell key="3v" value="8.68M" />],
  ["0x0A3...852", <ProgressCell key="4" value={100} />, <CoinCell key="4v" value="21.62M" />],
  ["0x7B1...31f", <ProgressCell key="5" value={100} />, <CoinCell key="5v" value="289.21M" />],
];

function ProgressCell({ value, max = 100 }: { value: number; max?: number }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-muted-foreground">
        ({value}/{max})
      </span>
      <div className="h-1.5 w-full bg-background rounded">
        <div className="h-full bg-emerald-500 rounded" style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </div>
  );
}

function CoinCell({ value }: { value: string }) {
  return (
    <span className="flex items-center gap-1 justify-end text-sm">
      {value}
      <CoinIcon className="w-3.5 h-3.5" />
    </span>
  );
}

export default function Page() {
  return (
    <StakingDashboard
      title="Conservative staking"
      subtitle="Gains fees from shared betting"
      icon={<ConservativeIcon className="w-6 h-6" />}
      totals={[
        { label: "Total locked", value: "3.65B", coin: true },
        { label: "Total stakers", value: "8485", usersIcon: true },
        { label: "Total earned", value: "4.37B", coin: true },
      ]}
      helpLabel="How to stake"
      stakeTitle="Stake BET token"
      stakeSubtitle="Staking period is fixed for 80 weeks"
      stakeButtonLabel="Stake"
      stakeEnded
      stakeEndedNote="Staking has ended."
      smallStats={[
        { label: "Your staking", value: "0", coin: true },
        { label: "Your share", value: "0%", coin: false },
        { label: "Your earnings", value: "0", coin: true },
      ]}
      statsCardTitle="Conservative games stats"
      statsRows={[
        { label: "games", value: "3", icon: "pool", coin: false },
        { label: "No bets", value: "", icon: "trending", coin: false },
        { label: "volume", value: "0", icon: "sparkles", coin: true },
      ]}
      cycleTitle="Conservative cycle"
      cycleNumber="2940"
      cycleProgressPct={52}
      cycleProgressLabel="3D 16H 58M"
      cycleStartDate="May 8, 2026 15:00"
      cycleEndDate="May 15, 2026 15:00"
      cycleStats={[
        { label: "New stakes", value: "0", sub: "(-9 stakers)", tone: "primary", coin: true },
        { label: "Cycle revenue", value: "+18.62M", sub: "(0.51%)", tone: "green", coin: true },
        { label: "Available for unstake", value: "39.43M", sub: "207 stakers", tone: "red", coin: true },
      ]}
      chartTabs={["Staked", "Stakers", "Revenues"]}
      defaultRange="1 day"
      chartSeries={{
        byTab: {
          Staked: { "1 hour": STAKED_1H, "1 day": STAKED_1D, "1 week": STAKED_1W, "1 cycle": STAKED_1C },
          Stakers: { "1 hour": STAKERS_1H, "1 day": STAKERS_1D, "1 week": STAKERS_1W, "1 cycle": STAKERS_1C },
          Revenues: {
            "1 hour": REVENUES_1H,
            "1 day": REVENUES_1D,
            "1 week": REVENUES_1W,
            "1 cycle": REVENUES_1C,
          },
        },
      }}
      tableTabs={[
        {
          name: "Pools",
          columns: ["Pool", "Capacity", "Total staked"],
          rows: POOL_ROWS,
          pagination: { totalResults: 162, page: 1, totalPages: 33, pageSize: 5 },
        },
        {
          name: "My Staking",
          columns: ["Staking Date", "Unlock Date", "Pool", "Amount", "Status", "Rewards"],
        },
        {
          name: "My Earnings",
          columns: ["Date", "Amount", "Transaction", "Pool"],
        },
        {
          name: "My Claims",
          columns: ["Date", "Amount", "Transaction"],
        },
      ]}
    />
  );
}
