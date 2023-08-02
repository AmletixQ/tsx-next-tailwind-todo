import Button from "./UI/Button";
import Input from "./UI/Input";

const TodoAddForm = () => {
  return (
    <div>
      <Input placeholder="Enter todo name" />
      <Button>Create todo</Button>
    </div>
  );
};

export default TodoAddForm;
