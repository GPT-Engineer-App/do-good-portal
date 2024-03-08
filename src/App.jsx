import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import BusinessList from "./pages/BusinessList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/business-list" element={<BusinessList />} />
      </Routes>
    </Router>
  );
}

export default App;
