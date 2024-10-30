import { createStore } from "redux";

// initialState of state is declared and initialized
const initialState = {
  count: 0,
};

//reducer function of the Couter
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
     return {count: state.count + 1}

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

// create store in redux
const store = createStore(counterReducer);

export default store;
