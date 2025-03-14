import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import SearchBar from "./components/SearchBar";
import JobList from "./components/JobList";

const App = () => {
  return (
    <JobProvider>
      <Router>
        <div className="container mx-auto p-4">
          <SearchBar />
          <Routes>
            <Route path="/" element={<JobList />} />
          </Routes>
        </div>
      </Router>
    </JobProvider>
  );
};

export default App;
