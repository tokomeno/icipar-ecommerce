import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./todoTypes";
const url = "https://jsonplaceholder.typicode.com/todos";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export const fetchTodos = (): Function => {
  return async (dispatch: Dispatch) => {
    console.log("sadfasdfa");
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};
