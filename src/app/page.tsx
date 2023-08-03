"use client";
import TodoAddForm from "@/components/TodoAddForm";
import TodoList from "@/components/TodoList";
import Input from "@/components/UI/Input";
import { ITodoItem } from "@/types/todos";
import { getTodos } from "@/utils/DB";
import { useEffect, useMemo, useState } from "react";

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
    <div className="w-2/4 mt-2 flex flex-col gap-2">
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />
      <TodoAddForm todos={todos} setTodos={setTodos} />
      <hr />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
};

export default Home;
