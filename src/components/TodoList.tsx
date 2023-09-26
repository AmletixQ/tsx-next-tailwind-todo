import TodoItem from "./TodoItem";
import { AnimatePresence } from "framer-motion";
import { ITodoItem } from "@/types/todos";
import { FC } from "react";

const TodoList: FC<{ filteredTodos: ITodoItem[] }> = ({ filteredTodos }) => {
  return filteredTodos.length ? (
    <div className={"flex flex-col gap-2 transition"}>
      <AnimatePresence>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))}
      </AnimatePresence>
    </div>
  ) : (
    <h2 className="self-center text-2xl font-bold">Don&apos;t found todo</h2>
  );
};

export default TodoList;
