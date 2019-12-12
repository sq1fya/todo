import React from "react";
import Switch from "../Switch/Switch";
import DeleteButton from "../DeleteButton/DeleteButton";

const ListElement = ({
  id,
  text,
  status,
  switchToggle,
  deleteTargetedElement
}) => {
  const elementToggle = () => {
    switchToggle(id);
  };
  const targetElementId = () => {
    deleteTargetedElement(id);
  };

  const addChild = event => {
    event.preventDefault();
    console.log(id + " id elementu");
  };

  return (
    <li className={status ? "selected list" : "list"}>
      <button onClick={addChild}>{text}</button>
      <div className="button-block" id="childern-panel">
        <Switch isOn={status} handleToggle={elementToggle} />
        <DeleteButton targetElementById={targetElementId} />
      </div>
    </li>
  );
};

export default ListElement;
