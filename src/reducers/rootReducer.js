const initState = {
  post: [
    { id: '11', title: 'aaaaa', body: 'body of aaaaaa' },
    { id: '22', title: 'bbbbb', body: 'body of bbbbb' },
    { id: '33', title: 'ccccc', body: 'body of ccccc' },
  ],
  todo: [
    { id: '111', title: 'aaaaa', body: 'body of aaaaaa' },
    { id: '222', title: 'bbbbb', body: 'body of bbbbb' },
    { id: '333x', title: 'ccccc', body: 'body of ccccc' },
  ],
  todoList: [
    {
      id: 1,
      inputVal: 'onedsdsdsd',
      status: true,
    },
    {
      id: 2,
      inputVal: 'one',
      status: true,
    },
    {
      id: 3,
      inputVal: 'one',
      status: true,
    },
  ],
}

export const rootReducer = (state = initState, action) => {
  if (action.type === 'REMOVE_ELEMENT') {
    let newTodoList = state.todoList.filter(listElement => {
      return action.id !== listElement.id
    })
    return {
      ...state,
      todoList: newTodoList,
    }
  }
  if (action.type === 'ADD_ELEMENT') {
    return {
      ...state,
      todoList: [
        ...state.todoList,
        { id: Date.now(), inputVal: action.text, status: false },
      ],
    }
  }
  if (action.type === 'MARK_ELEMENT') {
    return {
      ...state,
      todoList: state.todoList.map(element => {
        if (element.id === action.id) {
          return {
            ...element,
            status: !element.status,
          }
        } else {
          return element
        }
      }),
    }
  }
  return state
}
