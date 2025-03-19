import type { NextConfig } from "next";

module.exports = {
  async headers() {
    return [
      {
        source: "/ssr",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
          {
            key: "x-another-custom-header",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};
