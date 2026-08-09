import "./styles.css";
import Tabs from "./Tabs";
import { useState } from "react";

export default function App() {
  const data = [
    {
      id: 1,
      title: "Home",
      content: "Welcome to Home",
    },
    {
      id: 2,
      title: "Products",
      content: "Here are our products",
    },
    {
      id: 3,
      title: "Orders",
      content: "Here are your orders",
    },
  ];

  const [activeTabId, setActiveTabId] = useState(data[0]?.id ?? null);

  return (
    <Tabs tabsData={data} activeTabId={activeTabId} onChange={setActiveTabId} />
  );
}

//Step 1 : Build the Tabs Component
//            -by renderign the data on UI
//            -by identifying the state of the comp
//Step 2 : Get Data from PArent
//Step 3 : Identify Edge Cases
//Step 4 : Make it controlled Component
//Step 5: Note. you have to smartly use find
