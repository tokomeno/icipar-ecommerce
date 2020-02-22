import { combineReducers } from "redux";
import { todosReducer } from "./todos/todoReducer";
import { Todo } from "./todos/todoActions";
import { AuthState } from "./auth/authTypes";
import { authReducer } from "./auth/authReducer";
import { ICartState } from "./cart/cartTypes";
import { cartReducer } from "./cart/cartReducer";
import { IInfoState } from "./info/infoTypes";
import { infoReducer } from "./info/infoReducer";

export interface IStoreState {
  todos: Todo[];
  auth: AuthState;
  cart: ICartState;
  info: IInfoState;
}

export const reducers = combineReducers<IStoreState>({
  todos: todosReducer,
  auth: authReducer,
  cart: cartReducer,
  info: infoReducer
});
