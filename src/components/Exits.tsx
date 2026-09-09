type State = "expansion" | "contraction";

export function Exits({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--expansion)" : "var(--contraction)";

  return (
    <div
      className="exits pointer-events-none absolute right-4 bottom-[10%] w-36 sm:right-14 sm:w-44"
      aria-hidden="true"
    >
      <span className="label block text-center text-[10px] text-muted-foreground">
        Exits
      </span>

      <div className="relative mt-4 flex flex-col items-center gap-3">
        {/* door */}
        <div
          className="relative h-16 w-11"
          style={{ perspective: "120px" }}
        >
          {/* frame */}
          <svg
            viewBox="0 0 40 56"
            className="absolute inset-0 h-full w-full"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="32" height="48" rx="1" />
          </svg>

          {/* swinging panel */}
          <div
            className="absolute top-[7px] left-[5px] h-[42px] w-[30px] origin-left"
            style={{
              animation: "exit-door-swing 2.4s ease-in-out infinite",
              border: `1.5px solid ${accent}`,
              borderRadius: "1px",
              backgroundColor: "color-mix(in srgb, var(--paper) 60%, transparent)",
            }}
          >
            {/* knob */}
            <div
              className="absolute top-1/2 right-1.5 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
              style={{ backgroundColor: accent }}
            />
          </div>
        </div>

        {/* cheap tag */}
        <svg
          viewBox="0 0 28 36"
          className="h-9 w-7"
          fill="none"
        >
          <path
            d="M14 3 L25 12 L25 33 L3 33 L3 12 Z"
            fill="color-mix(in srgb, var(--paper) 75%, transparent)"
            stroke={accent}
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle
            cx="14"
            cy="12"
            r="2.5"
            fill="var(--background)"
            stroke={accent}
            strokeWidth="1.2"
          />
          <path
            d="M14 9 L14 4"
            stroke={accent}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <text
            x="14"
            y="25"
            textAnchor="middle"
            fontSize="6"
            fontWeight="600"
            fill={accent}
            style={{ letterSpacing: "-0.2px" }}
          >
            cheap
          </text>
        </svg>
      </div>

      <style>{`
        @keyframes exit-door-swing {
          0%   { transform: rotateY(0deg); }
          40%  { transform: rotateY(-55deg); }
          60%  { transform: rotateY(-55deg); }
          100% { transform: rotateY(0deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .exits * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
