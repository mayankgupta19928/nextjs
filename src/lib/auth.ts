// "use server";
'use client";';

// import { cookies } from "next/headers";

interface formDataValues {
  email: string;
  password: string;
}
let url = "http://localhost:8000";

export async function loginUser(formData: formDataValues) {
  try {
    const res = await fetch(`${url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    console.log("data", result);
    // debugger;

    // Set HTTP-only cookie manually
    // (await cookies()).set("token", result, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    // });

    return { result, status: res.status };
  } catch (error: any) {
    return { error: error.response?.data?.message || "Login failed" };
  }
}
interface signUpValues {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
export async function signupUser(formData: signUpValues) {
  try {
    const result = await fetch(`${url}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      mode: "cors",
      body: JSON.stringify(formData),
    });
    // const data = await result.json();
    // console.log("data first", result, data, result.status, { ...result },result.response.blob());

    return result;
  } catch (error: any) {
    return { error: error.response?.data?.message || "Signup failed" };
  }
}
