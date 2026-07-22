export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 px-6 lg:px-[8%] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
      <span>© 2026 Al Amin Hossain Nahid</span>
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/AlAminNahid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/al-amin-hossain-nahid-876858193/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          LinkedIn
        </a>
        <a
          href="https://codeforces.com/profile/AluBoss11"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-900 dark:hover:text-zinc-100 transition"
        >
          Codeforces
        </a>
      </div>
    </footer>
  );
}
