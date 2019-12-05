import React from 'react'

const Switch = ({ handleToggle }) => {
  return (
    <>
      <input onChange={handleToggle} type="checkbox" />
      <label className="switch-label" />
    </>
  )
}

export default Switch
