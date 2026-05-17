import { ImageResponse } from "next/og";

export const alt = "Tony Ayda — Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #0A0A0F 0%, #111118 50%, #0A0A0F 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #00D4FF, #7C3AED)",
          }}
        />
        <p
          style={{
            fontSize: 20,
            color: "#00D4FF",
            fontFamily: "monospace",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio
        </p>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 500,
            color: "#E8E8F0",
            fontFamily: "monospace",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Tony Ayda
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#6B6B80",
            fontFamily: "monospace",
          }}
        >
          Software Engineer
        </p>
        <p
          style={{
            fontSize: 22,
            color: "#6B6B80",
            marginTop: 40,
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Resilient APIs · Real-time systems · Production-grade backends
        </p>
      </div>
    ),
    { ...size },
  );
}
