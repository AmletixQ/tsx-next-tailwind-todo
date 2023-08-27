"use client";
import TodoAddForm from "@/components/TodoAddForm";
import TodoList from "@/components/TodoList";
import { ITodoItem } from "@/types/todos";
import { Divider, Input } from "@nextui-org/react";

import { getTodos } from "@/utils/DB";
import { useEffect, useMemo, useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Home = () => {
  const data = getTodos();
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState<ITodoItem[]>([] as ITodoItem[]);

  useEffect(() => {
    if (data) setTodos(data);
  }, []);

  const filteredTodos = useMemo(() => {
    if (search) {
      return todos.filter((todo) => {
        return todo.title.toLowerCase().includes(search.toLowerCase());
      });
    }

    return todos;
  }, [todos, search]);

  return (
    <div className="mt-2 flex flex-col gap-2 px-4">
      <div className="flex items-center gap-4">
        <Input
          variant="bordered"
          color="success"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ThemeSwitcher />
      </div>
      <Divider />
      <TodoAddForm todos={todos} setTodos={setTodos} />
      <Divider />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
