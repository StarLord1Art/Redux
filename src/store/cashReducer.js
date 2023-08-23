const defaultState = {
  cash: 0,
};

const ADD_CASH = "ADD_CASH";
export const ASYNC_ADD_CASH = "ASYNC_ADD_CASH";
const REQUEST_CASH = "REQUEST_CASH";
export const ASYNC_REQUEST_CASH = "ASYNC_REQUEST_CASH";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "REQUEST_CASH":
      return { ...state, cash: state.cash - action.payload };
    default:
      return state;
  }
};

export const addCashAction = (payload) => ({
  type: ADD_CASH,
  payload: payload,
});
export const AsyncAddCashAction = () => ({
  type: ASYNC_ADD_CASH,
});
export const getCashAction = (payload) => ({
  type: REQUEST_CASH,
  payload: payload,
});
export const AsyncGetCashAction = () => ({
  type: ASYNC_REQUEST_CASH,
});
