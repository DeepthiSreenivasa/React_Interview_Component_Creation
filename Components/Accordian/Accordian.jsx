import { useState } from "react";

const Accordian = () => {
  const data = [
    { title: "React", info: "JS Lib", isOpen: true },
    { title: "Angular", info: "JS Framework", isOpen: true },
    { title: "VanilaJS", info: "N/A", isOpen: true },
  ];

  const [panelData, setPanelData] = useState(data);

  const toggleInfoPanel = (index) => {
    setPanelData((prev) =>
      [...prev].map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const allClose = () => {
    setPanelData((prev) =>
      [...prev].map((item) => {
        return { ...item, isOpen: false };
      })
    );
  };

  const allOpen = () => {
    setPanelData((prev) => (prev = [...data]));
  };

  return (
    <>
      {panelData.map((item, index) => (
        <>
          <div className="title">
            {item.title}{" "}
            <button onClick={() => toggleInfoPanel(index)}> > </button>
          </div>
          {item.isOpen && <div className="info">{item.info}</div>}
        </>
      ))}
      <button onClick={() => allOpen()}>All Open</button>
      <button onClick={() => allClose()}>All Close</button>
    </>
  );
};
export default Accordian;
