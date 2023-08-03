import { ISetTodos, ITodoItem } from "@/types/todos";
import { saveData } from "@/utils/DB";
import { Http2ServerRequest } from "http2";
import { FC } from "react";

interface IProps extends ITodoItem, ISetTodos {}
const TodoItem: FC<IProps> = ({ todos, setTodos, id, title, completed }) => {
  const handleClick = () => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
    saveData(newTodos);
  };

  return (
    <div
      className={`border border-primary px-2 py-1 flex justify-between ${
        completed ? "border-lime-800" : ""
      } transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:font-bold cursor-pointer select-none`}
      onClick={handleClick}
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
