import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
  );
}

export default App;
