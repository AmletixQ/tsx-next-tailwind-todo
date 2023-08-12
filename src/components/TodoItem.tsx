import { ISetTodos, ITodoItem } from "@/types/todos";
import { motion } from "framer-motion";
import { saveData } from "@/utils/DB";
import { FC, MouseEvent } from "react";
import { Button, Card } from "@nextui-org/react";

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

  const deleteTodo = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveData(newTodos);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
    >
      <Card
        className={`px-2 py-1 flex flex-row justify-between items-center transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:font-bold cursor-pointer select-none`}
      >
        <h2
          className={`${
            completed ? "text-lime-800" : ""
          } transition-all duration-200`}
        >
          {title}
        </h2>
        <div className="flex gap-1 items-center">
          {completed && <h2 className={"text-lime-800"}>Completed</h2>}
          <Button
            size="sm"
            variant="bordered"
            color="success"
            onClick={deleteTodo}
          >
            Delete
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default TodoItem;
