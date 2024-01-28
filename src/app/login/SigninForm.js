"use client";
import FormButton from "@/app/components/forms/FormButton";
import FormInput from "@/app/components/forms/FormInput";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const SigninForm = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["usertoken"]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      body: formData,
    });

    // TODO: Responseのデータを用いてログイン状況を更新する。
    const data = await response.json();
    console.log(data);
    setCookie("usertoken", data.user.token);

    router.push("/");
    router.refresh();
  };

  return (
    <form onSubmit={onSubmit}>
      <FormInput name="user[email]" type="text" placeholder="email" />
      <FormInput name="user[password]" type="password" placeholder="Password" />
      <FormButton content="Sign in" />
    </form>
  );
};

export default SigninForm;
