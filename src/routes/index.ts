import { ComponentType } from "react";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";

export type RouteType = {
  path: string;
  component: ComponentType;
  exact: boolean;
};

export enum RouteTypes {
  HOME = "/",
  USER = "/user/:id",
}

export const publicRoutes: RouteType[] = [
  {
    path: RouteTypes.HOME,
    component: Home,
    exact: true,
  },
  {
    path: RouteTypes.USER,
    component: User,
    exact: true,
  },
];
