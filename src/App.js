import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  deleteCustomerAction,
  fetchCustomersAction,
} from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";
import { AsyncAddCashAction, AsyncGetCashAction } from "./store/cashReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  console.log(cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "REQUEST_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      id: Date.now(),
      name: name,
    };
    dispatch(addCustomerAction(customer));
  };

  const deleteCustomer = (id) => {
    dispatch(deleteCustomerAction(id));
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{ marginTop: "5px" }}>
        <button onClick={() => addCash(Number(prompt()))}>Add money</button>
        <button onClick={() => dispatch(AsyncAddCashAction())}>
          Async Add money
        </button>
        <button onClick={() => getCash(Number(prompt()))}>Get money</button>
        <button onClick={() => dispatch(AsyncGetCashAction())}>
          Async Get money
        </button>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button onClick={() => addCustomer(prompt("Enter a customer name"))}>
          Add customer
        </button>
        <button onClick={() => dispatch(fetchCustomers())} disabled>
          Request customers from database
        </button>
        <button onClick={() => dispatch(fetchCustomersAction())}>
          Fetch customers from API
        </button>
      </div>
      {customers.length > 0 ? (
        <div style={{ width: "25%", margin: "0 auto" }}>
          <ul>
            {customers.map((customer) => (
              <li onClick={() => deleteCustomer(customer.id)}>
                {customer.name}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>No Clients!</h2>
      )}
    </div>
  );
}

export default App;
