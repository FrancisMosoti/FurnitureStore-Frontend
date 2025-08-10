import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  HomePage,
  Home,
  About,
  Contact,
  NotFound,
  Login,
  MainLayout,
  Register,
  DashBoardLayout,
  Dashboard,
} from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
      <Route element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<DashBoardLayout />}>
        {/* Add dashboard routes here */}
        <Route index element={<Dashboard />} />
        {/* Example nested route */}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
