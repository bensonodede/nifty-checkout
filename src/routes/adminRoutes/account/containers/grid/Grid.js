import React from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import { GridHeader, GridList, GridFooter } from "./containers";

// Import styles
import "./styles.scss";

const Grid = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Account · ${storeUsername}`} defer={false} />

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
              <div className="column is-10">
                {/* Grid header */}
                <GridHeader />

                {/* Grid list */}
                <GridList />

                {/* Settings footer */}
                <GridFooter />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Grid;
