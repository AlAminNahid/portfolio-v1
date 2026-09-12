import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import { researchPapers } from "@/constants/research";
import { Reveal } from "@/components/ui/Reveal";

export default function Research() {
  return (
    <section
      id="research"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 border-t border-border"
    >
      <Reveal className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-2">
          Research &amp; Intelligence
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-fg tracking-tight mb-16">
          Published Work
        </h2>

        {researchPapers.map((paper, i) => (
          <div
            key={i}
            className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
                <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle">
                  {paper.conference} · {paper.location} · {paper.year}
                </p>
                {paper.publisherUrl && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-success-border/60 bg-success-surface/70 px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-success">
                    <SiIeee size={13} aria-hidden />
                    {paper.publisher}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-fg tracking-tight leading-snug mb-8">
                {paper.title}
              </h3>

              <p className="text-sm text-fg-muted leading-7 mb-4">
                {paper.description}
              </p>

              <p className="text-sm text-fg-muted leading-7 mb-8">
                {paper.coAuthors}
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {paper.publisherUrl && (
                  <a
                    href={paper.publisherUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-inverted text-fg-inverted text-sm font-semibold hover:opacity-90 transition"
                  >
                    Read on {paper.publisher}
                    <FaArrowRight
                      size={11}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                )}

                <a
                  href={paper.conferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-accent transition-colors duration-200"
                >
                  Conference site <FaExternalLinkAlt size={11} />
                </a>
              </div>
            </div>

            <div className="border border-border rounded-xl p-6 h-fit">
              <div className="mb-6">
                <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-3">
                  Method
                </p>
                <div className="flex flex-wrap gap-2">
                  {paper.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-fg-muted hover:border-accent/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-5 mb-5">
                <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-2">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-solid opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success-solid" />
                  </span>
                  <span className="text-sm font-medium text-success">
                    {paper.status}
                  </span>
                </div>
                {paper.publisher && (
                  <p className="mt-1.5 text-xs text-fg-subtle">
                    Indexed in the {paper.publisher} Digital Library
                  </p>
                )}
              </div>

              <div className="border-t border-border pt-5">
                <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-2">
                  Conference
                </p>
                <p className="text-sm text-fg-muted">
                  International Conference on Power, Electronics,
                  Communications, Computing, and Intelligent Infrastructure
                </p>
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
