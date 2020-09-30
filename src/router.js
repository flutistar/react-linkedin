import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./layouts";

import { AuthPage } from "./pages/AuthPage";
import { HomePage } from "./pages/HomePage";
import { MyNetworkPage } from "./pages/MyNetworkPage";
import { JobsPage } from "./pages/JobsPage";
import { MessagingPage } from "./pages/MessagingPage";
import { NotificationsPage } from "./pages/NotificationsPage"


export const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route exact path="/" component={HomePage} />
          <Route path='/mynetwork' component={MyNetworkPage} />
          <Route path="/jobs" component={JobsPage} />
          <Route path="/messaging" component={MessagingPage} />
          <Route path='/notifications' component={NotificationsPage} />
        </Switch>
        </Layout>
    </BrowserRouter>
  );
};

export default Router;
