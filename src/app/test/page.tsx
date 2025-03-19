import Component from "@/component/page";
import React from "react";
import About from "./about";

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test Page</h1>
      <Component />
      <About />
      <p>This is a test page.</p>
    </div>
  );
};

export default TestPage;
