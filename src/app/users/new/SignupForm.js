"use client";
import FormButton from "@/app/components/forms/FormButton";
import FormInput from "@/app/components/forms/FormInput";
import { useRouter } from "next/navigation";
import React from "react";

const SignupForm = () => {
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      body: formData,
    });

    // TODO: Responseのデータを用いてログイン状況を更新する。
    const data = await response.json();

    router.push("/");
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput name="user[username]" type="text" placeholder="Username" />
      <FormInput name="user[email]" type="text" placeholder="email" />
      <FormInput name="user[password]" type="password" placeholder="Password" />
      <FormButton content="Sign up" />
    </form>
  );
};

export default SignupForm;
