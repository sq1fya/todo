import React from "react";

const DeleteButton = ({ targetElementById }) => {
  return (
    <button
      className="btn btn-outline-danger btn-sm"
      onClick={targetElementById}
    >
      DEL
    </button>
  );
};

export default DeleteButton;
