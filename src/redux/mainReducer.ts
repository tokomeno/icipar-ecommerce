import { combineReducers } from "redux";
import { todosReducer } from "./todos/todoReducer";
import { Todo } from "./todos/todoActions";
import { AuthState } from "./auth/authTypes";
import { authReducer } from "./auth/authReducer";

export interface IStoreState {
  todos: Todo[];
  auth: AuthState;
}

export const reducers = combineReducers<IStoreState>({
  todos: todosReducer,
  auth: authReducer
});
