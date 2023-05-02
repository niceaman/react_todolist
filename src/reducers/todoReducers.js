// ta tae

const FETCH_TODO = "FETCH_TODO"; //outlaw

export const INIT_TODO = {
  todos: [],
  todosFilter: [],
};
function todoReducer(state, action) {
  switch (action.type) {
    case FETCH_TODO:
      return {
        todos: action.payload.todos,
        todosFilter: action.payload.todos,
      };

    default:
      return state;
  }
}

export default todoReducer;
