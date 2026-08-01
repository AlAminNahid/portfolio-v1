function Bar({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`rounded-md bg-surface-raised ${className ?? ""}`}
    />
  );
}

function SectionShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full px-6 lg:px-[8%] py-24 ${className ?? ""}`}>
      <div className="max-w-6xl mx-auto w-full">{children}</div>
    </section>
  );
}

function SectionLabel() {
  return <Bar className="h-3 w-20 mb-5" />;
}

function SectionHeading() {
  return (
    <div className="space-y-3 mb-12">
      <Bar className="h-10 w-72 max-w-full" />
      <Bar className="h-10 w-56 max-w-full" />
    </div>
  );
}

// ── NavBar ─────────────────────────────────────────────────────────────────
function NavSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-[8%] py-4 bg-canvas/80 border-b border-border/80">
      <Bar className="h-5 w-20" />
      <div className="hidden md:flex gap-8">
        {[64, 52, 60, 72, 48, 68, 56].map((w, i) => (
          <Bar key={i} className={`h-3.5 w-[${w}px]`} style={{ width: w }} />
        ))}
      </div>
      <div className="flex gap-3">
        <Bar className="h-9 w-9 rounded-full" />
        <Bar className="h-9 w-28 rounded-full" />
      </div>
    </div>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function HeroSkeleton() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-[8%] pt-20 pb-12">
      <Bar className="h-6 w-44 rounded-full mb-8" />
      <Bar className="h-14 sm:h-20 w-[26rem] max-w-full mb-3" />
      <Bar className="h-14 sm:h-20 w-80 max-w-full mb-5" />
      <Bar className="h-7 w-52 mb-6" />
      <Bar className="h-4 w-96 max-w-full mb-2" />
      <Bar className="h-4 w-80 max-w-full mb-2" />
      <Bar className="h-4 w-64 max-w-full mb-10" />
      <div className="flex gap-4 mb-12">
        <Bar className="h-12 w-36 rounded-full" />
        <Bar className="h-12 w-36 rounded-full" />
      </div>
      <div className="flex items-center gap-6">
        <Bar className="h-4 w-14" />
        <Bar className="h-4 w-2 rounded-full" />
        <Bar className="h-4 w-16" />
        <Bar className="h-4 w-2 rounded-full" />
        <Bar className="h-4 w-20" />
      </div>
    </div>
  );
}

// ── About ───────────────────────────────────────────────────────────────────
function AboutSkeleton() {
  return (
    <SectionShell>
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <SectionLabel />
          <SectionHeading />
          {[96, 80, 88, 72].map((w, i) => (
            <Bar key={i} className={`h-4 mb-2`} style={{ width: `${w}%` }} />
          ))}
          <Bar className="h-4 w-48 mt-8" />
        </div>
        <div className="grid grid-cols-2 gap-8 pt-16">
          {[6, 5, 8, 6].map((count, gi) => (
            <div key={gi}>
              <Bar className="h-3 w-20 mb-3" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: count }).map((_, i) => (
                  <Bar key={i} className="h-6 w-16 rounded-md" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// ── Services ─────────────────────────────────────────────────────────────────
function ServicesSkeleton() {
  return (
    <SectionShell>
      <SectionLabel />
      <SectionHeading />
      <div className="divide-y divide-border border-t border-border">
        {[0, 1].map((i) => (
          <div key={i} className="flex items-start gap-8 py-10">
            <Bar className="h-3 w-6 mt-1 shrink-0" />
            <div className="flex-1 space-y-2">
              <Bar className="h-6 w-64 max-w-full" />
              <Bar className="h-4 w-full" />
              <Bar className="h-4 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ── Experience ───────────────────────────────────────────────────────────────
function ExperienceSkeleton() {
  return (
    <SectionShell>
      <SectionLabel />
      <SectionHeading />
      <div className="pl-8 border-l-2 border-border">
        <Bar className="h-3 w-40 mb-4" />
        <Bar className="h-6 w-64 mb-2" />
        <Bar className="h-4 w-32 mb-5" />
        <Bar className="h-4 w-full mb-2" />
        <Bar className="h-4 w-5/6 mb-2" />
        <Bar className="h-4 w-4/6 mb-5" />
        <div className="flex gap-2 flex-wrap">
          {[80, 100, 110].map((w, i) => (
            <Bar key={i} className="h-6 rounded-full" style={{ width: w }} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// ── Works ─────────────────────────────────────────────────────────────────────
function WorksSkeleton() {
  return (
    <SectionShell>
      <SectionLabel />
      <SectionHeading />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <Bar className="w-full aspect-video rounded-xl mb-4" />
            <Bar className="h-3 w-8 mb-2" />
            <Bar className="h-5 w-48 mb-1" />
            <Bar className="h-4 w-32" />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// ── Research ──────────────────────────────────────────────────────────────────
function ResearchSkeleton() {
  return (
    <SectionShell>
      <SectionLabel />
      <Bar className="h-10 w-full max-w-xl mb-3" />
      <Bar className="h-10 w-3/4 max-w-lg mb-6" />
      <Bar className="h-px w-full mb-10" />
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="space-y-2">
          {[100, 90, 95, 85].map((w, i) => (
            <Bar key={i} className="h-4" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div>
          <Bar className="h-3 w-24 mb-3" />
          <div className="flex flex-wrap gap-2 mb-6">
            {[0, 1, 2, 3].map((i) => (
              <Bar key={i} className="h-6 w-24 rounded-full" />
            ))}
          </div>
          <Bar className="h-4 w-full mb-2" />
          <Bar className="h-4 w-full mb-6" />
          <Bar className="h-4 w-32" />
        </div>
      </div>
    </SectionShell>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
function ContactSkeleton() {
  return (
    <div className="w-full px-6 lg:px-[8%] py-24">
      <div className="max-w-2xl mx-auto w-full">
        <SectionLabel />
        <SectionHeading />
        <Bar className="h-5 w-64 mb-12" />
        <div className="pt-10 border-t border-border space-y-8">
          {["Name", "Email", "Message"].map((field) => (
            <div key={field}>
              <Bar className="h-3 w-16 mb-3" />
              <Bar
                className={`w-full ${field === "Message" ? "h-20" : "h-10"} rounded-none border-b border-border bg-transparent`}
              />
            </div>
          ))}
          <Bar className="h-12 w-40 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function FooterSkeleton() {
  return (
    <div className="border-t border-border py-6 px-6 lg:px-[8%] flex items-center justify-between">
      <Bar className="h-4 w-48" />
      <div className="flex gap-6">
        <Bar className="h-4 w-16" />
        <Bar className="h-4 w-16" />
        <Bar className="h-4 w-20" />
      </div>
    </div>
  );
}

// ── Full page ─────────────────────────────────────────────────────────────────
export default function SkeletonView() {
  return (
    <div className="animate-pulse">
      <NavSkeleton />
      <HeroSkeleton />
      <AboutSkeleton />
      <ServicesSkeleton />
      <ExperienceSkeleton />
      <WorksSkeleton />
      <ResearchSkeleton />
      <ContactSkeleton />
      <FooterSkeleton />
    </div>
  );
}
