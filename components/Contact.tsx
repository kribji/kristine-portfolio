"use client";

import { FormEvent, useEffect, useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitted(true);
    }
  };

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <section id="contact" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[560px] text-center">
        <p className="small-caps text-muted">Contact</p>
        <h2 className="mt-6 font-display text-[42px] leading-tight text-foreground md:text-[56px]">
          Let&apos;s work together.
        </h2>
        <p className="mt-4 font-sans text-[16px] font-normal text-muted">
          Have a project in mind or want to explore working together?
        </p>
        <p className="mt-1 font-sans text-[16px] font-normal text-muted">
          Send me a message.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setOpen(true);
          }}
          className="mt-12 bg-foreground px-8 py-3 font-sans text-[15px] text-white transition-colors hover:bg-[#333]"
        >
          Get in touch
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-6"
          onClick={closeModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative w-full max-w-[480px] bg-white p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={closeModal}
              className="absolute right-4 top-4 font-sans text-[20px] leading-none text-muted transition-opacity hover:opacity-60"
            >
              ×
            </button>

            <h3
              id="contact-modal-title"
              className="pr-8 font-display text-[28px] text-foreground"
            >
              Get in touch
            </h3>

            {submitted ? (
              <p className="mt-8 font-sans text-[16px] text-foreground">
                Message sent. I&apos;ll be in touch soon.
              </p>
            ) : (
              <form
                action="https://formspree.io/f/mbdnwrdy"
                method="POST"
                onSubmit={handleSubmit}
                className="mt-8 space-y-4 text-left"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    className="w-full border border-border bg-white px-4 py-3 font-sans text-[15px] text-foreground outline-none placeholder:text-muted focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full border border-border bg-white px-4 py-3 font-sans text-[15px] text-foreground outline-none placeholder:text-muted focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Message"
                    className="w-full resize-y border border-border bg-white px-4 py-3 font-sans text-[15px] text-foreground outline-none placeholder:text-muted focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-foreground px-8 py-3 font-sans text-[15px] text-white transition-colors hover:bg-[#333]"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
