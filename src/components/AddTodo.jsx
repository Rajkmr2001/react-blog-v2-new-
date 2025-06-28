function AddTodo() {

    let todoName = "Todo Name";
    let tododate = "2023-10-01";
    return (
        <div class="container ">
        <div class="row Raj-row ">
          <div class="col-6 ">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success Raj-Button">Success</button>
          </div>
        </div>
      </div>
    );
}
export default AddTodo;