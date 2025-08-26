"use client";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import FormAuth from "../../_form-auth/form-auth";

type ServerError = {
  message: string;
};

export function LoginForm() {
  const route = useRouter();
  const [, setErrors] = useState<string[]>([]);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("../login/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        route.push("/");
        return;
      }

      const payload: ServerError[] = await response.json();
      setErrors(payload.map((error) => error.message));
    } catch (error) {
      // console.error(error);
      //Error inesperado no servidor
      setErrors([`Erro inesperado no servidor, ${error}`]);
    }
  };

  return <FormAuth onSubmit={handleSubmit} typeForm="login" />;
}
