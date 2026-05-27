import { HashRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "../src/features/common/Navbar";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Catalogue } from "./pages/Catalogue";

function App() {


  return (
    <>
      <HashRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/catalogue" element={<Catalogue />}></Route>
        </Routes>

      
      </HashRouter>
    </>
  )
}

export default App;
