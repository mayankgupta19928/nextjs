"use client";
// import { useSession, signIn, signOut } from "next-auth/react";
// import { cookies } from "next/headers";
import Temp2 from "./(component)/_temp2/page";

export default function Component() {
  // const { data: session }: any = useSession();
  // const cookie = cookies().then((v) => {
  //   setState(v.get("session")?.value);
  // });

  // console.log("session cookies", session, state);
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session?.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  return (
    <>
      Not signed in <br />
      <Temp2 />
      <a href="http://localhost:3001/auth/google">Sign in</a>
    </>
  );
}
