"use client";
import { FormEvent, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import useTodos from "@/store/todos";

const TodoAddForm = () => {
  const [name, setName] = useState("");
  const createTodo = useTodos((state) => state.createTodo);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name) return;

    createTodo(name);
    setName("");
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
      <Button variant="bordered" color="success" className="w-max">
        Create todo
      </Button>
    </form>
  );
};

export default TodoAddForm;
