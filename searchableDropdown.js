import React, { useState } from "react";
import "./styles.css";

export default function App({ options }) {
  const [selected, setSelected] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const availableOptions = [...options].filter((item) => { return item.label.toLowerCase().includes(inputValue.toLowerCase()) && !selected.includes(item) });

  const createChip = (value) => {
    setSelected([...selected, value]);
    setInputValue("");
  }

  const removeChip = (value) => {
    let updatedArr = selected.filter(item => item.value != value.value);
    setSelected(updatedArr)
  }

  return (
    <div className="dropdown-wrapper">

      {selected.map(item => <span key={item.value} onClick={() => removeChip(item)}>{item.label} </span>)}
      

      <input
        data-testid="search-input"
        placeholder="Search fruits..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {availableOptions.map((item) => <li key={item.value} onClick={() => {
          createChip(item)
        }} key={item.value} >{item.label}</li>
        )}
        {availableOptions.length == 0 && <li>No Options Available</li>}
      </ul>
    </div>
  );
}
