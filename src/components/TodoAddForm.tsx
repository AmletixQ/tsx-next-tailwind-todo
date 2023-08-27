"use client";
import { FC, FormEvent, useState } from "react";
import { ISetTodos } from "@/types/todos";
import { saveData } from "@/utils/DB";
import { Button, Input } from "@nextui-org/react";

const TodoAddForm: FC<ISetTodos> = ({ todos, setTodos }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name) {
      const newTodos = [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          title: name,
          completed: false,
        },
      ];
      setTodos(newTodos);
      saveData(newTodos);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-1"}>
      <Input
        variant="bordered"
        color="success"
        placeholder="Enter todo name"
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        type="submit"
        variant="bordered"
        color="success"
        className="w-max"
      >
        Create todo
      </Button>
    </form>
  );
};

export default TodoAddForm;
