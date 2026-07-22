import React from "react";

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #3b82f6 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "24px",
          padding: "60px",
          color: "#fff",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span
            style={{
              background: "rgba(255,255,255,0.15)",
              padding: "8px 18px",
              borderRadius: "50px",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            ABOUT US
          </span>

          <h1
            style={{
              fontSize: "3.5rem",
              marginTop: "20px",
              marginBottom: "20px",
              fontWeight: "700",
            }}
          >
            Building Digital Experiences
          </h1>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#e2e8f0",
              lineHeight: "1.8",
              fontSize: "1.1rem",
            }}
          >
            We are passionate creators, developers, and innovators dedicated to
            crafting modern digital solutions that help businesses grow faster,
            connect better, and achieve remarkable results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          {[
            {
              title: "Our Mission",
              text: "To empower businesses with innovative technology solutions that drive growth and success.",
            },
            {
              title: "Our Vision",
              text: "To become a trusted global partner in digital transformation and innovation.",
            },
            {
              title: "Our Values",
              text: "Integrity, excellence, creativity, collaboration, and customer satisfaction.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "20px",
                padding: "30px",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                style={{
                  marginBottom: "15px",
                  fontSize: "1.4rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.7",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                background: "rgba(255,255,255,0.08)",
                padding: "25px",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "10px",
                }}
              >
                {stat.number}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}