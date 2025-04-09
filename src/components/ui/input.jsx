import React from "react";

export function Input({ placeholder, value, onChange }) {
  return (
    <input
      className="p-2 border rounded w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
