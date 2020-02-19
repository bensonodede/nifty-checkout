import React from "react";
import { BrowserRouter } from "react-router-dom";

// Import route components
import { withFirebase } from "components/firebase";

// Import page route components
import CommonRoutes from "./commonRoutes";
import AdminRoutes from "./adminRoutes";

const Routes = () => (
  <BrowserRouter>
    <>
      <CommonRoutes />
      <AdminRoutes />
    </>
  </BrowserRouter>
);

export default withFirebase(Routes);
