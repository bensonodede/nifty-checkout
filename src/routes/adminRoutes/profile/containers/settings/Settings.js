import React from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import { SettingsHeader, SettingsList, SettingsFooter } from "./containers";

// Import styles
import "./styles.scss";

const Settings = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Profile · ${storeUsername}`} defer={false} />

      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={350}
      >
        <div className="route-wrapper">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              {/* Settings header */}
              <SettingsHeader />

              {/* Settings List */}
              <SettingsList />

              {/* Settings footer */}
              <SettingsFooter />
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Settings;
