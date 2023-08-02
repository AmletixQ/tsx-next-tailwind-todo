"use client";
import TodoAddForm from "@/components/TodoAddForm";
import TodoList from "@/components/TodoList";
import Input from "@/components/UI/Input";

const Home = () => {
  return (
    <div className="w-2/4 mt-2 flex flex-col gap-2">
      <Input placeholder="Search..." />
      <hr />
      <TodoAddForm />
      <hr />
      <TodoList />
    </div>
  );
};

export default Home;
