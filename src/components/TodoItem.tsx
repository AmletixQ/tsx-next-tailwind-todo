import { FC } from "react";

const TodoItem: FC<{ content: string }> = ({ content }) => {
  return <div>{content}</div>;
};

export default TodoItem;
