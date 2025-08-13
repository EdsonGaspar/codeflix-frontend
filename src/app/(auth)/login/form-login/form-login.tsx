"use client";
import FormAuth from "../../_form-auth/form-auth";

export function LoginForm() {
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    alert("Tentou entrar");
  };

  return <FormAuth onSubmit={handleSubmit} typeForm="login" />;
}
