export default function Header() {
  return (
    <div
      id="top"
      className="min-h-screen snap-start flex flex-col items-center justify-center text-center px-6 lg:px-[8%] pt-20 pb-12"
    >
      {/* Available badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Available for opportunities
      </div>

      {/* Name */}
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
        Al Amin Hossain Nahid
      </h1>

      {/* Role with blinking cursor */}
      <p className="mt-4 text-xl sm:text-2xl font-medium text-zinc-400 dark:text-zinc-500">
        Full-Stack Developer<span className="cursor" />
      </p>

      {/* Short bio */}
      <p className="mt-6 max-w-lg text-zinc-500 dark:text-zinc-400 leading-7">
        I build scalable web and mobile applications — from front-end
        interfaces to back-end systems and Android apps.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex items-center gap-4 flex-wrap justify-center">
        <a
          href="#work"
          className="px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Social links */}
      <div className="mt-12 flex items-center gap-6 text-sm text-zinc-400 dark:text-zinc-500">
        <a
          href="https://github.com/AlAminNahid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          GitHub
        </a>
        <span>·</span>
        <a
          href="https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          LinkedIn
        </a>
        <span>·</span>
        <a
          href="https://codeforces.com/profile/AluBoss11"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Codeforces
        </a>
      </div>
    </div>
  );
}
