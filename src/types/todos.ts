export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export interface IStoreTodos {
  todos: ITodoItem[];
  createTodo: (value: string) => void;
  updateTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}