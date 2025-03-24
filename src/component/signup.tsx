"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signupUser } from "@/lib/auth";
interface formDataValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
export default function SignupForm() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataValues: formDataValues = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const data = await signupUser(formDataValues);
    let result = data instanceof Response ? await data.json() : data;

    if (data instanceof Response && data.status === 200) {
      router.push("/login");
    } else {
      console.log(
        "data result",
        result,
        result.error,
        result.error !== undefined,
        data
      );
      const sign = document.getElementById("signupForm") as HTMLFormElement;
      sign.reset();

      setError(result.error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="signupForm"
      className="p-6 border rounded"
    >
      <h2 className="mb-4 text-xl">Signup</h2>
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        name="first_name"
        placeholder="first name"
        className="p-2 border mb-2 w-full"
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="last name"
        className="p-2 border mb-2 w-full"
        required
      />
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
        Signup
      </button>
    </form>
  );
}
