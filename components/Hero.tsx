export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center border-b border-border px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
      <div className="mx-auto flex w-full flex-col items-end">
        <h1
          className="w-full text-right font-display font-normal leading-none text-foreground"
          style={{ fontSize: "clamp(80px, 14vw, 160px)" }}
        >
          Kristine
        </h1>
        <p className="mt-6 max-w-[480px] self-end text-right font-sans text-[16px] font-normal leading-relaxed text-muted">
          a frontend developer, AI builder and concept designer working at the
          intersection of UX, systems thinking, and code.
        </p>
      </div>
    </section>
  );
}
