import React from "react";
import { Home } from "../components/Home";
import { Setting } from "../components/Setting";
import { UserManagement } from "../components/UserManagement";
import { Page404 } from "../components/Page404";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
