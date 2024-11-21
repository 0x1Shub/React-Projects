import React, { createContext, useReducer } from "react";

// Initial State
const initialState = {
  transactions: [],
};

// Reducer Function
const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

// Context
export const ExpenseContext = createContext(initialState);

// Provider component
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  return (
    <ExpenseContext.Provider
      value={{ ...state, addTransaction, deleteTransaction }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
