import { motion } from "framer-motion";
import { FC, MouseEvent } from "react";
import { Button, Card } from "@nextui-org/react";

import { ITodoItem } from "@/types/todos";
import useTodos from "@/store/todos";

interface IProps extends ITodoItem {}
const TodoItem: FC<IProps> = ({ id, title, completed }) => {
  const { updateTodo, deleteTodo } = useTodos();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTodo(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 0.5 }}
      onClick={() => updateTodo(id)}
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
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default TodoItem;
