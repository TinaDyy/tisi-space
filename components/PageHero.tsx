export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-black px-6 pb-10 pt-36 md:px-12 md:pb-12 lg:px-16">
      <p className="mb-4 text-[11px] font-black uppercase tracking-[0.2em] text-black/55">
        {eyebrow}
      </p>
      <h1 className="max-w-5xl text-4xl font-black leading-[0.98] text-black md:text-6xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-6 max-w-3xl leading-snug text-black/65 md:text-xl">{lead}</p>
      ) : null}
    </section>
  );
}
