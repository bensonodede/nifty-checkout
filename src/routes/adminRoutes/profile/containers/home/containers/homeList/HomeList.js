import React from "react";

// Import components
import HomeItem from "../homeItem";

// Import data
const data = require("./homeList.json");

const HomeList = () => (
  <div className="column is-10">
    <div className="home-list">
      {data.map(item => (
        <HomeItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default HomeList;
