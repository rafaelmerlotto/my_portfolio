import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home"
import "../src/assets/css/style.css"
import Project from "./pages/Project";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
