import { create } from "zustand";

const useTodos = create()(set => ({
  todos: []
}))