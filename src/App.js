import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Nodejs from "./components/components-portfolio/nodejs/Nodejs";
import Reactjs from "./components/components-portfolio/react/Reactjs";
import Javascriptjs from "./components/components-portfolio/javascriptjs/Javascriptjs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/nodejs' element={<Nodejs />} />
        <Route path='/react' element={<Reactjs />} />
        <Route path='/javascript' element={<Javascriptjs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
