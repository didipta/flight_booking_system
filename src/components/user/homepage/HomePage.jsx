import React from "react";
import SearchSection from "./SearchSection";
import OverviewSection from "./OverviewSection";

const HomePage = () => {
  return (
    <div className=" space-y-20">
      <SearchSection />
      <OverviewSection />
      <div></div>
    </div>
  );
};

export default HomePage;
