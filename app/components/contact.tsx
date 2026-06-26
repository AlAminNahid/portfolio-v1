"use client";

import axios from "axios";
import { FormEvent, useState, useEffect } from "react";
import { contactSchema } from "@/app/validation/contactSchema";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    const result = contactSchema.safeParse({ name, email, message });

    if (!result.success) {
      setError(result.error.issues[0].message);
      setIsSubmitting(false);
      return;
    }

    try {
      await axios.post("/api/contact", { name, email, message });
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center snap-start"
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-zinc-400 uppercase mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell me about your project or idea..."
                className="w-full border-b border-zinc-300 dark:border-zinc-700 bg-transparent py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            {error && (
              <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
            )}
            {success && (
              <p className="text-sm text-emerald-500 dark:text-emerald-400">
                Message sent successfully!
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
