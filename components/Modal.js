import React from "react";

export const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[300px] flex flex-col">
        <button
          className="text-xl text-white place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="p-2 bg-white rounded">Modal</div>
      </div>
    </div>
  );
};
