import React from 'react'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        // className="toggleStatus"
        // id={`switch-new`}
        type="checkbox"
      />
      <label className="switch-label" />
    </>
  )
}

export default Switch
