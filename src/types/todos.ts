import { Dispatch, SetStateAction } from "react";

export interface ITodoItem {
  id: number;
  title: string;
  completed: string;
}

export interface ISetTodos {
  todos: ITodoItem[];
  setTodos: Dispatch<SetStateAction<ITodoItem[]>>;
}
