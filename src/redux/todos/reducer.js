import { ADD_TODO, TOGGLE_TODO } from './actionType';

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          task: action.task,
          completed: false,
          archived: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));

    default:
      return state;
  }
};

export default todosReducer;
