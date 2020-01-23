import React from "react";
import { connect } from "react-redux";
import { Todo, deleteTodo, fetchTodos } from "../redux/todos/todoActions";
import { StoreState } from "../redux/mainReducer";

interface AppProps {
  todos: Todo[];
  deleteTodo: typeof deleteTodo;
  fetchTodos: typeof fetchTodos;
}

const _Todo: React.FC<AppProps> = ({ todos, fetchTodos, deleteTodo }) => {
  return (
    <div>
      <button onClick={fetchTodos}>f</button>
      {todos.map((todo: Todo) => (
        <div
          key={todo.id}
          onClick={() => {
            console.log(todo.id);
            deleteTodo(todo.id);
          }}
        >
          {todo.title}
        </div>
      ))}
    </div>
  );
};

// export const App = connect({todos}, {})(_Todo);

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const TodoApp = connect(mapStateToProps, { fetchTodos, deleteTodo })(
  _Todo
);
