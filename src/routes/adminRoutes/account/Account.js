import React from "react";
import { compose } from "recompose";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import AccountRoutes from "./AccountRoutes";

// Import styles
import "./styles.scss";

const Account = () => <AccountRoutes />;

export default compose(withAuthorization, withSubscription)(Account);
