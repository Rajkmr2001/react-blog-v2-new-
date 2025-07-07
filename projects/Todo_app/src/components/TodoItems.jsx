import TodoItem from "./TodoItem";

const TodoItems = ({todoItems}) => {
    return (

      <div className="container-item">
        {todoItems.map((item, index) => (
      <TodoItem key={index} todoDate={item.dueDate} todoName={item.name}></TodoItem>))}
     </div>
    );
};

export default TodoItems;