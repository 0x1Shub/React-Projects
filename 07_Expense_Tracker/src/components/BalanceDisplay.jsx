import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const BalanceDisplay = () => {
  const { transactions } = useContext(ExpenseContext);

  if (!transactions) {
    return <div>Loading...</div>;
  }

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);
  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);
  const balance = income - expenses;

  return (
    <div>
      <h2>Balance: ${balance.toFixed(2)}</h2>
      <div>
        <p>Income: ${income.toFixed(2)}</p>
        <p>Expenses: ${expenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default BalanceDisplay;
