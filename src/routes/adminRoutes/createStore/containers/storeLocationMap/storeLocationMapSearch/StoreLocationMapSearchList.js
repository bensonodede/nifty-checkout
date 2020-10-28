import React from "react";

// Import components
import StoreLocationMapSearchItem from "./StoreLocationMapSearchItem";
import { FadeAnimation } from "components/animations";

const StoreLocationMapSearchList = ({
  setSearchValue,
  searchSuggestions: { status: searchResultStatus, data: searchResultData },
  setIsSearchOpen,
  isSearchOpen,
}) => (
  <div className="delivery-search__list-wrapper">
    {/* Handle errors / Catch all */}
    <FadeAnimation
      show={
        searchResultStatus !== "ZERO_RESULTS" &&
        searchResultStatus !== "OK" &&
        searchResultStatus !== "" &&
        isSearchOpen
      }
    >
      <p className="has-text-centered">No internet connection</p>
    </FadeAnimation>

    {/* Handle zero results*/}
    <FadeAnimation show={searchResultStatus === "ZERO_RESULTS" && isSearchOpen}>
      <p className="has-text-centered">No search results</p>
    </FadeAnimation>

    {/* Handle successful query */}
    <FadeAnimation show={searchResultStatus === "OK" && isSearchOpen}>
      <div className={"delivery-search__list"}>
        {searchResultData.map((item) => (
          <StoreLocationMapSearchItem
            key={item.place_id}
            item={item}
            setSearchValue={setSearchValue}
            setIsSearchOpen={setIsSearchOpen}
          />
        ))}
      </div>
    </FadeAnimation>
  </div>
);

export default StoreLocationMapSearchList;
