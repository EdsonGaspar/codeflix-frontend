"use client";
import { H2 } from "@/components/h2";
import { useEffect } from "react";

interface PageErrorProps {
  error: unknown;
  reset: () => void;
}

export default function PageError({ error, reset }: PageErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="border border-red-300">
      <H2 className="text-red-500">Pagina Error</H2>
      <p>Something happened wrong</p>
    </div>
  );
}
