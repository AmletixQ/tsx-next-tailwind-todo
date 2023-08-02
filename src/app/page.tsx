"use client";
import TodoAddForm from "@/components/TodoAddForm";
import TodoList from "@/components/TodoList";
import Input from "@/components/UI/Input";
import { ITodoItem } from "@/types/todos";
import { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    { id: 1, title: "NextJS", completed: true },
    { id: 2, title: "Tailwind CSS", completed: false },
  ]);
  return (
    <div className="w-2/4 mt-2 flex flex-col gap-2">
      <Input placeholder="Search..." />
      <hr />
      <TodoAddForm />
      <hr />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
