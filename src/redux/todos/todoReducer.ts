import { Todo } from "./todoActions";
import { ActionTypes, TodoActions } from "./todoTypes";

export const todosReducer = (state: Todo[] = [], action: TodoActions) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((t) => t.id !== action.payload);
    default:
      return [];
  }
};
