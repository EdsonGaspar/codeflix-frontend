"use client";
import { useState } from "react";

export function BuggyButton() {
  const [isClicked, isSetClicked] = useState(false);

  if (isClicked) {
    throw new Error("Something went wrong");
    // return "something went wrong";
  }
  return (
    <button
      className="border border-red-400 px-2.5 py-1 text-red-500"
      onClick={() => isSetClicked(true)}
      type="button"
    >
      Click me
    </button>
  );
}
