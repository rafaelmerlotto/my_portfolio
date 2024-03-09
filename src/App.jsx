import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Cv from "./components/Cv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
