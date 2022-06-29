import React from "react";
import Link from "next/link";
import nProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";
Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = (url) => nProgress.done();
Router.onRouteChangeError = (url) => nProgress.done();

const Layout = (props) => {
  const head = (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/static/css/styles.css"></link>
    </React.Fragment>
  );
  const nav = (
    <ul className="nav nav-tabs bg-warning">
      <li className="nav-item ">
        <Link href="/">
          <a className="nav-link text-dark">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/login">
          <a className="nav-link text-dark">Login</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/register">
          <a className="nav-link text-dark">Register</a>
        </Link>
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
