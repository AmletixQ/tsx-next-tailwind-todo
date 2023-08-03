import { ISetTodos } from "@/types/todos";
import { FC } from "react";
import TodoItem from "./TodoItem";

interface IProps extends ISetTodos {}
const TodoList: FC<IProps> = ({ todos, setTodos }) => {
  return todos.length ? (
    <div className={"flex flex-col gap-2 transition"}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  ) : (
    <h2>Don't found todo</h2>
  );
};

export default TodoList;
