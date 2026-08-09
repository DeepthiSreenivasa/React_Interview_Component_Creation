import { useState, useEffect } from "react";
const Modal = ({ isOpen = false, onClose, children }) => {
  const closeModal = () => {
    //  onClose(false); Since parent decides this we can make it more generric by passing CB
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEnterKey = (event) => {
      if (event.key === "Enter") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEnterKey);

    return () => document.removeEventListener("keydown", handleEnterKey);
  }, [isOpen]);

  return isOpen ? (
    <div
      style={{
        position: "fixed",
        backgroundColor: "blue",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={closeModal}
    >
      <div
        style={{ backgroundColor: "green", width: "500px", height: "200px" }}
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={closeModal}>CLOSE</button>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
