import React from "react";
import { Helmet } from "react-helmet";

const Profile = ({ match: { storeName } }) => (
  <>
    {/* Page title */}
    <Helmet title={`Profile - ${storeName}`} defer={false} />

    {/* Profile page */}
    <div className="route-wrapper"></div>
  </>
);

export default Profile;
