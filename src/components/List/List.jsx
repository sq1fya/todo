import React, {useState} from 'react';
import ListElement from "../ListElement/ListElement";

function List() {
  const [inputVal, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onButtonClick = (e) => {
    let newElement = {
      id: Date.now(),
      inputVal,
      status: "done"
    };
    e.preventDefault();
    setTodoList([...todoList, newElement]);
    console.log(inputVal)
  };

  return (
    <>
      <span className="title">todo list 1.0</span>
        <form onSubmit={onButtonClick} className="input-group">
          <input
            className="form-control"
            type="text"
            value={inputVal}
            palceholder="type here ... "
            onChange={e => setTodo(e.target.value)}
          />
            <button
              className="btn btn-outline-secondary"
            >Add</button>
        </form>
      <ul>
        {todoList.map(element => (
          <ListElement key={element.id} element = {element} status = {element.status} />
        ))}
      </ul>
    </>
  );
}


export default List;
