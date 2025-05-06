import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback() {
  const [err, setErr] = useState(null);
  const hasRun = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const code = p.get("code");
    const state = p.get("state");
    const expectedState = localStorage.getItem("oauth_state");
    const codeVerifier = localStorage.getItem("pkce_verifier");

    if (!code || !state || state !== expectedState || !codeVerifier) {
      setErr("OAuth verification failed.");
      return;
    }

    if (hasRun.current) return;
    hasRun.current = true;

    (async () => {
      try {
        const res = await fetch("http://localhost:3001/api/v1/oauth/exchange", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ code, state, code_verifier: codeVerifier }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Login failed");

        // Save locally
        localStorage.setItem("user_id", data.user_id);
        navigate("/dashboard");
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, [navigate]);

  if (err) return <div className="p-6 text-red-500">{err}</div>;
  return <div className="p-6">Logging you in...</div>;
}
