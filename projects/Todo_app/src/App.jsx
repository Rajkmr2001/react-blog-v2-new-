import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";

function App() {
  const todoList = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023"
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023"
    },
    {
      name: "like this video",
      dueDate: "right now"
    },
    {
      name: "learning something new",
      dueDate: "just now"
    },
  ];
  return (

    <center className="container">
      {/* <h1>TODO app</h1> */}
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoList}></TodoItems>
    </center>
  );
}

export default App
