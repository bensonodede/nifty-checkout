import React from "react";

// Import components
import Card from "components/card";

const FeatureCard = () => (
  <div className="column">
    <Card>
      <div className="dashboard__overview">
        <div className="content">
          <h1 className="title is-size-5">New feature</h1>
          <p>This feature is going to grow your sales by 10% !</p>
        </div>
        <button className="button is-primary is-outlined">Try now</button>
      </div>
    </Card>
  </div>
);

export default FeatureCard;
