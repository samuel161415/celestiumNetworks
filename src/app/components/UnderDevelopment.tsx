export function UnderDevelopment({
  title = "Our team is currently developing this section",
  subtitle = "Check back soon — we're putting the finishing touches on it.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative w-full min-h-[calc(100dvh-68px-220px)] p-2 md:p-3 lg:p-4">
      {/* Faux dashboard skeleton (blurred) */}
      <div
        aria-hidden
        className="absolute inset-2 md:inset-3 lg:inset-4 select-none pointer-events-none blur-md opacity-60"
      >
        <div className="w-full h-20 rounded-lg bg-background-lighter border border-border" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="h-32 rounded-lg bg-gradient-to-br from-violet-900/60 via-violet-800/30 to-background-lighter border border-border" />
            <div className="h-64 rounded-lg bg-background-lighter border border-border" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="h-20 rounded-lg bg-background-lighter border border-border" />
              <div className="h-20 rounded-lg bg-background-lighter border border-border" />
              <div className="h-20 rounded-lg bg-background-lighter border border-border" />
            </div>
            <div className="h-40 rounded-lg bg-background-lighter border border-border" />
            <div className="h-40 rounded-lg bg-background-lighter border border-border" />
          </div>
        </div>
        <div className="h-48 rounded-lg bg-background-lighter border border-border mt-3" />
      </div>

      {/* Foreground message */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100dvh-68px-260px)]">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-lg md:text-xl font-semibold text-foreground">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <span className="inline-flex mt-5 items-center gap-2 rounded-md border border-primary/60 bg-primary/10 text-primary px-4 h-10 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Under development
          </span>
        </div>
      </div>
    </div>
  );
}
