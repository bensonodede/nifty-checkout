import React, { useEffect } from "react";
import { forceCheck } from "react-lazyload";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import Button from "components/button";
import { ImgLoader } from "components/loader";

// Import styles
import "./styles.scss";

const Error404 = ({ history }) => {
  // Load images on mount
  useEffect(() => {
    setTimeout(() => {
      forceCheck();
    }, 1000);
  }, []);

  return (
    <>
      {/* Page title */}
      <Helmet title={`Page not found · 404`} defer={false} />

      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={300}
      >
        {/* Page content */}
        <div className="error-404">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered is-variable is-8-desktop">
              <div className="column is-10-mobile is-8-tablet is-4-desktop is-vcentered">
                <div className="error-404__text-container">
                  {/* Title */}
                  <h1 className="title is-size-3 is-marginless">
                    You seem kinda lost...
                  </h1>

                  {/* Description */}
                  <p>Sorry, we couldn't find the page you were looking for.</p>

                  {/* Button */}
                  <Button
                    type={"button"}
                    className="error-404__btn"
                    onClick={() => history.push("/")}
                  >
                    Take me home
                  </Button>
                </div>
              </div>

              {/* Error image */}
              <div className="column is-10-mobile is-8-tablet is-4-desktop">
                <div className={"error-404__img-container"}>
                  <ImgLoader
                    className={"error-404__img"}
                    alt={"lost-gif"}
                    src={
                      "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1603828334/web_assets/lost-gif.webp"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Error404;
