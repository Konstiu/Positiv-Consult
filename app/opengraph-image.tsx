import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #ffffff 0%, #e7eef8 42%, #111827 125%)",
          color: "#111827",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(17,24,39,0.12)",
            background: "rgba(255,255,255,0.82)",
            padding: "48px",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: "0.24em", textTransform: "uppercase", color: "#1f4e8c" }}>
            Unternehmensberatung Wien
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontSize: 76, fontWeight: 700 }}>POSITIVconsult</div>
            <div style={{ fontSize: 34, lineHeight: 1.3, maxWidth: "880px" }}>
              Strategie, Digitalisierung, Vertrieb, Förderberatung und AI Consulting
              mit Fokus auf Umsetzung und Wirkung.
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#d7263d" }}>
            Wien · 25 Jahre Erfahrung · 250 Projekte
          </div>
        </div>
      </div>
    ),
    size,
  );
}
