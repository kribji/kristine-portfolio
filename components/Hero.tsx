export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center border-b border-border px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
      <div className="mx-auto grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-8 md:items-start">
        <div className="pt-2">
          <p className="small-caps text-muted">
            Frontend Developer, AI Builder & Concept Designer
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <h1
            className="font-display font-normal leading-none text-foreground text-right w-full"
            style={{ fontSize: "clamp(80px, 14vw, 160px)" }}
          >
            Kristine
          </h1>
          <p className="mt-6 max-w-[480px] self-end text-right font-sans text-[16px] font-normal leading-relaxed text-muted">
            a frontend developer, AI builder and concept designer working at the
            intersection of UX, systems thinking, and code.
          </p>
        </div>
      </div>
    </section>
  );
}
