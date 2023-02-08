import "./App.css";
import Header from "./Components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bottles from "./Components/Bottles";

import Wines from "./Components/Wines";
import Soft from "./Components/Soft";
import Beer from "./Components/Beer";
import Cocktails from "./Components/Cocktails";
import Gin from "./Components/Gin";
import Spirits from "./Components/Spirits";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/bottles" element={<Bottles />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/soft" element={<Soft />} />
          <Route path="/beer" element={<Beer />} />
          <Route path="/cocktails" element={<Cocktails />} />
          <Route path="/gin" element={<Gin />} />
          <Route path="/spirits" element={<Spirits />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
