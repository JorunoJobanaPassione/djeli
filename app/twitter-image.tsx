import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Djeli - Facturation FNE conforme pour PME Cote d'Ivoire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #064e3b 50%, #065f46 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
            }}
          >
            <span style={{ fontSize: "72px" }}>📄</span>
            <span
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "white",
              }}
            >
              <span style={{ color: "#34d399" }}>Dje</span>li
            </span>
          </div>

          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            Factures FNE conformes en 30s
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "#a7f3d0",
              textAlign: "center",
              marginBottom: "48px",
            }}
          >
            La solution mobile-first pour PME ivoiriennes
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(16, 185, 129, 0.3)",
                padding: "16px 24px",
                borderRadius: "16px",
                color: "white",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              <span>🛡️</span>
              <span>Conforme DGI</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(16, 185, 129, 0.3)",
                padding: "16px 24px",
                borderRadius: "16px",
                color: "white",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              <span>📱</span>
              <span>Mobile Money</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(16, 185, 129, 0.3)",
                padding: "16px 24px",
                borderRadius: "16px",
                color: "white",
                fontSize: "22px",
                fontWeight: 600,
              }}
            >
              <span>🇨🇮</span>
              <span>Cote d'Ivoire</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
