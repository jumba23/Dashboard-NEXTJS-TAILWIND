import React, { Children } from "react";

export const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="flex flex-col w-2/3">
        <button
          className="text-xl text-white place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
