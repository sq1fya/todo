import React, { useState } from "react";
import ListElement from "../ListElement/ListElement";

function List() {
  const [inputVal, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onButtonClick = event => {
    let newElement = {
      id: Date.now(),
      inputVal,
      status: "done"
    };
    event.preventDefault();
    setTodoList([...todoList, newElement]);
  };

  const onInputChange = event => {
    setTodo(event.target.value);
  };
  return (
    <>
      <span className="title">todo list 1.0</span>
      <form onSubmit={onButtonClick} className="input-group">
        <input
          className="form-control"
          type="text"
          value={inputVal}
          placeholder="type here ... "
          onChange={onInputChange}
        />
        <button className="btn btn-outline-secondary">Add</button>
      </form>
      <ul>
        {todoList.map(element => (
          <ListElement
            key={element.id}
            element={element}
            status={element.status}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
