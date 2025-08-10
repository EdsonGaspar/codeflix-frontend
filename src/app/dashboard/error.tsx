"use client";
import { useEffect } from "react";
import { H2 } from "@/components/h2";

interface PageErrorProps {
  error: unknown;
  reset: () => void;
}

export default function PageError({ error }: PageErrorProps) {
  useEffect(() => {
    // biome-ignore lint/suspicious/noConsole: false positive
    console.log(error);
  }, [error]);
  return (
    <div className="border border-red-300">
      <H2 className="text-red-500">Pagina Error</H2>
      <p>Something happened wrong</p>
    </div>
  );
}
