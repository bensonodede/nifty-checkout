import React from "react";

// Import components
import { withAuthorization } from "components/session";
import ProfileRoutes from "./containers";

const Profile = () => <ProfileRoutes />;

export default withAuthorization(Profile);
