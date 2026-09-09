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
        {/* closed bank with out-of-business sign */}
        <svg
          viewBox="0 0 80 80"
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

          {/* out of business sign */}
          <rect
            x="10"
            y="27"
            width="60"
            height="14"
            rx="1"
            fill="color-mix(in srgb, var(--paper) 70%, transparent)"
          />
          <text
            x="40"
            y="37"
            textAnchor="middle"
            fontSize="5"
            fontWeight="600"
            fill={accent}
            stroke="none"
            style={{ letterSpacing: "-0.2px" }}
          >
            Out of business
          </text>

          {/* architrave */}
          <rect x="10" y="43" width="60" height="7" rx="0.5" />

          {/* columns */}
          <rect x="18" y="52" width="6" height="20" rx="0.5" />
          <rect x="30" y="52" width="6" height="20" rx="0.5" />
          <rect x="44" y="52" width="6" height="20" rx="0.5" />
          <rect x="56" y="52" width="6" height="20" rx="0.5" />

          {/* base */}
          <rect x="8" y="72" width="64" height="6" rx="0.5" />
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
