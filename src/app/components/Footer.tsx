import { Logo } from "./Logo";
import { CoinIcon } from "./icons";

const COLS = [
  {
    title: "Betfin Games",
    links: ["Crypto Predict", "Roulette", "Lucky Round", "Stones", "Lottery"],
  },
  {
    title: "Finance Reward System",
    links: ["Conservative staking", "Dynamic staking", "Affiliate & binary matching", "Become a partner"],
  },
  {
    title: "About Betfin",
    links: ["Official contracts", "Audits", "Legal disclaimers"],
  },
];

export function Footer() {
  return (
    <footer className="mt-6 border-t border-border bg-background">
      <div className="px-4 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 flex flex-col gap-3 text-foreground">
          <Logo />
          <p className="text-xs text-muted-foreground max-w-[260px]">
            This site is part of the BetFin decentralized ecosystem
          </p>
        </div>
        {COLS.map((col) => (
          <div key={col.title} className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
            <ul className="flex flex-col gap-1.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="px-4 lg:px-8 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-border/60 pt-6">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>Socials:</span>
          <SocialBtn label="Twitter">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99-3.57-.18-6.74-1.89-8.86-4.49-.37.64-.58 1.38-.58 2.17 0 1.49.76 2.81 1.91 3.58A4.27 4.27 0 0 1 2.8 9.7v.05c0 2.08 1.48 3.81 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4.01 2.97A8.6 8.6 0 0 1 2 18.57 12.13 12.13 0 0 0 8.56 20.5c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.13-2.22-.77.34-1.6.57-2.47.67z" />
            </svg>
          </SocialBtn>
          <SocialBtn label="Telegram">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M21.94 4.4 18.5 20.6c-.26 1.16-.96 1.45-1.95.9l-5.4-3.98-2.6 2.5c-.29.29-.53.53-1.08.53l.39-5.49 9.99-9.03c.43-.39-.1-.6-.66-.22L4.83 12.7l-5.31-1.66c-1.16-.36-1.18-1.16.24-1.72L20.5 2.78c.97-.36 1.81.22 1.44 1.62z" />
            </svg>
          </SocialBtn>
          <SocialBtn label="Discord">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
              <path d="M20.317 4.37A19.79 19.79 0 0 0 16.558 3a14.49 14.49 0 0 0-.69 1.41 18.27 18.27 0 0 0-5.736 0A14.5 14.5 0 0 0 9.43 3a19.79 19.79 0 0 0-3.76 1.37C2.07 9.78 1.097 15.06 1.583 20.27a19.86 19.86 0 0 0 5.99 3.04 14.46 14.46 0 0 0 1.27-2.06 12.99 12.99 0 0 1-2-.96c.17-.13.33-.26.49-.39 3.85 1.78 8.02 1.78 11.83 0 .16.13.32.26.49.39-.64.38-1.32.7-2 .96.39.74.83 1.43 1.27 2.06a19.86 19.86 0 0 0 5.99-3.04c.57-6.04-1-11.27-3.6-15.9zM8.02 15.42c-1.18 0-2.16-1.08-2.16-2.41 0-1.32.96-2.41 2.16-2.41 1.21 0 2.18 1.09 2.16 2.41 0 1.33-.96 2.41-2.16 2.41zm7.96 0c-1.18 0-2.16-1.08-2.16-2.41 0-1.32.96-2.41 2.16-2.41 1.21 0 2.18 1.09 2.16 2.41 0 1.33-.95 2.41-2.16 2.41z" />
            </svg>
          </SocialBtn>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
          <span className="flex items-center gap-1">
            Add <CoinIcon className="w-3.5 h-3.5" /> token to Wallet
          </span>
          <span>
            Audited by:{" "}
            <a href="#" className="text-foreground font-semibold hover:underline">
              CERTIK
            </a>
          </span>
          <span>
            Powered by:{" "}
            <a href="#" className="text-foreground font-semibold hover:underline">
              polygon
            </a>
          </span>
          <span>
            Protected by:{" "}
            <a href="#" className="text-foreground font-semibold hover:underline">
              Chainlink
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Exchanges:</span>
          <span className="h-6 w-6 rounded-full bg-background-lighter border border-border" aria-hidden />
          <span className="h-6 w-6 rounded-full bg-background-lighter border border-border" aria-hidden />
          <span className="h-6 w-6 rounded-full bg-background-lighter border border-border" aria-hidden />
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="h-7 w-7 rounded-full border border-border bg-background-lighter text-foreground inline-flex items-center justify-center hover:bg-background-light transition-colors"
    >
      {children}
    </a>
  );
}
