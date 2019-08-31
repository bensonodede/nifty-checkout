import React from "react";

// Import components
import { Menu } from "../menu";
import { withAuthorization } from "../../session";
import SignOut from "../../auth/SignOut";
import { Icon } from "react-icons-kit";
import { iosComposeOutline } from "react-icons-kit/ionicons/iosComposeOutline";
import { iosHelpOutline } from "react-icons-kit/ionicons/iosHelpOutline";
import { iosCloseOutline } from "react-icons-kit/ionicons/iosCloseOutline";

// Import styles
import "./styles.css";

const Profile = props => {
  let { storeName } = props.match.params;

  return (
    <div>
      {/* Seller menu */}
      <Menu />

      {/* Profile page */}
      <div className="App-container">
        <div className="profile">
          {/* Profile header */}
          <div className="profile__header">
            {/* Profile Image */}

            <img
              src={
                "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
              }
              alt={"profile logo"}
              className={"profile__img"}
            />

            {/* Profile the title */}
            <h1 className="profile__title">{storeName}</h1>
          </div>

          {/********** Profile body **********/}
          <div className="profile__body">
            {/* Profile list item */}
            <div className="profile__row">
              <div className="profile__icon">
                <Icon
                  icon={iosComposeOutline}
                  size={"100%"}
                  style={{ color: "#484848" }}
                />
              </div>
              <p className="profile__text">Edit profile</p>
            </div>

            {/* Profile list item */}
            <div className="profile__row">
              <div className="profile__icon">
                <Icon
                  icon={iosHelpOutline}
                  size={"100%"}
                  style={{ color: "#484848" }}
                />
              </div>
              <p className="profile__text">Help and support</p>
            </div>

            {/* Profile sign out */}
            <SignOut>
              <div className="profile__row">
                <div className="profile__icon">
                  <Icon
                    icon={iosCloseOutline}
                    size={"100%"}
                    style={{ color: "#f36b7f" }}
                  />
                </div>
                <p className="profile__text profile__text--warn">Log out</p>
              </div>
            </SignOut>
          </div>

          {/********** End Profile body **********/}
        </div>
      </div>
    </div>
  );
};

export default withAuthorization(Profile);
