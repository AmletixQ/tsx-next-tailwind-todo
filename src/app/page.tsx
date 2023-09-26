"use client";
import TodoAddForm from "@/components/TodoAddForm";
import TodoList from "@/components/TodoList";
import { Divider, Input } from "@nextui-org/react";

import { useMemo, useState } from "react";
import useTodos from "@/store/todos";

const Home = () => {
  const [search, setSearch] = useState("");
  const todos = useTodos((state) => state.todos);

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
      <Input
        variant="bordered"
        color="success"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Divider />
      <TodoAddForm />
      <Divider />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
};

export default Home;
