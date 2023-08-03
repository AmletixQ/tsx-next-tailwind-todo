"use client";
import { FC, FormEvent, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { ISetTodos } from "@/types/todos";
import { saveData } from "@/utils/DB";

const TodoAddForm: FC<ISetTodos> = ({ todos, setTodos }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <form onSubmit={handleSubmit} className={"flex flex-col gap-1"}>
      <Input
        placeholder="Enter todo name"
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button>Create todo</Button>
    </form>
  );
};

export default TodoAddForm;
