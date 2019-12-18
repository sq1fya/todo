const { createStore } = Redux

//initial state
const initialState = {
  todos: [],
  posts: [],
}
// state is state of the store
// if there are no state reducer take as default
function myreducer(state = initialState, action) {
  if (action.type == 'ADD_TODO') {
    return {
      // New array with copy of state / and update the new arr with action
      ...state, // this spread operator make that all objects are put in this new state,
      todos: [...state.todos, action.todo],
    }
  }
  if (action.type == 'ADD_POST') {
    return {
      ...state,
      posts: [...state.posts, action.post],
    }
  }
}

store.dispatch({ type: 'ADD_TODO', todo: 'one' })
store.dispatch({ type: 'ADD_TODO', todo: 'two' })
store.dispatch({ type: 'ADD_POST', post: 'add egg' })
