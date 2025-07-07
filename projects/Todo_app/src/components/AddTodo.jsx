function AddTodo() {

    let todoName = "Todo Name";
    let tododate = "2023-10-01";
    return (
        <div className="container ">
        <div className="row Raj-row ">
          <div className="col-6 ">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" className="size" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success Raj-Button">Success</button>
          </div>
        </div>
      </div>
    );
}
export default AddTodo;