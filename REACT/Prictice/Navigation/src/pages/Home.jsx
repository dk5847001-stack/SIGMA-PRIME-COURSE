import React from "react";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #2563eb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effects */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.35)",
          filter: "blur(100px)",
          top: "-80px",
          left: "-80px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "rgba(168,85,247,0.35)",
          filter: "blur(120px)",
          bottom: "-120px",
          right: "-100px",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "40px",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Left Content */}
        <div>
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "14px",
            }}
          >
            ✨ Welcome to Our Platform
          </span>

          <h1
            style={{
              color: "#fff",
              fontSize: "4rem",
              fontWeight: "800",
              marginTop: "25px",
              lineHeight: "1.1",
            }}
          >
            Build Modern
            <br />
            Digital Experiences
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginTop: "20px",
              maxWidth: "550px",
            }}
          >
            Create beautiful, responsive, and powerful web applications with a
            premium user experience. Designed for developers, startups, and
            modern businesses.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "35px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "14px 28px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Get Started
            </button>

            <button
              style={{
                padding: "14px 28px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                cursor: "pointer",
                backdropFilter: "blur(15px)",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Glass Card */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "30px",
            padding: "35px",
            color: "#fff",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "30px",
            }}
          >
            Why Choose Us?
          </h2>

          <div
            style={{
              display: "grid",
              gap: "20px",
            }}
          >
            {[
              {
                title: "Premium Design",
                desc: "Modern glassmorphism interface with a professional appearance.",
              },
              {
                title: "Fast Performance",
                desc: "Optimized and responsive experience across all devices.",
              },
              {
                title: "Secure & Reliable",
                desc: "Built with modern best practices and scalability in mind.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.7",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2>100+</h2>
              <p style={{ color: "#cbd5e1" }}>Projects</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <h2>50+</h2>
              <p style={{ color: "#cbd5e1" }}>Clients</p>
            </div>

            <div style={{ textAlign: "center" }}>
              <h2>99%</h2>
              <p style={{ color: "#cbd5e1" }}>Success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}