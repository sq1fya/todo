import React from 'react'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        className="switch"
        checked={isOn}
        onChange={handleToggle}
        type="checkbox"
      />
      <label className="switch-label" />
    </>
  )
}

export default Switch
