"use client";

import { useContactForm } from "@/hooks/useContactForm";

export default function Contact() {
  const { form, handleChange, handleSubmit, isSubmitting, feedback } =
    useContactForm();

  return (
    <section
      id="contact"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-2xl mx-auto w-full">
        <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-4">
          Contact
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-fg leading-tight">
          Let&apos;s build something
          <br />
          <span className="text-fg-subtle">together.</span>
        </h2>

        <a
          href="mailto:robin.nahid123@gmail.com"
          className="mt-6 inline-flex items-center gap-2 text-base text-accent hover:gap-4 transition-all duration-300"
        >
          robin.nahid123@gmail.com <span>→</span>
        </a>

        <div className="mt-12 pt-10 border-t border-border">
          <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-8">
            Or send a message
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-mono tracking-widest text-fg-muted uppercase mb-2"
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
                className="w-full border-b border-border-strong bg-transparent py-3 text-sm text-fg placeholder-fg-subtle focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-mono tracking-widest text-fg-muted uppercase mb-2"
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
                className="w-full border-b border-border-strong bg-transparent py-3 text-sm text-fg placeholder-fg-subtle focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono tracking-widest text-fg-muted uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project or idea..."
                className="w-full border-b border-border-strong bg-transparent py-3 text-sm text-fg placeholder-fg-subtle focus:border-accent focus:outline-none transition-colors resize-none"
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-inverted text-fg-inverted text-sm font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
