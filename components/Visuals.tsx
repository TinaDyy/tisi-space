export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract orbital radar visualization">
      <div className="hero-media" />
      <div className="earth-limb" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="radar-sweep" />
      <div className="satellite-node" />
      <div className="terrain-grid">
        {Array.from({ length: 36 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

export function IconDiagram({ index }: { index: number }) {
  return (
    <svg className="icon-diagram" viewBox="0 0 96 96" aria-hidden="true">
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
    <div className="architecture-diagram" aria-label="Earth observation architecture diagram">
      {nodes.map((node, index) => (
        <div className="arch-node" key={node}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{node}</strong>
        </div>
      ))}
    </div>
  );
}

export function DeliveryConsole() {
  return (
    <div className="delivery-console" aria-label="Original geospatial delivery interface illustration">
      <div className="console-top">
        <span>AOI Monitor</span>
        <span>SAR + Optical</span>
      </div>
      <div className="console-readout">
        <strong>Change signal</strong>
        <span>AOI-17 / Corridor North</span>
      </div>
      <div className="console-map">
        <div className="scan-line" />
        {Array.from({ length: 18 }).map((_, index) => (
          <i key={index} />
        ))}
      </div>
      <div className="console-rail">
        {["Alert", "API", "Layer", "Report"].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
