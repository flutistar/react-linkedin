import React from "react";

import './Main.scss'

import { MainHeader } from "../../components/Header";
import { AnnouncementBar, MessagingOverlay } from "../../components/Snippets"
import avatar from '../../assets/images/avatar.png'

export const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div className="main">
        <AnnouncementBar />
        <div>{children}</div>
        <MessagingOverlay avatar={avatar} name="wang" />
      </div>
    </>
  );
};
