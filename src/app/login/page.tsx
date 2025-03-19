"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4">Login with Google</h1>
      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}
