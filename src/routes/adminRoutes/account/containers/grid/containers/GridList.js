import React from "react";

// Import components
import GridItem from "./GridItem";

// Import grid items
const data = require("./gridItems.json");

const GridList = () => (
  <div className="grid-list">
    {data.map((item) => (
      <GridItem key={item.id} item={item} />
    ))}
  </div>
);

export default GridList;
