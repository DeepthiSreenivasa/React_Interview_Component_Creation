import "./styles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {" "}
      <div>
        <h1>Are you sure you want to quit?</h1>
      </div>
      <span>
        <button>YES</button>
        <button>NO</button>
      </span>
    </Modal>
  );
}

//Step 1 : Creating the Modal
//Step 2 : Making the modal open and close from parent
//Step 3 : Passing the children from parent to child
//Step 4: Making the modal center
//Step 5: Clicking inside the modal should not close the backdrop but Clicking
//on backdrop should close the modal
//Step 6 : Adding the ESC key handler add event listnere and remove it
//unlike setInterval and setTimeout these components will return undefined so you have to
//create in a seperate fucntion and then call them in event listeners
