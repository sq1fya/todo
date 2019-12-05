import React, {useState}from 'react'
import Switch from "../Switch/Switch";

const ListElement = ({element}) => {
  const [value, setValue] = useState(false);

  console.log(value);
  return (
    <li style={{ background: value && '#06D6A0' }}
    >{element.inputVal}
      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
    </li>
  )
}

export default ListElement
