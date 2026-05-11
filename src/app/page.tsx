import { StakingDashboard } from "./components/StakingDashboard";
import { LiquidityIcon } from "./components/icons";

const DEPOSITED_1D = [
  6.66, 6.66, 6.66, 6.66, 6.66, 6.66, 6.66, 6.66, 6.665, 6.665, 6.665, 6.665, 6.665, 6.665, 6.665,
  6.665, 6.667, 6.667, 6.668, 6.669, 6.669, 6.669, 6.669, 6.67,
];
const DEPOSITED_1H = [6.668, 6.668, 6.669, 6.669, 6.669, 6.67, 6.67, 6.67];
const DEPOSITED_1W = [6.62, 6.63, 6.64, 6.65, 6.66, 6.665, 6.668, 6.67];
const DEPOSITED_1C = [6.4, 6.45, 6.5, 6.55, 6.6, 6.65, 6.67];

const PROVIDERS_1D = [110, 110, 110, 110, 110, 109, 109, 108, 108, 110, 110];
const PROVIDERS_1H = [110, 110, 110, 110];
const PROVIDERS_1W = [105, 106, 108, 109, 110, 110, 110, 110];
const PROVIDERS_1C = [90, 95, 100, 105, 108, 110];

const REVENUES_1D = [
  37.0, 37.2, 37.4, 37.5, 37.7, 37.9, 38.0, 38.05, 38.1, 38.13, 38.15, 38.16, 38.17,
];
const REVENUES_1H = [38.16, 38.165, 38.168, 38.17];
const REVENUES_1W = [36, 36.5, 37, 37.5, 37.8, 38.0, 38.1, 38.17];
const REVENUES_1C = [33, 34, 35, 36, 37, 38, 38.17];

export default function Home() {
  return (
    <StakingDashboard
      title="Liquidity Pool"
      subtitle="Provide liquidity for game payouts"
      icon={<LiquidityIcon className="w-6 h-6" />}
      totals={[
        { label: "Total locked", value: "6.67B", coin: true },
        { label: "Total earned", value: "38.17M", coin: true },
      ]}
      helpLabel="How to provide liquidity"
      stakeTitle="Provide liquidity"
      stakeSubtitle="Lock period is 80 weeks per position"
      stakeButtonLabel="Deposit"
      smallStats={[
        { label: "Your deposit", value: "0", coin: true },
        { label: "Your share", value: "0%", coin: false },
        { label: "Your earnings", value: "0", coin: true },
      ]}
      statsCardTitle="Liquidity Pool stats"
      statsRows={[
        { label: "Total deposited", value: "6.67B", icon: "pool", coin: true },
        { label: "Share value", value: "1.027", icon: "trending", coin: false },
        { label: "Pool balance", value: "6.77B", icon: "sparkles", coin: true },
      ]}
      cycleTitle="LP sync cycle"
      cycleNumber="735"
      cycleProgressPct={18}
      cycleProgressLabel="24D 12H 51M"
      cycleStartDate="May 7, 2026"
      cycleEndDate="Jun 4, 2026"
      cycleStats={[
        { label: "New deposits", value: "+355.49M", sub: "(110 providers)", tone: "primary", coin: true },
        { label: "Cycle revenue", value: "+42.26M", sub: "(0.63%)", tone: "green", coin: true },
        { label: "Ending deposits", value: "0", sub: "0 positions", tone: "red", coin: true },
      ]}
      chartTabs={["Deposited", "Liquidity providers", "Revenues"]}
      defaultRange="1 day"
      chartSeries={{
        byTab: {
          Deposited: {
            "1 hour": DEPOSITED_1H,
            "1 day": DEPOSITED_1D,
            "1 week": DEPOSITED_1W,
            "1 cycle": DEPOSITED_1C,
          },
          "Liquidity providers": {
            "1 hour": PROVIDERS_1H,
            "1 day": PROVIDERS_1D,
            "1 week": PROVIDERS_1W,
            "1 cycle": PROVIDERS_1C,
          },
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
          name: "Deposits",
          columns: ["Token ID", "Status", "Amount", "Unlock Date", "Claimable"],
        },
        {
          name: "Claims",
          columns: ["Date", "Amount", "Transaction"],
        },
      ]}
    />
  );
}
