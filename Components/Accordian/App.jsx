import "./styles.css";
import Accordian from "./Accordian";
import { useState } from "react";

export default function App() {
  const data = [
    {
      id: 1,
      title: "What is React?",
      content: "React is a JavaScript library.",
    },
    {
      id: 2,
      title: "What are Hooks?",
      content: "Hooks allow functional components to use React features.",
    },
    {
      id: 3,
      title: "What is Redux?",
      content: "Redux is a state management library.",
    },
  ];

  const [openItemId, setOpenItemId] = useState(data[0]?.id ?? null);

  return (
    <Accordian
      accordionData={data}
      openItemId={openItemId}
      onChange={setOpenItemId}
    />
  );
}

//Step 1: State stores the ID of the currently open item
//Step 2 : Pass the accordian Data from the parent to the child
//Step 3: Add initial Open Id from parent
//Step 4: Make it controlled Component. Note while making it controlled compoenent
//the initial itemId goes away because the state is set from the parent
//Step 5 : make setters in child indepened of reatc setters
//Step 6 : pass the initial data considering the null conditon
