import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Index';
import Navbar from './components/Navbar';
import Project from './components/project/Index';
import About from './components/about/Index';
import Contact from './components/contact/Index';
import Eror404 from './components/error/404';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Eror404 />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
