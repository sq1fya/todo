import React, {useState} from 'react';

function List() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([])

  return (
    <React.Fragment>
      <header className="App-header">
        <span className="title">todo list 1.0</span>
        <input
          className="form-control"
          type="text"
          value={todo}
          palceholder="type here ... "
          onChange={e => setTodo(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => setTodoList([...todoList, todo])}
        >Add</button>
        <ul>
          {todoList.map(e => (
            <li>{e}</li>
          ))}
        </ul>
      </header>
    </React.Fragment>
  );
}


export default List;
