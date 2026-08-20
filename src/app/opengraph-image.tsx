import { ImageResponse } from "next/og";

export const alt = "Al Amin Hossain Nahid — Full-Stack Developer";
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
        background: "#09090b",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#71717a",
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
            color: "#fafafa",
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
            color: "#a1a1aa",
          }}
        >
          Full-Stack Developer
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "18px",
          fontSize: 26,
          color: "#818cf8",
        }}
      >
        <span>TypeScript</span>
        <span style={{ color: "#3f3f46" }}>·</span>
        <span>Next.js</span>
        <span style={{ color: "#3f3f46" }}>·</span>
        <span>NestJS</span>
        <span style={{ color: "#3f3f46" }}>·</span>
        <span>FastAPI</span>
        <span style={{ color: "#3f3f46" }}>·</span>
        <span>Kotlin</span>
      </div>
    </div>,
    size,
  );
}
