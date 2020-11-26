import React from "react";
import { compose } from "recompose";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import ProfileRoutes from "./containers";

// Import styles
import "./styles.scss";

const Profile = () => <ProfileRoutes />;

export default compose(withAuthorization, withSubscription)(Profile);
