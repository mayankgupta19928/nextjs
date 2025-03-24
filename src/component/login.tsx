"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";
interface formDataValues {
  email: string;
  password: string;
}
export default function LoginForm() {
  const [error, setError] = useState<any | string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const formDataValues: formDataValues = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    // const res = await fetch("http://localhost:8000/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   credentials: "include",
    //   mode: "cors",
    //   body: JSON.stringify(formDataValues),
    // });
    // const result = await res.json();
    // console.log("data", result);
    // debugger;
    const result = await loginUser(formDataValues);
    if (result.status == 200) {
      console.log("data2", result);

      router.push("/home");
    } else {
      setError(result.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 border rounded">
        <h2 className="mb-4 text-xl">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          name="email"
          placeholder="email"
          className="p-2 border mb-2 w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 border mb-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Login
        </button>
      </form>
    </>
  );
}
