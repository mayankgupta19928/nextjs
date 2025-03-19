import React from "react";

export default function ParLayout({
  children,
  left,
  right,
}: Readonly<{
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
      <div className="pt-1 box-border flex justify-between p-10">
        <div className="flex border-1 p-10">{left}</div>
        <div className="flex border-1 p-10">{right}</div>
      </div>
    </div>
  );
}
