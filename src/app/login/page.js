import SigninForm from "@/app/login/SigninForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign in</h1>
            <p className="text-xs-center">
              <Link href="/register">Need an account?</Link>
            </p>
            {/* TODO: バリデーションのエラー処理
            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul> */}
            <SigninForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
