import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BriefcaseBusiness,
  Car,
  CircleDot,
  FileCheck2,
  Gauge,
  HandCoins,
  Landmark,
  MapPin,
  Network,
  ShieldCheck,
  UserRound,
  Vote,
  Zap,
  type LucideIcon,
} from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import {
  commonwealthModules,
  commonwealthOutcomes,
  commonwealthPriorities,
  type CommonwealthModuleId,
  type CommonwealthModuleStatus,
} from "@/features/commonwealth/commonwealthHome.model";

const moduleIcons: Record<CommonwealthModuleId, LucideIcon> = {
  member: UserRound,
  series: Network,
  assets: Landmark,
  mobility: Car,
  energy: Zap,
  work: BriefcaseBusiness,
  governance: Vote,
  benefits: HandCoins,
  evidence: FileCheck2,
};

const statusClasses: Record<CommonwealthModuleStatus, string> = {
  available: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  foundation: "border-primary/30 bg-primary/10 text-primary",
  planned: "border-white/15 bg-white/5 text-muted-foreground",
};

const operatingSignals = [
  {
    icon: UserRound,
    label: "Organized around the member",
  },
  {
    icon: ShieldCheck,
    label: "Rights, permissions, and accountability",
  },
  {
    icon: Activity,
    label: "One operating record across services",
  },
];

export const CommonwealthHomeContent: React.FC = () => (
  <div className="overflow-hidden">
    <section className="relative min-h-[88vh] flex items-center pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,hsl(var(--primary)/0.18),transparent_34%),radial-gradient(circle_at_82%_26%,hsl(var(--accent)/0.10),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-primary/30 bg-primary/10 text-primary px-3 py-1"
            >
              Commonwealth operating system
            </Badge>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.98] mb-7">
              UnityLink
              <span className="block gradient-text">Commonwealth</span>
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/90 max-w-3xl leading-relaxed mb-5">
              Community-controlled infrastructure connecting members, assets, mobility,
              energy, work, governance, benefits, and evidence through one operating
              system.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-9">
              Unity Fleet is the mobility operator inside the Commonwealth. The vehicles,
              charging hubs, workforce tools, and operating dashboards already in this
              application become connected services under the Commonwealth structure.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/dashboard">
                  Open operator dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/vehicles">
                  Access mobility
                  <Car className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="gap-2">
                <Link to="/dashboard/charging-hubs">
                  View charging hubs
                  <Zap className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-7">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Operating model
                  </p>
                  <h2 className="text-2xl font-bold">One Commonwealth record</h2>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <Network className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="space-y-3 mb-7">
                {operatingSignals.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                  >
                    <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <MapPin className="h-5 w-5 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Deployment focus</p>
                  <p className="font-semibold mt-1">Community infrastructure</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-background/40 p-4">
                  <Gauge className="h-5 w-5 text-primary mb-3" />
                  <p className="text-sm text-muted-foreground">Current stage</p>
                  <p className="font-semibold mt-1">Operating foundation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 border-y border-white/10 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Commonwealth operating spine
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Every service connects to the same member-centered structure.
          </h2>
          <p className="text-lg text-muted-foreground">
            Available labels identify interfaces that exist today. Foundation and planned
            labels identify the operating layers that still require durable backend records
            and workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {commonwealthModules.map((module, index) => {
            const Icon = moduleIcons[module.id];
            return (
              <motion.article
                key={module.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04 }}
                className="group glass-card rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="h-11 w-11 rounded-2xl bg-primary/12 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline" className={statusClasses[module.status]}>
                    {module.statusLabel}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-muted-foreground leading-relaxed min-h-[5.25rem]">
                  {module.description}
                </p>
                {module.route && module.actionLabel ? (
                  <Link
                    to={module.route}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary hover:text-primary/80"
                  >
                    {module.actionLabel}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 mt-5 text-sm text-muted-foreground">
                    <CircleDot className="h-4 w-4" />
                    Operating layer not yet connected
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-10 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
              Development sequence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Build the Commonwealth spine before adding more disconnected screens.
            </h2>
            <p className="text-lg text-muted-foreground mb-7">
              These are implementation priorities, not claims that the underlying systems
              are already operational.
            </p>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/fleet-experience">
                View the former fleet landing page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {commonwealthPriorities.map((priority, index) => (
              <motion.div
                key={priority.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm text-primary mb-2">{priority.owner}</p>
                    <h3 className="text-xl font-bold mb-2">{priority.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {priority.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 border-y border-white/10 bg-primary/[0.045]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Accountability layer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            The Commonwealth must prove outcomes, not merely display activity.
          </h2>
          <p className="text-lg text-muted-foreground">
            These categories become measurable once the identity, transaction, asset, and
            evidence records are connected.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {commonwealthOutcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-full border border-primary/20 bg-background/50 px-5 py-3 font-medium flex items-center gap-2"
            >
              <FileCheck2 className="h-4 w-4 text-primary" />
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-primary/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.16),transparent_48%)]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Enter the Commonwealth operating environment.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Continue into the existing mobility, charging, workforce, and operator
              interfaces while the shared Commonwealth records are developed underneath
              them.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/dashboard">
                  Open operator dashboard
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/dashboard/jobs">
                  Explore workforce
                  <BriefcaseBusiness className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const CommonwealthHome: React.FC = () => {
  useSEO({
    title: "UnityLink Commonwealth",
    description:
      "A member-centered community infrastructure operating system connecting mobility, energy, work, governance, benefits, and evidence.",
  });

  return (
    <MainLayout>
      <CommonwealthHomeContent />
    </MainLayout>
  );
};

export default CommonwealthHome;
