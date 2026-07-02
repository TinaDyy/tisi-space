const gradientNumber =
  "text-black font-black";

export function IconDiagram({ index }: { index: number }) {
  return (
    <svg className="h-12 w-12 text-black" viewBox="0 0 96 96" aria-hidden="true">
      <circle cx="48" cy="48" r="34" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".28" />
      <path
        d="M18 58c19-28 41-35 60-20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity=".9"
      />
      <path
        d="M32 28h22l-11 42-11-42Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx={66 - index * 3} cy={26 + index * 5} r="4" fill="currentColor" opacity=".78" />
    </svg>
  );
}

export function ArchitectureDiagram() {
  const nodes = [
    "Space segment",
    "Ground stations",
    "Mission ops",
    "Processing",
    "Geospatial core",
    "Analytics",
    "Customer delivery",
  ];
  return (
    <div
      className="grid overflow-hidden border border-black bg-black gap-px sm:grid-cols-2 md:grid-cols-7"
      aria-label="Earth observation architecture diagram"
    >
      {nodes.map((node, index) => (
        <div className="flex flex-col gap-2 bg-white p-4" key={node}>
          <span className={`text-2xl ${gradientNumber}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <strong className="text-sm font-semibold text-black">{node}</strong>
        </div>
      ))}
    </div>
  );
}

export function DeliveryConsole() {
  return (
    <div
      className="flex flex-col gap-4 border border-black bg-white p-6"
      aria-label="Original geospatial delivery interface illustration"
    >
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-black/50">
        <span>AOI Monitor</span>
        <span className="text-black">
          SAR + Optical
        </span>
      </div>
      <div className="flex items-baseline justify-between border border-black/25 px-4 py-3">
        <strong className="text-sm font-semibold text-black">Change signal</strong>
        <span className="text-xs text-black/50">AOI-17 / Corridor North</span>
      </div>
      <div className="relative grid grid-cols-6 gap-px overflow-hidden border border-black bg-black">
        <div className="scan-line-x" aria-hidden="true" />
        {Array.from({ length: 18 }).map((_, index) => (
          <i
            key={index}
            className={`block h-12 ${
              [4, 9, 13].includes(index)
                ? "bg-black/25"
                : "bg-white"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {["Alert", "API", "Layer", "Report"].map((label) => (
          <span
            key={label}
            className="border border-black/25 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-black/60"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
