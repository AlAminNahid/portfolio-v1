import { FaExternalLinkAlt } from "react-icons/fa";
import { researchPapers } from "@/constants/research";

export default function Research() {
  return (
    <section
      id="research"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-4">
          Research
        </h2>

        {researchPapers.map((paper, i) => (
          <div key={i}>
            <blockquote className="text-3xl sm:text-4xl font-bold text-fg leading-snug">
              &ldquo;{paper.title}&rdquo;
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-surface-raised" />
              <p className="text-xs font-mono text-fg-muted shrink-0">
                {paper.conference} · {paper.location}
              </p>
              <div className="h-px flex-1 bg-surface-raised" />
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-10">
              <div>
                <p className="text-sm text-fg-muted leading-7">
                  {paper.description}
                </p>
                <p className="mt-4 text-sm text-fg-muted leading-7">
                  {paper.coAuthors}
                </p>
              </div>

              <div>
                <p className="text-xs font-mono tracking-widest text-fg-muted uppercase mb-3">
                  Highlights
                </p>
                <div className="flex flex-wrap gap-2">
                  {paper.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-surface-subtle border border-border text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-fg-muted w-10 shrink-0">
                      Status
                    </span>
                    <div className="h-px flex-1 bg-surface-raised" />
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-success-surface/60 text-success border border-success-border/60">
                      {paper.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-fg-muted w-10 shrink-0">
                      Year
                    </span>
                    <div className="h-px flex-1 bg-surface-raised" />
                    <span className="text-xs text-fg-muted">{paper.year}</span>
                  </div>
                </div>

                <a
                  href={paper.conferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-strong transition"
                >
                  View Conference <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
