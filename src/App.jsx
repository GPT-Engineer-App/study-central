import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";
import Project4 from "./pages/Project4.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/project1" element={<Project1 />} />
        <Route exact path="/project2" element={<Project2 />} />
        <Route exact path="/project3" element={<Project3 />} />
        <Route exact path="/project4" element={<Project4 />} />
      </Routes>
    </Router>
  );
}

export default App;