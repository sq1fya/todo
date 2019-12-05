import React, {useState}from 'react'
import Switch from "../Switch/Switch";

const ListElement = ({element}, isOn) => {
  const [value, setValue] = useState(false);

  console.log(value)
  return (
    <li style={{isOn}}>{element.inputVal}
      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
    </li>
  )
}

export default ListElement
