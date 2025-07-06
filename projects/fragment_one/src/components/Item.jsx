import style from  "./Item.module.css";
// Importing CSS module for styling the Item component. it is costum css {css module example}
// This allows us to use scoped styles for the component, avoiding global CSS conflicts
// The styles defined in Item.module.css will be applied to the elements in this component
// style ke place per kuc v likh sakete ha ex css or etc 

const Item = ({foodItem}) => {
    return (
         <li className={`${style["css-item"]}`} >
            <span className={`${style["list-gp"]}`}>
            {foodItem}
            </span>

            </li>
         //  props.foodItem is used to access the foodItem prop passed from the parent component
         //  props is an object that contains all the props passed to the component
        
    );
};

export default Item;