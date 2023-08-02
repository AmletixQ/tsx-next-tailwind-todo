import { ISetTodos, ITodoItem } from "@/types/todos";
import { Http2ServerRequest } from "http2";
import { FC } from "react";

interface IProps extends ITodoItem, ISetTodos {}
const TodoItem: FC<IProps> = ({ todos, setTodos, id, title, completed }) => {
  return (
    <div
      className={`border border-primary px-2 py-1 flex justify-between ${
        completed ? "border-lime-800" : ""
      } transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:font-bold cursor-pointer select-none`}
    >
      <h2
        className={`${
          completed ? "text-lime-800" : ""
        } transition-all duration-200`}
      >
        {title}
      </h2>
      {completed && <h2 className={"text-lime-800"}>Completed</h2>}
    </div>
  );
};

export default TodoItem;
