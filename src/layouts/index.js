import React, { Fragment } from "react";
import { withRouter, Redirect } from "react-router-dom";

import { AuthLayout } from "./Auth";
import { MainLayout } from "./Main";

const Layouts = {
  auth: AuthLayout,
  main: MainLayout,
};

const Layout = ({ children, location: { pathname } }) => {
  const getLayout = () => {
    if (/^\/auth(?=\/|$)/i.test(pathname)) {
      return "auth";
    }
    return "main";
  };

  const Container = Layouts[getLayout()];

  return (
    <Fragment>
      <Container>{children}</Container>
    </Fragment>
  );
};

export default withRouter(Layout);
