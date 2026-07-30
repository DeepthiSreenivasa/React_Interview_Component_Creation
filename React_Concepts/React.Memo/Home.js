import { useState } from "react";
import React from "react";

const Home = React.memo(
  ({ count1, count2 }) => {
    console.log("Home Updated");

    return (
      <>
        <h1>This is Home1 - {count1}</h1>
        <h1>This is Home2 - {count2}</h1>
      </>
    );
  },
  (prev, next) => {
    return prev.count1 == next.count1;
  }
);

export default Home;
