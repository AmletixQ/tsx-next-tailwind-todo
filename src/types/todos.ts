import { Dispatch, SetStateAction } from "react";

export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface IStoreTodos {
  todos: ITodoItem[];
  createTodo: (value: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export interface ISetTodos {
  todos: ITodoItem[];
  setTodos: Dispatch<SetStateAction<ITodoItem[]>>;
}
