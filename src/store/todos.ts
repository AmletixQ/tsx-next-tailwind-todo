import { IStoreTodos } from "@/types/todos";
import { create } from "zustand";

const useTodos = create<IStoreTodos>()((set) => ({
  todos: [],
  createTodo: (title: string) => {},
  deleteTodo: (id: number) => {},
  updateTodo: (id: number) => {},
}));

export default useTodos;
