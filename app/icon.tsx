import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0F",
          borderRadius: 8,
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#00D4FF",
            fontFamily: "monospace",
          }}
        >
          T
        </span>
      </div>
    ),
    { ...size },
  );
}
