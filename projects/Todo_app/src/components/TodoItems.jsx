import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
    return (

      <div className="container-item">
        {todoItems.map((item) => (
      <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>))}
     </div>
    );
};

export default TodoItems;