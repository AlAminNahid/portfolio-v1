"use client";

import Image from "next/image";
import { useState } from "react";
import { XIcon, Maximize2 } from "lucide-react";
import { type Certificate } from "@/types";
import { certificates } from "@/constants/certificates";
import { Reveal } from "@/components/ui/Reveal";
import Carousel from "@/components/ui/Carousel";
import ArrowButton from "@/components/features/works/ArrowButton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const paperShadow =
  "shadow-[0_1px_2px_rgb(0_0_0/0.08),0_12px_28px_-12px_rgb(0_0_0/0.35)]";

function CertificateCard({
  cert,
  onClick,
}: {
  cert: Certificate;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`View ${cert.title} certificate`}
      className="group text-left rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative rounded-2xl border border-border bg-surface-subtle p-5 sm:p-6 transition-colors duration-300 group-hover:border-accent/40">
        <div className="relative aspect-[1.414]">
          <Image
            src={cert.image}
            alt={`${cert.title} certificate`}
            fill
            sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 80vw"
            className={`rounded-[3px] object-contain transition-transform duration-500 ease-out group-hover:-translate-y-1 ${paperShadow}`}
          />
        </div>

        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase text-fg-muted opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 size={10} aria-hidden />
          View
        </span>
      </div>

      <div className="px-1 pt-5">
        <div className="mb-2 flex items-center justify-between gap-3 text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
          <span>{cert.type}</span>
          <span>{cert.date}</span>
        </div>
        <h3 className="text-base font-semibold text-fg tracking-tight leading-snug transition-colors duration-200 group-hover:text-accent">
          {cert.title}
        </h3>
        <p className="mt-1 text-sm text-fg-muted">{cert.issuer}</p>
      </div>
    </button>
  );
}

function CertificateLightbox({
  index,
  onIndexChange,
  onClose,
}: {
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}) {
  const cert = index === null ? null : certificates[index];
  const total = certificates.length;

  const go = (step: 1 | -1) => {
    if (index === null) return;
    const next = index + step;
    if (next >= 0 && next < total) onIndexChange(next);
  };

  return (
    <Dialog open={!!cert} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        aria-describedby={undefined}
        showCloseButton={false}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        className="w-full max-w-6xl sm:max-w-6xl max-h-[92vh] overflow-y-auto lg:overflow-hidden rounded-2xl !bg-surface p-0 gap-0"
      >
        {cert && index !== null && (
          <>
            <DialogClose asChild>
              <button
                type="button"
                aria-label="Close certificate"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-surface-raised text-fg-muted hover:text-fg transition"
              >
                <XIcon size={15} />
              </button>
            </DialogClose>

            <div className="grid lg:grid-cols-[1fr_320px]">
              <div className="flex items-center justify-center bg-canvas p-5 sm:p-10 lg:rounded-l-2xl">
                <Image
                  key={cert.image}
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  width={2048}
                  height={1448}
                  quality={90}
                  sizes="(min-width: 1024px) 50rem, 95vw"
                  className={`h-auto w-full max-h-[78vh] object-contain rounded-[3px] ${paperShadow}`}
                />
              </div>

              <div className="flex flex-col border-t border-border p-6 sm:p-8 lg:border-t-0 lg:border-l">
                <p className="mb-3 text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
                  {cert.type}
                </p>
                <DialogTitle className="mb-6 pr-8 text-2xl font-bold text-fg tracking-tight leading-snug">
                  {cert.title}
                </DialogTitle>

                <dl className="mb-6 space-y-4 border-t border-border pt-5 text-sm">
                  <div>
                    <dt className="mb-1 text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
                      Issued by
                    </dt>
                    <dd className="text-fg-muted">{cert.issuer}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
                      Date
                    </dt>
                    <dd className="text-fg-muted">{cert.date}</dd>
                  </div>
                  {cert.credentialId && (
                    <div>
                      <dt className="mb-1 text-[10px] font-mono tracking-widest uppercase text-fg-subtle">
                        Credential ID
                      </dt>
                      <dd className="font-mono text-xs text-fg-muted">
                        {cert.credentialId}
                      </dd>
                    </div>
                  )}
                </dl>

                <p className="text-sm text-fg-muted leading-6">
                  {cert.description}
                </p>

                <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5 lg:mt-auto">
                  <span className="text-xs font-mono text-fg-subtle">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    <ArrowButton
                      direction="left"
                      onClick={() => go(-1)}
                      disabled={index === 0}
                      aria-label="Previous certificate"
                      className="w-9 h-9 border border-border text-fg-muted hover:border-accent/40 hover:text-fg"
                    />
                    <ArrowButton
                      direction="right"
                      onClick={() => go(1)}
                      disabled={index === total - 1}
                      aria-label="Next certificate"
                      className="w-9 h-9 border border-border text-fg-muted hover:border-accent/40 hover:text-fg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default function Certificates() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      className="w-full px-6 lg:px-[8%] py-24 scroll-mt-20 border-t border-border"
    >
      <Reveal className="max-w-5xl mx-auto">
        <p className="text-xs font-mono tracking-widest uppercase text-fg-muted mb-2">
          Credentials
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-fg tracking-tight mb-16">
          Certificates
        </h2>

        <Carousel label="Most recent" itemName="certificates">
          {certificates.map((cert, i) => (
            <CertificateCard
              key={cert.title}
              cert={cert}
              onClick={() => setActive(i)}
            />
          ))}
        </Carousel>
      </Reveal>

      <CertificateLightbox
        index={active}
        onIndexChange={setActive}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
