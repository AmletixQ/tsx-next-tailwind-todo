import { IStoreTodos } from "@/types/todos";
import { nanoid } from "nanoid";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodos = create<IStoreTodos>()(
  persist(
    (set) => ({
      todos: [],
      createTodo: (title: string) =>
        set((state) => ({
          todos: [...state.todos, { id: nanoid(), title, completed: false }],
        })),

      deleteTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      updateTodo: (id: string) =>
        set((state) => ({
          todos: state.todos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          }),
        })),
    }),
    { name: "todolists", skipHydration: true },
  ),
);

export default useTodos;
