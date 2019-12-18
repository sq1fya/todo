import React, { useState } from 'react'

const InputComp = ({ SubmitForm }) => {
  const [inputVal, setInputVal] = useState('')
  const onInputChange = event => {
    setInputVal(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    SubmitForm(inputVal)
    setInputVal('')
  }

  return (
    <form onSubmit={handleSubmit} className="input-group">
      <input
        className="form-control"
        type="text"
        value={inputVal}
        placeholder="type here ... "
        onChange={onInputChange}
      />
      <button className="btn btn-outline-secondary">Add</button>
    </form>
  )
}

export default InputComp
