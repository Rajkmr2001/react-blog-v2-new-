
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItem from './components/FoodItem';
import ErrorMsg from './components/ErrorMsg';

function App() {
    // let foodItem = [];


    // learning props ka fanda 
  let foodItem = ["Dal", "bhatt", "raj", "Chicken", "Fruits", "Nuts", "Milk", "Yogurt"];
  
  
  
  return (
    <>
    
      <h1 className="heading-css">Healthy food</h1>
      <ErrorMsg itemss={foodItem}></ErrorMsg>
      {/* <ErrorMsg></ErrorMsg> */}
      {/* <ErrorMsg itemss={foodItem}></ErrorMsg> */}
      {/* passing foodItem as a prop to ErrorMsg component */}
      {/* ErrorMsg component will receive foodItem as a prop and can use it to display the error message */}
      <FoodItem itemss={foodItem}></FoodItem>
    </>
  )
}

export default App;
