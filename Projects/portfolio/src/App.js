import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styles from './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./components/Navigation";

function App() {
  return (
    // <Routes>

    //   <Route path="/" element={<Home />}></Route>
    //   <Route path="/about" element={<About />}></Route>
    //   <Route path="/contact" element={<Contact />}></Route>

    // </Routes>
    <>
      <Navigation />
    </>
  );
}

export default App;
