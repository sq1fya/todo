import React from 'react'
import ListElement from '../ListElement/ListElement'
import InputForm from '../InputComp/InputComp'
import { connect } from 'react-redux'

function List({ todoList, removeElement, addElement, markElement }) {

  const createNewElement = text => {
    addElement(text)
  }

  const handleClick = id => {
    removeElement(id)
  }

  const toggleStatus = id => {
    markElement(id)
  }

  return (
    <>
      <span className="title">todo list 2.0</span>
      <InputForm SubmitForm={createNewElement} />
      <ul>
        {todoList.map(element => (
          <ListElement
            key={element.id}
            id={element.id}
            text={element.inputVal}
            status={element.status}
            switchToggle={toggleStatus}
            deleteTargetedElement={handleClick}
          />
        ))}
      </ul>
    </>
  )
}

const mapStateToProps = ({ todoList }) => {
  return {
    todoList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addElement: text => dispatch({ type: 'ADD_ELEMENT', text: text }),
    removeElement: id => dispatch({ type: 'REMOVE_ELEMENT', id: id }),
    markElement: id => dispatch({ type: 'MARK_ELEMENT', id: id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
