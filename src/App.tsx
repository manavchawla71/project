import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesNew from "./pages/ServicesNew";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/new" element={<ServicesNew />} />
      </Routes>
    </Router>
  );
}

export default App;
