import "./App.css";
import AddTransaction from "./components/AddTransaction";
import BalanceDisplay from "./components/BalanceDisplay";
import TransactionList from "./components/TransactionList";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
  return (
    <ExpenseProvider>
      <div className="app">
        <h1>Expense Tracker</h1>
        <BalanceDisplay />
        <AddTransaction />
        <TransactionList />
      </div>
    </ExpenseProvider>
  );
}

export default App;
