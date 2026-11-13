import { researchPapers, SELF_AUTHOR } from "@/constants/research";
import Section from "@/components/ui/Section";
import SectionHead from "@/components/ui/SectionHead";
import ArrowLink from "@/components/ui/ArrowLink";
import Tags from "@/components/ui/Tags";
import { Reveal } from "@/components/ui/Reveal";

export default function Research() {
  return (
    <Section id="research" labelledBy="research-heading">
      <SectionHead
        id="research-heading"
        label="Research and publications"
        title="Papers I've co-authored."
      />

      <Reveal>
        {researchPapers.map((paper) => (
          <article
            key={paper.title}
            className="grid gap-6 border-t border-border py-[clamp(32px,4.4vw,56px)] last:border-b lg:grid-cols-12 lg:gap-x-6"
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 lg:col-span-3 lg:flex-col lg:items-start">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-[5px] font-mono text-[11.5px] leading-snug tracking-[0.08em] uppercase ${
                  paper.status === "Published"
                    ? "bg-accent text-accent-foreground"
                    : "border border-accent text-accent"
                }`}
              >
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-current"
                />
                {paper.status}
              </span>
              <span className="label">{paper.statusNote}</span>
            </div>

            <div className="grid min-w-0 gap-5 lg:col-span-9">
              <h3 className="max-w-[34em] text-[clamp(1.25rem,2.1vw,1.6rem)] leading-snug font-medium tracking-[-0.02em] text-balance">
                {paper.title}
              </h3>

              <p className="max-w-[62ch] text-[15px] text-fg-muted">
                {paper.authors.map((author, i) => (
                  <span key={author}>
                    {author === SELF_AUTHOR ? (
                      <b className="font-medium text-fg">{author}</b>
                    ) : (
                      author
                    )}
                    {i < paper.authors.length - 2
                      ? ", "
                      : i === paper.authors.length - 2
                        ? ", and "
                        : "."}
                  </span>
                ))}
              </p>

              <p className="max-w-[66ch] text-pretty text-fg-muted">
                {paper.abstract}
              </p>

              <p className="max-w-[66ch] border-t border-border pt-3.5 text-[14.5px]">
                <b className="font-medium">{paper.conference}</b>
                <span className="text-fg-muted">
                  {" · "}
                  {paper.conferenceFullName}
                  {" · "}
                  {paper.location}
                </span>
              </p>

              <Tags items={paper.tags} />

              <div className="flex flex-wrap gap-x-7 gap-y-2.5">
                {paper.links.map(({ label, href }) => (
                  <ArrowLink key={href} href={href} external>
                    {label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
