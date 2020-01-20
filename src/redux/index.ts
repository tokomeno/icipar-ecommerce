import { combineReducers } from "redux";
import { todosReducer } from "./todos/todoReducer";
import { Todo } from "./todos/todoActions";
import { AuthState } from "./auth/authTypes";
import { authReducer } from "./auth/authReducer";

export interface StoreState {
  todos: Todo[];
  auth: AuthState;
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  auth: authReducer
});
