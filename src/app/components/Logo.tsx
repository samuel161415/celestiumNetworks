import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-foreground ${className}`}
      aria-label="Celestium"
    >
      <Image
        src="/celestium-con-nobg.png"
        alt=""
        width={64}
        height={64}
        className="h-8 w-8 shrink-0 object-contain"
        aria-hidden
      />
      <span className="text-[15px] font-bold tracking-wide leading-none">CELESTIUM</span>
    </span>
  );
}
