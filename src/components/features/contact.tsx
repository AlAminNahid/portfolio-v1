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
        <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
          Contact
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
          Let&apos;s build something
          <br />
          <span className="text-zinc-400 dark:text-zinc-600">together.</span>
        </h2>

        <a
          href="mailto:robin.nahid123@gmail.com"
          className="mt-6 inline-flex items-center gap-2 text-base text-indigo-500 hover:gap-4 transition-all duration-300"
        >
          robin.nahid123@gmail.com <span>→</span>
        </a>

        <div className="mt-12 pt-10 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-8">
            Or send a message
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project or idea..."
                className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            {feedback && (
              <p
                className={`text-sm ${
                  feedback.type === "success"
                    ? "text-emerald-500 dark:text-emerald-400"
                    : "text-red-500 dark:text-red-400"
                }`}
              >
                {feedback.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
