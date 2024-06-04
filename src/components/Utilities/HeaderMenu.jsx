import React from "react";

export default function HeaderMenu({ title }) {
  return (
    <div className="flex justify-center items-center p-6">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
    </div>
  );
}
