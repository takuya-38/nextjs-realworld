import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Header = ({ hasUserToken }) => {
  const cookieStore = cookies();
  const userToken = cookieStore.get("usertoken");

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          conduit
        </Link>
        {userToken ? (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              {/* <!-- Add "active" className when you're on that page" --> */}
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/articles/new">
                {" "}
                <i className="ion-compose"></i>&nbsp;New Article{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {" "}
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <Image alt="user-pic" src="" className="user-pic" /> Eric Simons
              </a>
            </li>
          </ul>
        ) : (
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/users/new">
                Sign up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
