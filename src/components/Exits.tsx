type State = "expansion" | "contraction";

export function Exits({ state }: { state: State }) {
  const positive = state === "expansion";
  const accent = positive ? "var(--contraction)" : "var(--expansion)";

  return (
    <div
      className="exits pointer-events-none absolute right-4 bottom-[10%] w-44 sm:right-14 sm:w-52"
      aria-hidden="true"
    >
      <span className="label block text-center text-[10px] text-muted-foreground">
        Exits
      </span>

      <div className="relative mt-4 flex flex-col items-center">
        {/* door + tag row */}
        <div className="relative flex h-20 w-full items-start justify-center">
          {/* door */}
          <div
            className="relative h-14 w-10"
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
              <path d="M8 8 L8 48" strokeDasharray="2 2" opacity={0.5} />
            </svg>
            {/* swinging door panel */}
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

          {/* price tag */}
          <div
            className={`absolute ${positive ? "top-[72px] left-1/2 -translate-x-1/2" : "-right-1 top-1/2 -translate-y-1/2"}`}
          >
            {/* sparkline behind tag */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <svg
                viewBox="0 0 80 32"
                className="h-10 w-24"
                fill="none"
                stroke={accent}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <defs>
                  <marker
                    id={`exit-arrow-${state}`}
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="5"
                    markerHeight="5"
                    orient="auto"
                  >
                    <path d="M0 0 L10 5 L0 10 L2 5 Z" fill={accent} />
                  </marker>
                </defs>
                {positive ? (
                  <path
                    d="M4 8 L24 14 L44 20 L68 26"
                    strokeDasharray="76"
                    strokeDashoffset="76"
                    markerEnd={`url(#exit-arrow-${state})`}
                    opacity={0.9}
                    style={{ animation: "exit-sparkline-down 2s ease-out infinite" }}
                  />
                ) : (
                  <path
                    d="M4 26 L24 20 L44 14 L68 6"
                    strokeDasharray="76"
                    strokeDashoffset="76"
                    markerEnd={`url(#exit-arrow-${state})`}
                    opacity={0.9}
                    style={{ animation: "exit-sparkline-up 2s ease-out infinite" }}
                  />
                )}
              </svg>
            </div>

            {positive ? (
              <svg
                viewBox="0 0 28 36"
                className="relative z-10 h-9 w-7"
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
                  fontSize="5.5"
                  fontWeight="600"
                  fill={accent}
                  style={{ letterSpacing: "-0.2px" }}
                >
                  cheap
                </text>
              </svg>
            ) : (
              <svg
                viewBox="0 0 44 36"
                className="relative z-10 h-9 w-11"
                fill="none"
              >
                <path
                  d="M22 3 L40 12 L40 33 L4 33 L4 12 Z"
                  fill="color-mix(in srgb, var(--paper) 75%, transparent)"
                  stroke={accent}
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle
                  cx="22"
                  cy="12"
                  r="2.5"
                  fill="var(--background)"
                  stroke={accent}
                  strokeWidth="1.2"
                />
                <path
                  d="M22 9 L22 4"
                  stroke={accent}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <text
                  x="22"
                  y="25"
                  textAnchor="middle"
                  fontSize="4.2"
                  fontWeight="600"
                  fill={accent}
                  style={{ letterSpacing: "-0.2px" }}
                >
                  set by the crowd.
                </text>
              </svg>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes exit-door-swing {
          0%   { transform: rotateY(0deg); }
          40%  { transform: rotateY(-55deg); }
          60%  { transform: rotateY(-55deg); }
          100% { transform: rotateY(0deg); }
        }
        @keyframes exit-sparkline-up {
          0%   { stroke-dashoffset: 76; opacity: 0; transform: translateY(3px); }
          15%  { opacity: 0.9; }
          70%  { stroke-dashoffset: 0; opacity: 0.9; transform: translateY(-1px); }
          100% { stroke-dashoffset: 0; opacity: 0; transform: translateY(-2px); }
        }
        @keyframes exit-sparkline-down {
          0%   { stroke-dashoffset: 76; opacity: 0; transform: translateY(-3px); }
          15%  { opacity: 0.9; }
          70%  { stroke-dashoffset: 0; opacity: 0.9; transform: translateY(1px); }
          100% { stroke-dashoffset: 0; opacity: 0; transform: translateY(2px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .exits * { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
