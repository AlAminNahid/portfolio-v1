"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { EMAIL } from "@/constants/site";

export default function Contact() {
  const { form, handleChange, handleSubmit, isSubmitting, feedback } =
    useContactForm();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full scroll-mt-10 border-t border-border py-[clamp(72px,11vw,144px)]"
    >
      <Container>
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-6">
                Contact
              </p>
              <h2
                id="contact-heading"
                className="text-4xl sm:text-5xl font-bold text-fg tracking-tight leading-tight mb-8"
              >
                Have an interesting
                <br />
                engineering
                <br />
                problem?
              </h2>
              <p className="text-lg text-fg-muted leading-relaxed mb-10 max-w-sm">
                I&apos;m interested in building thoughtful products, solving
                complex engineering problems, and working on systems that create
                real value.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-base text-fg-muted hover:text-accent transition-colors duration-200 group"
                >
                  <span className="text-xs font-mono tracking-widest uppercase text-fg-subtle w-16">
                    Email
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    {EMAIL} →
                  </span>
                </a>
                <a
                  href="https://github.com/AlAminNahid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-fg-muted hover:text-accent transition-colors duration-200 group"
                >
                  <span className="text-xs font-mono tracking-widest uppercase text-fg-subtle w-16">
                    GitHub
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    AlAminNahid →
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-fg-muted hover:text-accent transition-colors duration-200 group"
                >
                  <span className="text-xs font-mono tracking-widest uppercase text-fg-subtle w-16">
                    LinkedIn
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    Al Amin Hossain Nahid →
                  </span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-8">
                Send a Message
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono tracking-widest uppercase text-fg-subtle mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-fg placeholder-fg-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-shadow"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono tracking-widest uppercase text-fg-subtle mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-fg placeholder-fg-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-shadow"
                  />
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono tracking-widest uppercase text-fg-subtle"
                    >
                      Message
                    </label>
                    <span className="text-xs font-mono text-fg-subtle tabular-nums">
                      {form.message.length} / 1000
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={1000}
                    placeholder="Tell me about what you're building..."
                    className="w-full rounded-lg bg-surface border border-border px-4 py-3 text-sm text-fg placeholder-fg-subtle focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-shadow resize-none"
                  />
                </div>

                <div aria-hidden="true" className="hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${!feedback ? "sr-only" : ""} ${
                    feedback?.type === "error" ? "text-danger" : "text-success"
                  }`}
                >
                  {feedback?.message ?? ""}
                </p>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-auto rounded-md px-7 py-3 text-sm font-semibold hover:opacity-85 transition-opacity"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
