import { FetchTodosAction, DeleteTodoAction } from "./todoActions";
export enum ActionTypes {
  fetchTodos = "fetchTodos",
  deleteTodo = "deleteTodo"
}

export type TodoActions = FetchTodosAction | DeleteTodoAction;
