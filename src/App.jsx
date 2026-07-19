import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header
        name="Dhyani Patel"
        role="Frontend Developer | React Learner"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;