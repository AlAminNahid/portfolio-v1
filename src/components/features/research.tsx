import { FaExternalLinkAlt } from "react-icons/fa";
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
          Research & Intelligence
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
              <p className="text-xs font-mono tracking-widest uppercase text-fg-subtle mb-6">
                {paper.conference} · {paper.location} · {paper.year}
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-fg tracking-tight leading-snug mb-8">
                {paper.title}
              </h3>

              <p className="text-sm text-fg-muted leading-7 mb-4">
                {paper.description}
              </p>

              <p className="text-sm text-fg-muted leading-7 mb-8">
                {paper.coAuthors}
              </p>

              <a
                href={paper.conferenceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-strong transition-colors duration-200"
              >
                View Conference <FaExternalLinkAlt size={11} />
              </a>
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
                  <span className="h-1.5 w-1.5 rounded-full bg-success-solid" />
                  <span className="text-sm font-medium text-success">
                    {paper.status}
                  </span>
                </div>
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
