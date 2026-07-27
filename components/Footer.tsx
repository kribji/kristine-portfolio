export default function Footer() {
  return (
    <footer className="w-full border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-sans text-[13px] text-foreground">
          © 2026 Kristine Bjørgan
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/kristinebjorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-muted transition-opacity hover:opacity-60"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kribji"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-muted transition-opacity hover:opacity-60"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
