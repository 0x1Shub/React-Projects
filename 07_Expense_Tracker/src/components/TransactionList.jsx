import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(ExpenseContext);

  if (!transactions) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Transaction List</h3>
      <ul>
        {transactions.map(({ id, description, amount }) => (
          <li key={id} className={amount > 0 ? "income" : "expense"}>
            {description} <span>{amount}</span>
            <button onClick={() => deleteTransaction(id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
