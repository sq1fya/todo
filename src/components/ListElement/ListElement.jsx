import React, { useState } from "react";
import Switch from "../Switch/Switch";

const ListElement = ({ element }) => {
  const [value, setValue] = useState(false);
  const switchToggle = () => {
    setValue(!value);
  };

  return (
    <li className={value ? "selected" : ""}>
      {element.inputVal}
      <Switch isOn={value} handleToggle={switchToggle} />
    </li>
  );
};

export default ListElement;

// style={{ background: value && "#06D6A0" }}
