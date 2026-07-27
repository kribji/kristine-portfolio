"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <section id="contact" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-[560px] text-center">
        <p className="small-caps text-muted">Contact</p>
        <h2 className="mt-6 font-display text-[42px] leading-tight text-foreground md:text-[56px]">
          Let&apos;s work together.
        </h2>
        <p className="mt-4 font-sans text-[16px] font-normal text-muted">
          Have a project in mind or want to explore working together? Send me a
          message.
        </p>

        {submitted ? (
          <p className="mt-12 font-sans text-[16px] text-foreground">
            Message sent. I&apos;ll be in touch soon.
          </p>
        ) : (
          <form
            action="https://formspree.io/f/mbdnwrdy"
            method="POST"
            onSubmit={handleSubmit}
            className="mt-12 space-y-4 text-left"
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
    </section>
  );
}
