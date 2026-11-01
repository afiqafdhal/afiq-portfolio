
import { ImageResponse } from "next/og";
export const dynamic = "force-static";

export const alt =
  "Afiq Afdhal - Mechatronics Engineering Portfolio";

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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#081321",
          color: "#ffffff",
          padding: "65px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* TOP BRANDING */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "90px",
              height: "90px",
              borderRadius: "20px",
              border: "2px solid #579fe8",
              backgroundColor: "#173654",
              fontSize: 42,
              fontWeight: 800,
              color: "#80caff",
            }}
          >
            AA
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 3,
              color: "#75d5ec",
              fontWeight: 700,
            }}
          >
            ENGINEERING PORTFOLIO
          </div>
        </div>

        {/* MAIN INFORMATION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 78,
              fontWeight: 800,
              letterSpacing: -2,
              color: "#ffffff",
              marginBottom: 15,
            }}
          >
            Afiq Afdhal
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 700,
              color: "#78bcfa",
              marginBottom: 20,
            }}
          >
            Mechatronics Engineering
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 25,
              color: "#c3d8ee",
            }}
          >
            Automation | Industrial IoT | Programming | AI
          </div>
        </div>

        {/* BOTTOM */}
        <div
          style={{
            display: "flex",
            paddingTop: 25,
            borderTop: "2px solid #284664",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 25,
              color: "#a6c6e7",
            }}
          >
            Engineering ideas into practical systems.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 18,
              color: "#6ed6ec",
            }}
          >
            AA / PORTFOLIO
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
