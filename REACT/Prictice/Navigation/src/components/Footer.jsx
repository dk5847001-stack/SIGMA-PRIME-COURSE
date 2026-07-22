import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #2563eb 100%)",
        padding: "50px 20px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effects */}
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.25)",
          filter: "blur(100px)",
          top: "-50px",
          left: "-50px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(168,85,247,0.25)",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px",
        }}
      />

      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "25px",
          padding: "40px",
          color: "#fff",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "40px",
          }}
        >
          {/* Company */}
          <div>
            <h2
              style={{
                marginBottom: "15px",
                fontSize: "1.8rem",
              }}
            >
              YourBrand
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Building premium digital experiences with modern technology,
              innovative design, and exceptional performance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>Quick Links</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Link
                to="/home"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                Home
              </Link>

              <Link
                to="/about"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                About
              </Link>

              <Link
                to="/service"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                Services
              </Link>

              <Link
                to="/contact"
                style={{ color: "#cbd5e1", textDecoration: "none" }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>Services</h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: "#cbd5e1",
              }}
            >
              <span>Web Development</span>
              <span>UI/UX Design</span>
              <span>Mobile Apps</span>
              <span>Cloud Solutions</span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 style={{ marginBottom: "15px" }}>Follow Us</h3>

            <div
              style={{
                display: "flex",
                gap: "15px",
                fontSize: "22px",
              }}
            >
              <a href="#" style={{ color: "#fff" }}>
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="#" style={{ color: "#fff" }}>
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a href="#" style={{ color: "#fff" }}>
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a href="#" style={{ color: "#fff" }}>
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{
            border: "none",
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            margin: "30px 0 20px",
          }}
        />

        {/* Copyright */}
        <div
          style={{
            textAlign: "center",
            color: "#cbd5e1",
          }}
        >
          © {new Date().getFullYear()} YourBrand. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}