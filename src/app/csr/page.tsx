"use client";

import { useEffect, useState } from "react";
import SSR from "../ssr/page";

// import { useEffect, useState } from "react";
// export dynamic = 'force-dynamic';
export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/test", {
        headers: {
          authrization: "Bearer 123",
        },
      });

      const data = await response.json();
      setData(data);
    }
    fetchData();
    console.log("ClientComponent mounted");
    return () => {
      console.log("ClientComponent unmounted");
    };
  }, []);

  //   if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>API Response: {JSON.stringify(data)}</p>
      {children}
    </div>
  );
}
