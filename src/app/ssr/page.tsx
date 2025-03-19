import React from "react";
// export const dynamic = "force-dynamic";
// export const fetchCache = "default-no-store";
const SSR: React.FC = async () => {
  // const data = await fetch("https://api.vercel.app/blog");
  // const posts = await data.json();
  console.log("posts");
  return (
    <div>
      <ul>
        ssr
        {/* {posts.map((post: { id: number; title: string }) => (
          <li key={post.id}>
            {post.title}
            {Date.now()}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default SSR;
