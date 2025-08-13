"use client";
import FormAuth from "../../_form-auth/form-auth";

export default function FormRegister() {
  const handleSubmit = (evt: React.FormEvent) => {
    alert("Registro");
    evt.preventDefault();
  };
  return <FormAuth onSubmit={handleSubmit} typeForm="register" />;
}
