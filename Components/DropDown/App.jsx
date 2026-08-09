import "./styles.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function App() {
  const data = [
    {
      id: 1,
      label: "India",
    },
    {
      id: 2,
      label: "USA",
    },
    {
      id: 3,
      label: "Germany",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(data[0]?.id ?? null);

  return (
    <Dropdown
      options={data}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
}

//Step1 : Render the comp with Data
//Step2 : IDentify the state
//Step 3 : IDentify Edge Cases
//Step 4 : bring props from parent
//Step 5: Make it controlled component
