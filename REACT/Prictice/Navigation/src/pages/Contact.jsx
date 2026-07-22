import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 45%, #2563eb 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blobs */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.35)",
          filter: "blur(80px)",
          top: "-50px",
          left: "-50px",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(168,85,247,0.35)",
          filter: "blur(90px)",
          bottom: "-100px",
          right: "-80px",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "30px",
          zIndex: 2,
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "24px",
            padding: "40px",
            color: "#fff",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              background: "rgba(255,255,255,0.12)",
              padding: "8px 16px",
              borderRadius: "50px",
              fontSize: "14px",
            }}
          >
            CONTACT US
          </span>

          <h1
            style={{
              fontSize: "3rem",
              margin: "20px 0",
              fontWeight: "700",
            }}
          >
            Let's Talk
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Have a project in mind or need assistance? We'd love to hear from
            you. Reach out to us through any of the channels below.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <FaEnvelope size={22} />
              <div>
                <h4>Email</h4>
                <p style={{ color: "#cbd5e1" }}>contact@yourcompany.com</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <FaPhoneAlt size={22} />
              <div>
                <h4>Phone</h4>
                <p style={{ color: "#cbd5e1" }}>+91 98765 43210</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <FaMapMarkerAlt size={22} />
              <div>
                <h4>Location</h4>
                <p style={{ color: "#cbd5e1" }}>
                  New Delhi, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "24px",
            padding: "40px",
            color: "#fff",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
              fontSize: "2rem",
            }}
          >
            Send a Message
          </h2>

          <form>
            <div style={{ marginBottom: "18px" }}>
              <input
                type="text"
                placeholder="Your Name"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <input
                type="email"
                placeholder="Your Email"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "18px" }}>
              <input
                type="text"
                placeholder="Subject"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <textarea
                rows="5"
                placeholder="Write your message..."
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  resize: "none",
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}