import React from 'react'

const DeleteButton = ({ elementID }) => {
  return (
    <button
      className="btn btn-outline-danger btn-sm"
      onClick={elementID}
    >
      DEL
    </button>
  )
}

export default DeleteButton
