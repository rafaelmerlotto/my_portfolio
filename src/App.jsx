import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import Home from "./pages/Home"
import "../src/assets/css/style.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
