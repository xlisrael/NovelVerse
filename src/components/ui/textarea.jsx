import React from "react";

export function Textarea({ placeholder, value, onChange }) {
  return (
    <textarea
      className="p-2 border rounded w-full h-24"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
