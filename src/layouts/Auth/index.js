import React from "react";

import { AuthHeader } from "../../components/Header";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <div>{children}</div>
    </>
  );
};
