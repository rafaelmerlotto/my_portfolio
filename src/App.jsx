import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio";
import Cv from "./components/Cv";
import CvPT from "./components/CvPT";
import Curriculum from "./pages/Curriculum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<Curriculum />} />
        {/* <Route path="/cv" element={<Cv />} />
        <Route path="/cvpt" element={<CvPT />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
