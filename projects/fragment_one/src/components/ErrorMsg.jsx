const ErrorMsg = ( {itemss}) => {

  return (
    <div>
      {itemss.length === 0 && <h3>No food items available</h3>}
      {/* Conditional rendering based on the length of itemss */}
      {/* If itemss is empty, it will show "No food items available" */}
      {/* If itemss has items, it will show "Food items are available" */}
    </div>
  );
};

export default ErrorMsg;