"use client";

export default function ErrorView({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-mono tracking-widest text-zinc-400 uppercase mb-4">
        Error
      </p>
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
        Something went wrong
      </h2>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-sm">
        An unexpected error occurred. You can try again or come back later.
      </p>
      <button
        type="button"
        onClick={reset}
        className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-semibold hover:opacity-90 transition"
      >
        Try again
      </button>
    </div>
  );
}
