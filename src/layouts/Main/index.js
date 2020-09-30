import React from "react";
import { MainHeader } from "../../components/Header";
import { AnnouncementBar } from "../../components/Snippets"

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <AnnouncementBar />
      <div>{children}</div>
    </>
  );
};
