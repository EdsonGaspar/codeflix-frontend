"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormAuth from "../../_form-auth/form-auth";

type ServerErrors = {
  message: string;
};

export default function FormRegister() {
  const router = useRouter();
  const [, setErrors] = useState<string[]>([]);

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formDataRegister = new FormData(evt.currentTarget);
    const name = formDataRegister.get("name");
    const email = formDataRegister.get("email");
    const password = formDataRegister.get("password");
    const confirm_password = formDataRegister.get("confirm_password");

    try {
      const response = await fetch("../register/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, confirm_password, name }),
      });

      if (response.ok) {
        router.push("/");
        return;
      }

      const playload: ServerErrors[] = await response.json();
      setErrors(playload.map((erro) => erro.message));
    } catch (err) {
      setErrors([`Erro insesperado no servidor, ${err}`]);
    }
  };
  return <FormAuth onSubmit={handleSubmit} typeForm="register" />;
}
