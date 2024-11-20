import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import FetchButton from "./components/FetchButton";
import QuoteDisplay from "./components/QuoteDisplay";
import { fetchQuote } from "./store/QuoteSlice";

function App() {
  const dispatch = useDispatch();
  const { quote, author, loading } = useSelector((state) => state.quote);

  return (
    <div className="app">
      <h1>Random Quote Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <QuoteDisplay quote={quote} author={author} />
      )}
      <FetchButton onClick={() => dispatch(fetchQuote())} />
    </div>
  );
}

export default App;
