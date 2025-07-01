import Item from "./Item";
const FoodItem = ({itemss}) => {
    
    return (
    <>
      <ul className="list-group">
        {itemss.map((item) => (
         <Item key= {item} foodItem= {item}></Item>
        //  passing props to Item component
        //  key is used to uniquely identify each item in the list
        ))}
      </ul>
    </>
    );
};

export default FoodItem;