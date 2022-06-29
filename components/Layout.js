import React from "react";
import Head from "next/head";
const Layout = (props) => {
  const head = (
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
  );
  const nav = (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item">
        <a className="nav-link text-dark" href="">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="">
          Login
        </a>
      </li>{" "}
      <li className="nav-item">
        <a className="nav-link text-dark" href="">
          Register
        </a>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      {head}
      {nav}
      <div className="container pt-5 pb-5">{props.children}</div>
    </React.Fragment>
  );
};
export default Layout;
