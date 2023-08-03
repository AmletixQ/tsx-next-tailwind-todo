import { ITodoItem } from "@/types/todos";

export const getTodos = (): ITodoItem[] => {
  const data = JSON.parse(localStorage.getItem("todos")!);
  return data;
};

export const saveData = (todos: ITodoItem[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
