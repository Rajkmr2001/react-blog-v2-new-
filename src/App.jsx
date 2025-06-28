import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";


function App() {
  return (

    <center class="container">
      {/* <h1>TODO app</h1> */}
      <AppName />
      <AddTodo></AddTodo>
      <div className="container-item">
      <TodoItem></TodoItem>
      <TodoItem2></TodoItem2>
     </div>
    </center>
  );
}

export default App