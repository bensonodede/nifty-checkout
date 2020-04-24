import React from "react";
import { Helmet } from "react-helmet";

// Import components
import Button from "components/button";

const SubscriptionNew = ({ match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet
        title={`Activate subscription · ${storeUsername}`}
        defer={false}
      />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-8-tablet">
              {/* Emoji */}
              <span className="title is-size-3" aria-label="emoji" role="img">
                😅
              </span>

              {/* Title */}
              <h1 className="title is-size-3">One more thing...</h1>

              {/* Description */}
              <p className="is-size-6">
                Although our developers mostly run on coffee and lo-fi
                playlists, they need other things (like more coffee{" "}
                <span aria-label="emoji" role="img">
                  😂
                </span>
                ) to keep making awesome stuff for you. It costs just{" "}
                <span className="title is-size-6">
                  800 <span className="is-size-7">KES</span>
                </span>{" "}
                a month to make sure that happens.
              </p>

              {/* Footer button */}
              <Button
                onClick={() =>
                  history.push(`/${storeUsername}/admin/subscription/activate`)
                }
              >
                Activate subscription
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionNew;
