"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function LoginIndex() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Login with Google"}
      </button>
    </div>
  );
}