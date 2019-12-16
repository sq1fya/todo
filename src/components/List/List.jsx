import React, { useState } from "react";
import ListElement from "../ListElement/ListElement";
import InputForm from "../InputComp/InputComp";

function List() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      inputVal: "one",
      status: true
    },
    {
      id: 2,
      inputVal: "one",
      status: true
    },
    {
      id: 3,
      inputVal: "one",
      status: true
    }
  ]);

  const createNewElement = text => {
    const newElement = {
      id: Date.now(),
      inputVal: text,
      status: false
    };
    setTodoList([...todoList, newElement]);
  };

  const toggleStatus = id => {
    console.log(id);
    const todoListNew = todoList.map(element => {
      if (element.id === id) {
        return { ...element, status: !element.status };
      } else {
        return element;
      }
    });
    setTodoList(todoListNew);
  };

  const deleteElement = id => {
    const newTodoList = todoList.filter(element => id !== element.id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <span className="title">todo list 1.0</span>
      <InputForm SubmitForm={createNewElement} />
      <ul>
        {todoList.map(element => (
          <ListElement
            key={element.id}
            id={element.id}
            text={element.inputVal}
            status={element.status}
            switchToggle={toggleStatus}
            deleteTargetedElement={deleteElement}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
