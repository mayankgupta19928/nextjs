import Link from "next/link";
import React from "react";

const LeftComponent: React.FC = () => {
  return (
    <div>
      <h1>Left Component</h1>
      <Link href="par/lef"> Login </Link>
    </div>
  );
};

export default LeftComponent;
