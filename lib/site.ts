export const site = {
  name: "TIVION Space International",
  shortName: "TIVION",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://tivion.space",
  description:
    "An end-to-end Earth-intelligence partner connecting satellite systems, mission operations, remote-sensing data, and industry applications.",
  email: "mission@tivion.space",
  phone: "+1 888 482 6608",
  address: "North American mission coordination desk",
  themeColor: "#06111f",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
  },
  cta: {
    primary: "Discuss a Mission",
    requirements: "Discuss Your Requirements",
    capabilities: "Explore Capabilities",
  },
} as const;

export const navigation = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Solutions", href: "/solutions" },
  { label: "Technology", href: "/technology" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
] as const;

export const capabilities = [
  {
    slug: "satellite-constellation-systems",
    title: "Satellite and Constellation Systems",
    eyebrow: "Mission architecture",
    href: "/capabilities#satellite-constellation-systems",
    summary:
      "Mission requirements, orbit and coverage analysis, satellite system design, constellation planning, integration planning, and launch support coordination.",
    details: [
      "Requirements analysis and mission concept development",
      "Orbit, access, and coverage trade studies",
      "Sensor selection and constellation architecture",
      "Spacecraft subsystem coordination",
      "Ground-segment definition and integration planning",
    ],
  },
  {
    slug: "payload-engineering",
    title: "Payload Engineering",
    eyebrow: "Sensing systems",
    href: "/capabilities#payload-engineering",
    summary:
      "SAR, optical, hyperspectral, multi-sensor payload concepts, accommodation planning, data-volume analysis, and onboard processing concepts.",
    details: [
      "SAR systems for dependable observation through darkness and many cloud conditions",
      "Optical and hyperspectral imaging concepts",
      "Payload accommodation and integration planning",
      "Data-volume, onboard processing, and downlink planning",
    ],
  },
  {
    slug: "mission-ground-operations",
    title: "Mission and Ground Operations",
    eyebrow: "Operate the mission",
    href: "/capabilities#mission-ground-operations",
    summary:
      "Satellite tasking, mission planning, TT&C coordination, ground-station integration, data reception, storage, processing, and distribution.",
    details: [
      "Task scheduling and mission planning",
      "Telemetry, tracking, and control coordination",
      "Ground-station integration and data downlink",
      "Operational monitoring, storage, and cataloguing",
    ],
  },
  {
    slug: "earth-observation-data",
    title: "Earth-Observation Data",
    eyebrow: "Access and monitor",
    href: "/capabilities#earth-observation-data",
    summary:
      "New tasking, archive search, area-of-interest monitoring, multi-sensor sourcing, processing levels, and delivery mechanisms.",
    details: [
      "SAR, optical, and hyperspectral data access",
      "Archive search and recurring monitoring programs",
      "Area-of-interest tasking and subscriptions",
      "Delivery through portal, API, imagery packages, and reports",
    ],
  },
  {
    slug: "analytics-decision-support",
    title: "Analytics and Decision Support",
    eyebrow: "From pixels to action",
    href: "/capabilities#analytics-decision-support",
    summary:
      "Detection, classification, change analysis, time-series monitoring, risk indicators, alert generation, expert interpretation, and industry reporting.",
    details: [
      "Change detection and trend analysis",
      "Object, feature, and activity identification",
      "Automated alerts with human review when required",
      "Industry-specific reports for operational teams",
    ],
  },
] as const;

export const workflow = [
  ["Define the mission", "Translate operational questions into sensing requirements, geography, timing, and delivery constraints."],
  ["Design the architecture", "Select sensor modes, mission cadence, ground flow, data sources, and analytic outputs."],
  ["Task the system", "Coordinate satellite or constellation tasking, collection windows, and area-of-interest priorities."],
  ["Acquire and downlink", "Receive and catalogue data through ground infrastructure and controlled processing queues."],
  ["Process and analyze", "Calibrate, georeference, enhance, extract features, detect change, and review outputs."],
  ["Deliver intelligence", "Provide alerts, APIs, maps, imagery, dashboards, or executive reporting for decisions."],
] as const;

export const solutions = [
  {
    slug: "agriculture-land",
    title: "Agriculture and Land Management",
    problem: "Large land programs need timely evidence on crop condition, land-use change, drought, and insurance-supporting events.",
    observe: "Crop area, vegetation condition, soil and water indicators, drought signals, and land-use transitions.",
    analyze: "Multi-temporal classification, vegetation assessment, anomaly detection, and change analysis.",
    deliver: "Monitoring dashboards, geospatial layers, evidence packages, and periodic land reports.",
    decisions: "Prioritize field inspections, assess seasonal risk, support insurance review, and track land-use compliance.",
    href: "/solutions#agriculture-land",
  },
  {
    slug: "disaster-emergency",
    title: "Disaster and Emergency Management",
    problem: "Emergency teams need a rapid view of impact when ground access is limited or weather disrupts optical imagery.",
    observe: "Flood extent, storm damage, fire activity, landslide context, earthquake impact zones, and recovery conditions.",
    analyze: "Rapid area-of-interest tasking, change detection, damage indicators, and time-sensitive map production.",
    deliver: "Situation maps, event alerts, imagery downloads, recovery-monitoring layers, and briefing reports.",
    decisions: "Allocate response resources, identify affected areas, monitor recovery, and update stakeholders.",
    href: "/solutions#disaster-emergency",
  },
  {
    slug: "maritime-domain",
    title: "Maritime Domain Awareness",
    problem: "Coastal and maritime operators need visibility into vessel activity, environmental events, and changing shorelines.",
    observe: "Vessels, port activity, waterway patterns, oil-spill context, coastal change, and marine environmental conditions.",
    analyze: "Activity detection, anomaly screening, shoreline comparison, spill extent estimation, and contextual reporting.",
    deliver: "Map layers, alerts, vessel activity summaries, and coastal-monitoring reports.",
    decisions: "Focus patrols, assess incidents, manage port operations, and monitor sensitive coastal regions.",
    href: "/solutions#maritime-domain",
  },
  {
    slug: "energy-utilities-mining",
    title: "Energy, Utilities, and Mining",
    problem: "Distributed assets and extraction sites require persistent monitoring across corridors, remote terrain, and regulated areas.",
    observe: "Pipeline corridors, power-line rights-of-way, mine activity, tailings context, surface change, and site conditions.",
    analyze: "Corridor change detection, activity mapping, environmental indicators, and configured deformation workflows where applicable.",
    deliver: "Operational dashboards, inspection-priority layers, evidence packs, and compliance-supporting reports.",
    decisions: "Schedule inspections, detect encroachment, assess site activity, and manage environmental risk.",
    href: "/solutions#energy-utilities-mining",
  },
  {
    slug: "infrastructure-cities",
    title: "Infrastructure and Cities",
    problem: "Urban and infrastructure teams need regular, objective evidence of development, asset condition, and land transformation.",
    observe: "Construction progress, urban expansion, transport corridors, land-use change, and configured subsidence use cases.",
    analyze: "Progress tracking, feature extraction, change comparison, and configured interferometric analysis where supported by data and scope.",
    deliver: "Planning intelligence, corridor-monitoring layers, progress reports, and asset maps.",
    decisions: "Validate project milestones, prioritize site review, monitor growth patterns, and reduce blind spots.",
    href: "/solutions#infrastructure-cities",
  },
  {
    slug: "climate-environment",
    title: "Climate and Environmental Monitoring",
    problem: "Environmental programs need consistent evidence across long time horizons and difficult-to-access regions.",
    observe: "Vegetation change, water-quality indicators, snow and ice context, coastal change, pollution indicators, and habitat condition.",
    analyze: "Time-series monitoring, trend analysis, anomaly detection, and expert-reviewed environmental interpretation.",
    deliver: "Longitudinal map products, change layers, alerts, and decision-ready environmental reports.",
    decisions: "Track ecosystem change, prioritize field validation, monitor climate-sensitive regions, and report environmental risk.",
    href: "/solutions#climate-environment",
  },
] as const;

export const technology = {
  sensors: [
    ["SAR", "Active radar sensing for observation through darkness and many cloud conditions when dependable collection matters."],
    ["Multispectral Optical", "Readable visual and near-infrared context for mapping, classification, and change interpretation."],
    ["Hyperspectral", "Narrow-band spectral information for material, vegetation, and environmental indicators."],
    ["Complementary Sensing", "Low-light, thermal, aerial, or partner data sources can be configured when the mission requires them."],
  ],
  pipeline: [
    "Ingestion",
    "Calibration and preprocessing",
    "Georeferencing",
    "Enhancement",
    "Feature extraction",
    "Change detection",
    "Analyst review",
    "Distribution",
  ],
  architecture: [
    "Space segment",
    "Ground-station network",
    "Mission operations",
    "Processing pipeline",
    "Geospatial data infrastructure",
    "Analytics layer",
    "Customer delivery",
  ],
  security: [
    "Role-based access patterns",
    "Encryption in transit",
    "Audit-friendly workflows",
    "Regional deployment options",
    "Data-retention controls",
    "System observability",
    "Resilient processing queues",
  ],
} as const;

export const inquiryCategories = [
  "Satellite mission development",
  "Payload and system engineering",
  "Earth-observation data",
  "Monitoring and analytics",
  "Strategic partnerships",
  "General inquiry",
] as const;

export const timelines = [
  "Exploratory",
  "0-3 months",
  "3-6 months",
  "6-12 months",
  "12+ months",
] as const;
