import { ISetTodos } from "@/types/todos";
import { FC } from "react";

import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";

interface IProps extends ISetTodos {}
const TodoList: FC<IProps> = ({ todos, setTodos }) => {
  return todos.length ? (
    <div className={"flex flex-col gap-2 transition"}>
      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  ) : (
    <h2 className="self-center text-2xl font-bold">Don&apos;t found todo</h2>
  );
};

export default TodoList;
