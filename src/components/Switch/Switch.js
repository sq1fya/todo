import React from 'react'

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="toggleStatus"
        id={`switch-new`}
        type="checkbox"
      />
      <label style={{ background: isOn && '#06D6A0' }} className="switch-label">
        <span className={`switch-button`} />
      </label>
    </>
  )
}

export default Switch
