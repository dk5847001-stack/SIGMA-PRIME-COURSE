import React from "react";

export default function Service() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive, and high-performance websites built with the latest technologies.",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user experiences designed to engage and convert visitors.",
    },
    {
      title: "Mobile Applications",
      description:
        "Cross-platform mobile apps with seamless performance and premium user experience.",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and deployment solutions for growing businesses.",
    },
    {
      title: "Digital Marketing",
      description:
        "SEO, social media, and growth strategies to increase your online presence.",
    },
    {
      title: "Technical Support",
      description:
        "24/7 support and maintenance services to keep your business running smoothly.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #2563eb 100%)",
        padding: "80px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.35)",
          filter: "blur(120px)",
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
          filter: "blur(140px)",
          bottom: "-120px",
          right: "-100px",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
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
            ✨ OUR SERVICES
          </span>

          <h1
            style={{
              color: "#fff",
              fontSize: "3.5rem",
              fontWeight: "800",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Solutions That Drive Success
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: "1.8",
            }}
          >
            We provide innovative digital solutions designed to help businesses
            grow, improve efficiency, and create exceptional customer
            experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "24px",
                padding: "30px",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                transition: "0.3s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(135deg,#3b82f6,#8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                🚀
              </div>

              <h3
                style={{
                  marginBottom: "15px",
                  fontSize: "1.4rem",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop: "70px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "30px",
            padding: "50px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontSize: "2.2rem",
              marginBottom: "15px",
            }}
          >
            Ready to Start Your Project?
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              maxWidth: "650px",
              margin: "0 auto 30px",
              lineHeight: "1.8",
            }}
          >
            Let's transform your ideas into reality with cutting-edge
            technology, premium design, and world-class support.
          </p>

          <button
            style={{
              padding: "15px 35px",
              border: "none",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg,#3b82f6,#8b5cf6)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}