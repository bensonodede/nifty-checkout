import React from "react";

// Import components
import Card from "components/card";

const EarningsCard = () => (
  <div className="column">
    <Card>
      <div className="dashboard__overview">
        <div className="content">
          <h1 className="title is-size-5">Earnings</h1>
          <p>No sales yet.</p>
        </div>
      </div>
    </Card>
  </div>
);

export default EarningsCard;
