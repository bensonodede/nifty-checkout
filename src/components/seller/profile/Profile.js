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
          {/* Help logo */}
          <div className="help__img-container">
            <img
              className="help__img"
              alt={"Finn logo"}
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
              }
            />
          </div>

          {/* Help title */}
          <h1 className="help__title">{storeName}</h1>

          {/********** Profile body **********/}
          <div className="profile__body">
            {/* Profile list item */}
            {/* <Link to={`/${storeName}/edit-profile`}>
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
            </Link> */}

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
