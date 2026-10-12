import { ImageResponse } from "next/og";

export const alt =
  "Al Amin Hossain Nahid — Software Engineer | Full-Stack & AI Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#121211",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#9a9a93",
        }}
      >
        Portfolio
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#ecece7",
            letterSpacing: "-0.02em",
          }}
        >
          Al Amin Hossain Nahid
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 38,
            color: "#c9c9c2",
          }}
        >
          Software Engineer | Full-Stack &amp; AI Systems
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: 26,
          color: "#8fa4ec",
        }}
      >
        <span>Agentic AI</span>
        <span style={{ color: "#3d3d39" }}>·</span>
        <span>Knowledge Retrieval</span>
        <span style={{ color: "#3d3d39" }}>·</span>
        <span>Next.js</span>
        <span style={{ color: "#3d3d39" }}>·</span>
        <span>FastAPI</span>
        <span style={{ color: "#3d3d39" }}>·</span>
        <span>Cloud Run</span>
      </div>
    </div>,
    size,
  );
}
