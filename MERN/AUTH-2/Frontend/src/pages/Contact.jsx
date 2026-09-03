
export default function Contact() {

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">About InternovaTech</span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              Bridging the gap between <span className="text-gradient">learning and experience</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              InternovaTech is a premium internship and practical learning platform. We help students transform academic knowledge into practical, industry-ready experience through structured internships, real-world projects, and professional learning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower every student with practical, industry-relevant experience — making career readiness accessible, structured, and genuinely transformative.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where no graduate faces the "experience required" barrier — where learning and real-world practice are seamlessly connected.
            </p>
          </div>
        </div>
      </section>

      

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl brand-gradient px-6 py-14 sm:px-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">Join the InternovaTech journey</h2>
            <p className="text-white/90 max-w-xl mx-auto mb-7">Start building real experience today.</p>
          </div>
        </div>
      </section>
    </div>
  );
}