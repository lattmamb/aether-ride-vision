export type CommonwealthModuleId =
  | "member"
  | "series"
  | "assets"
  | "mobility"
  | "energy"
  | "work"
  | "governance"
  | "benefits"
  | "evidence";

export type CommonwealthModuleStatus = "available" | "foundation" | "planned";

export interface CommonwealthModule {
  id: CommonwealthModuleId;
  title: string;
  description: string;
  status: CommonwealthModuleStatus;
  statusLabel: string;
  route?: string;
  actionLabel?: string;
}

export interface CommonwealthPriority {
  title: string;
  description: string;
  owner: string;
}

export const commonwealthModules: CommonwealthModule[] = [
  {
    id: "member",
    title: "Member",
    description: "Identity, household context, eligibility, permissions, service history, and member-directed access.",
    status: "foundation",
    statusLabel: "Identity foundation",
    route: "/dashboard/profile",
    actionLabel: "Open member profile",
  },
  {
    id: "series",
    title: "Series",
    description: "The legal and operational boundary connecting a member or project to its rights, obligations, and records.",
    status: "planned",
    statusLabel: "Registry planned",
  },
  {
    id: "assets",
    title: "Assets",
    description: "Vehicles, chargers, solar, storage, facilities, contracts, maintenance obligations, and operating status.",
    status: "foundation",
    statusLabel: "Fleet records available",
    route: "/dashboard/fleet",
    actionLabel: "View assets",
  },
  {
    id: "mobility",
    title: "Mobility",
    description: "Vehicle access, subscriptions, rides, delivery, dispatch, availability, maintenance, and member support.",
    status: "available",
    statusLabel: "Interface available",
    route: "/vehicles",
    actionLabel: "Access mobility",
  },
  {
    id: "energy",
    title: "Energy",
    description: "Charging hubs, charger availability, energy delivery, solar production, storage, and infrastructure performance.",
    status: "available",
    statusLabel: "Hub interface available",
    route: "/dashboard/charging-hubs",
    actionLabel: "Open hub operations",
  },
  {
    id: "work",
    title: "Work",
    description: "Jobs, training, employer demand, required transportation, workforce access, and retention outcomes.",
    status: "available",
    statusLabel: "Workforce interface available",
    route: "/dashboard/jobs",
    actionLabel: "Explore workforce",
  },
  {
    id: "governance",
    title: "Governance",
    description: "Public-facing proposals, delegated authority, decisions, conflicts, approvals, and member accountability.",
    status: "planned",
    statusLabel: "Decision layer planned",
  },
  {
    id: "benefits",
    title: "Benefits",
    description: "Service credits, infrastructure participation, community reserves, member value, and local economic retention.",
    status: "planned",
    statusLabel: "Allocation layer planned",
  },
  {
    id: "evidence",
    title: "Evidence",
    description: "Traceable records showing who acted, under what authority, using which information, and with what result.",
    status: "foundation",
    statusLabel: "Reporting foundation",
    route: "/dashboard",
    actionLabel: "Open operator dashboard",
  },
];

export const commonwealthPriorities: CommonwealthPriority[] = [
  {
    title: "Establish the member and Series registry",
    description: "Create the durable identity, permission, eligibility, and organizational records every other module depends on.",
    owner: "Commonwealth foundation",
  },
  {
    title: "Connect mobility, charging, and workforce events",
    description: "Replace isolated demo records with one event model that can follow a service from request through outcome.",
    owner: "Unity Fleet operating layer",
  },
  {
    title: "Make every material action auditable",
    description: "Attach an actor, authority, timestamp, source, decision, status, and evidence record to operational actions.",
    owner: "Evidence and accountability",
  },
];

export const commonwealthOutcomes = [
  "Mobility access",
  "Asset utilization",
  "Energy performance",
  "Workforce outcomes",
  "Local value retention",
  "Compliance evidence",
] as const;
