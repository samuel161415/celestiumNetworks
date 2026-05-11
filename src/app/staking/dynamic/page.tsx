import { StakingDashboard } from "../../components/StakingDashboard";
import { DynamicIcon } from "../../components/icons";

const STAKED_1D = [
  32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 28.5,
];
const STAKED_1H = [32, 32, 32, 31.5, 31, 30, 29, 28.5];
const STAKED_1W = [33, 33, 32.5, 32.2, 32, 31, 29.5, 28.5];
const STAKED_1C = [40, 38, 36, 34, 32, 31, 30, 28.5];

const STAKERS_1D = [
  20700, 20690, 20680, 20670, 20660, 20650, 20645, 20640, 20635, 20630, 20625,
];
const STAKERS_1H = [20627, 20627, 20626, 20626, 20625, 20625];
const STAKERS_1W = [20780, 20760, 20730, 20700, 20680, 20650, 20630, 20625];
const STAKERS_1C = [21200, 21100, 21000, 20900, 20800, 20700, 20650, 20625];

const REVENUES_1D = [7.0, 7.01, 7.02, 7.03, 7.04, 7.05, 7.06, 7.065, 7.07];
const REVENUES_1H = [7.065, 7.066, 7.067, 7.068, 7.069, 7.07];
const REVENUES_1W = [6.95, 6.97, 6.99, 7.02, 7.04, 7.05, 7.06, 7.07];
const REVENUES_1C = [6.6, 6.7, 6.8, 6.9, 7.0, 7.05, 7.07];

export default function Page() {
  return (
    <StakingDashboard
      title="Dynamic staking"
      subtitle="Liquidity for dynamic games payouts"
      icon={<DynamicIcon className="w-6 h-6" />}
      totals={[
        { label: "Total locked", value: "28.38B", coin: true },
        { label: "Total stakers", value: "20625", usersIcon: true },
        { label: "Total earned", value: "7.07B", coin: true },
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
      statsCardTitle="Dynamic games stats"
      statsRows={[
        { label: "games", value: "2", icon: "pool", coin: false },
        { label: "No bets", value: "", icon: "trending", coin: false },
        { label: "volume", value: "0", icon: "sparkles", coin: true },
      ]}
      cycleTitle="Dynamic cycle"
      cycleNumber="735"
      cycleProgressPct={4}
      cycleProgressLabel="27D 16H 59M"
      cycleStartDate="May 11, 2026"
      cycleEndDate="Jun 8, 2026"
      cycleStats={[
        { label: "New stakes", value: "+-3.47B", sub: "(0 stakers)", tone: "primary", coin: true },
        { label: "Cycle revenue", value: "-1.75B", sub: "(-6.17%)", tone: "green", coin: true },
        { label: "Available for unstake", value: "827.07M", sub: "1000 stakers", tone: "red", coin: true },
      ]}
      chartTabs={["Staked", "Stakers", "Revenues"]}
      chartColor="purple"
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
        },
        {
          name: "My Staking",
          columns: ["Staking Date", "Unlock Date", "Pool", "Amount", "Status", "Rewards"],
        },
        {
          name: "My Earnings",
          columns: ["Date", "Amount", "Transaction", "Pool"],
        },
      ]}
    />
  );
}
