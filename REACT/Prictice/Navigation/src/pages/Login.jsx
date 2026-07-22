import React from "react";

export default function Login() {
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
      {/* Background Glow Effects */}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(59,130,246,0.35)",
          filter: "blur(120px)",
          top: "-100px",
          left: "-100px",
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
          bottom: "-100px",
          right: "-100px",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "30px",
          padding: "40px",
          color: "#fff",
          boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <span
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "8px 18px",
              borderRadius: "50px",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "14px",
            }}
          >
            ✨ WELCOME BACK
          </span>

          <h1
            style={{
              marginTop: "20px",
              fontSize: "2.5rem",
              fontWeight: "700",
            }}
          >
            Login
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              marginTop: "10px",
            }}
          >
            Sign in to access your account and continue.
          </p>
        </div>

        {/* Form */}
        <form>
          <div style={{ marginBottom: "18px" }}>
            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "25px",
              fontSize: "14px",
            }}
          >
            <label
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                color: "#cbd5e1",
              }}
            >
              <input type="checkbox" />
              Remember me
            </label>

            <span
              style={{
                color: "#60a5fa",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </span>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
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
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div
          style={{
            textAlign: "center",
            margin: "25px 0",
            color: "#94a3b8",
          }}
        >
          ───── OR ─────
        </div>

        {/* Social Login */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
          }}
        >
          <button style={socialBtn}>Google</button>
          <button style={socialBtn}>GitHub</button>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#cbd5e1",
          }}
        >
          Don't have an account?{" "}
          <span
            style={{
              color: "#60a5fa",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Register Now
          </span>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  outline: "none",
  fontSize: "15px",
  backdropFilter: "blur(10px)",
};

const socialBtn = {
  padding: "12px 22px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.15)",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  cursor: "pointer",
  backdropFilter: "blur(10px)",
};