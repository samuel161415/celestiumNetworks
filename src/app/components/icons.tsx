import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function StakingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M11.2266 1.07342C10.7812 1.19529 11.0109 1.08748 6.04688 3.53436C1.24688 5.90154 1.34063 5.84998 1.11563 6.34686C1.03125 6.53904 1.00781 6.67029 1.00781 7.01248C1.00781 7.39217 1.02188 7.46248 1.14844 7.71092C1.22813 7.86561 1.37813 8.05779 1.5 8.15623C1.71563 8.33904 10.4625 12.675 10.9594 12.8484C11.4047 13.0031 11.9062 13.0547 12.3703 12.9937C12.5953 12.9609 12.8953 12.9 13.0359 12.8484C13.5328 12.675 22.2797 8.33904 22.5 8.16092C22.6219 8.05779 22.7719 7.86561 22.8516 7.71092C22.9781 7.46717 22.9922 7.39217 22.9922 7.01248C22.9922 6.64217 22.9734 6.54842 22.8656 6.32811C22.6688 5.92967 22.4578 5.76092 21.6562 5.36248C16.4438 2.77967 13.2703 1.23748 12.9844 1.13904C12.5016 0.970293 11.7094 0.942168 11.2266 1.07342Z"
        fill="currentColor"
      />
      <path
        d="M1.77188 10.6453C1.52813 10.7719 1.28906 11.025 1.13906 11.3109C1.02188 11.5266 1.00781 11.6062 1.00781 12C1.00781 12.3984 1.02188 12.4734 1.13906 12.6937C1.20938 12.8297 1.35 13.0172 1.44844 13.1156C1.58438 13.2469 2.71875 13.8281 6.21563 15.5437C8.74219 16.7859 10.9219 17.8406 11.0625 17.8875C11.4328 18.0141 12.5672 18.0141 12.9375 17.8875C13.0781 17.8406 15.2578 16.7859 17.7844 15.5484C21.2906 13.8187 22.4109 13.2516 22.5516 13.1156C22.65 13.0172 22.7906 12.8297 22.8609 12.6937C22.9781 12.4734 22.9922 12.3984 22.9922 12C22.9922 11.6297 22.9734 11.5172 22.8797 11.3344C22.6688 10.9031 22.2141 10.5469 21.8766 10.5469C21.7594 10.5469 20.5359 11.1281 17.4 12.6703C14.1375 14.2781 13.0078 14.8125 12.7453 14.8781C12.3234 14.9812 11.6531 14.9812 11.2828 14.8828C10.8656 14.775 10.6641 14.6812 6.3375 12.5437C3.18281 10.9875 2.25 10.5469 2.11875 10.5469C2.02031 10.5516 1.86563 10.5937 1.77188 10.6453Z"
        fill="currentColor"
      />
      <path
        d="M1.90781 15.5859C0.960937 15.914 0.675 17.3109 1.39687 18.0609C1.59375 18.2672 2.15625 18.5531 7.54688 21.2015C11.2922 23.0437 11.2922 23.0437 12.1406 23.0062C12.4969 22.9875 12.7313 22.9453 12.9844 22.8609C13.1766 22.7953 15.1828 21.8297 17.4375 20.7187C19.6922 19.6031 21.7359 18.6 21.9703 18.4828C22.4531 18.2484 22.725 17.9953 22.8891 17.6344C23.0344 17.325 23.0344 16.664 22.8938 16.3547C22.6875 15.9094 22.2375 15.5484 21.8906 15.5484C21.7406 15.5484 20.8688 15.9656 17.4984 17.625C15.1828 18.7687 13.1438 19.7531 12.9609 19.8187C12.6703 19.9265 12.5625 19.9406 12 19.9406C11.4375 19.9406 11.3297 19.9265 11.0391 19.8187C10.8609 19.7531 8.82188 18.7687 6.51562 17.6344C4.20937 16.5 2.26875 15.5578 2.20312 15.5484C2.1375 15.5344 2.00625 15.5484 1.90781 15.5859Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ConservativeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M7 10h10M7 14h6" />
    </svg>
  );
}

export function DynamicIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2v4" />
      <path d="M5 8c0-2 3-3 7-3s7 1 7 3" />
      <path d="M5 8v9c0 2 3 3 7 3s7-1 7-3V8" />
      <path d="M5 13c0 2 3 3 7 3s7-1 7-3" />
    </svg>
  );
}

export function LiquidityIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2.69c-3 4-6 7-6 11a6 6 0 0 0 12 0c0-4-3-7-6-11z" />
    </svg>
  );
}

export function AffiliateIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="18" cy="6" r="3" fill="currentColor" />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
      <path d="M8.5 10.5l7-3M8.5 13.5l7 3" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

export function WorkflowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 22V2" />
    </svg>
  );
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
      <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
    </svg>
  );
}

export function DocsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function PanelLeftCloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="m16 15-3-3 3-3" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function PlugIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m19 5 3-3" />
      <path d="m2 22 3-3" />
      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
      <path d="M7.5 13.5 10 11" />
      <path d="M10.5 16.5 13 14" />
      <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
    </svg>
  );
}

export function HelpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function AlertIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

export function CoinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" fill="#FFC800" />
      <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0a0a14">
        C
      </text>
    </svg>
  );
}

/** Person outline — mobile bottom nav Affiliate (reference UI) */
export function PersonNavIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20v-1.5a5.5 5.5 0 0 1 5.5-5.5h5A5.5 5.5 0 0 1 20 18.5V20" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
      <path d="M3 7h16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3z" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
      <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75z" />
      <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z" />
    </svg>
  );
}

export function TrendingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export function PoolIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12h20" />
      <path d="M2 17c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
      <path d="M2 7c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0 3 1 4.5 0" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="11" x="3" y="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
