import React from "react";
import { BrowserRouter } from "react-router-dom";

// Import page route components
import CommonRoutes from "./commonRoutes";
import AdminRoutes from "./adminRoutes";

const Routes = ({ props }) => (
  <BrowserRouter>
    <>
      <CommonRoutes />
      <AdminRoutes />
    </>
  </BrowserRouter>
);

export default Routes;
