import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(45deg, #0ea5e9, #2563eb)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            fontFamily: "Inter",
          }}
        >
          PL
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
