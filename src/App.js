import { BrowserRouter , Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
    <Routes>
 <Route path="/" element={ <Home />}/>
 <Route path="/portfolio" element={ <Portfolio />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
