import React, { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const AddTransaction = () => {
  const { addTransaction } = useContext(ExpenseContext);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      description,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount (+ for income, - for expense)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
