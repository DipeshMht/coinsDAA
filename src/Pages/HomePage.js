import React from "react";
import Display from "../components/Display/DisplayCoin";
import CoinsTable from "../components/CoinsTable";
import News from "../components/News"


const Homepage = () => {
  return (
    <>
      <News />
      <Display />
      <CoinsTable />
    </>
  );
};

export default Homepage;
