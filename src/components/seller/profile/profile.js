import React from "react";
import { Link } from "react-router-dom";

// Import components
import { Menu } from "../menu";
import { withAuthorization } from "../../session";
import SignOut from "../../auth/SignOut";
import { Icon } from "react-icons-kit";
import { iosArrowRight } from "react-icons-kit/ionicons/iosArrowRight";

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

            <Link to={`/${storeName}/edit-profile`}>
              <div className="profile__row">
                <p className="profile__text">Edit profile</p>
                <div className="profile__icon">
                  <Icon
                    icon={iosArrowRight}
                    size={"100%"}
                    style={{ color: "#c2c2c2" }}
                  />
                </div>
              </div>
            </Link>

            {/* Profile list item */}
            <Link to={`/${storeName}/help`}>
              <div className="profile__row">
                <p className="profile__text">Help and support</p>
                <div className="profile__icon">
                  <Icon
                    icon={iosArrowRight}
                    size={"100%"}
                    style={{ color: "#c2c2c2" }}
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Profile sign out */}
          <SignOut>
            <button className="profile__sign-out">Log out</button>
          </SignOut>

          {/********** End Profile body **********/}
        </div>
      </div>
    </div>
  );
};

export default withAuthorization(Profile);
