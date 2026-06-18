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
            "linear-gradient(135deg, #faf7f2 0%, #f3ebdf 45%, #122029 130%)",
          color: "#122029",
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
            border: "1px solid rgba(18,32,41,0.12)",
            background: "rgba(255,255,255,0.72)",
            padding: "48px",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: "0.24em", textTransform: "uppercase", color: "#5d6a72" }}>
            Unternehmensberatung Wien
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div style={{ fontSize: 76, fontWeight: 700 }}>POSITIVconsult</div>
            <div style={{ fontSize: 34, lineHeight: 1.3, maxWidth: "880px" }}>
              Strategie, Digitalisierung, Vertrieb, Förderberatung und AI Consulting
              mit Fokus auf Umsetzung und Wirkung.
            </div>
          </div>
          <div style={{ fontSize: 24, color: "#5d6a72" }}>
            Wien · 20+ Jahre Erfahrung · 250 Projekte
          </div>
        </div>
      </div>
    ),
    size,
  );
}
