type State = "expansion" | "contraction";

export function Exits({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";
  const label = positive ? "cheap" : "priced by the crowd";

  return (
    <div
      className="exits pointer-events-none absolute right-4 bottom-[10%] w-36 sm:right-14 sm:w-44"
      aria-hidden="true"
    >
      <span className="label block text-center text-[10px] text-muted-foreground">
        Exits
      </span>

      <div className="relative mt-4 flex flex-col items-center gap-3">
        {/* closed bank */}
        <svg
          viewBox="0 0 80 76"
          className="h-20 w-20"
          fill="none"
          stroke={accent}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* pediment */}
          <path d="M8 24 L40 6 L72 24" />
          <path d="M12 24 L68 24" />

          {/* cross on top — closed */}
          <path d="M40 6 L40 16" />
          <path d="M35 11 L45 11" />

          {/* architrave */}
          <rect x="10" y="24" width="60" height="7" rx="0.5" />

          {/* columns */}
          <rect x="18" y="34" width="6" height="30" rx="0.5" />
          <rect x="30" y="34" width="6" height="30" rx="0.5" />
          <rect x="44" y="34" width="6" height="30" rx="0.5" />
          <rect x="56" y="34" width="6" height="30" rx="0.5" />

          {/* base */}
          <rect x="8" y="64" width="64" height="7" rx="0.5" />

          {/* closed doors / barrier line */}
          <path d="M40 34 L40 64" strokeDasharray="3 2" opacity="0.6" />
        </svg>

        {/* state label */}
        <span
          className="label text-center text-[10px]"
          style={{ color: accent }}
        >
          {label}
        </span>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .exits * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
