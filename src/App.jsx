import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="app-shell">
      <Header name="Dhyani Patel" role="Frontend Developer · React learner" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
