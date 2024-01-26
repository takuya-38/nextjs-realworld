import SignupForm from "@/app/users/new/SignupForm";
import Link from "next/link";
import React from "react";

export const page = () => {
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <p className="text-xs-center">
              <Link href="/login">Have an account?</Link>
            </p>

            {/* TODO: バリデーションのエラー処理
            <ul className="error-messages">
              <li>That email is already taken</li>
            </ul> */}

            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
