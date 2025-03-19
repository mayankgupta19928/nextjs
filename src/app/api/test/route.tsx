import { NextRequest, NextResponse } from "next/server";

// import { cookies } from "next/headers";

// export async function GET(request: Request) {
//   return new Response("<h1>Hello, Next.js!<h1/>", {
//     status: 200,
//     headers: { "x-tetttt": `test`, "Content-Type": "text/html" },
//   });
// }

export async function GET(request: NextRequest) {
  console.log("API route called", request);
  const data = { message: "Hello from API!" };
  return NextResponse.json(data);
}
