import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";
import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/login",
    Component: Login,
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/register",
    Component: Register,
    ErrorBoundary: ErrorPage,
  },
  {
    path: "/dashboard-admin",
    Component: AdminDashboard,
    ErrorBoundary: ErrorPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
