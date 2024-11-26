import './App.css';
import './output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home/Index';
import Footer from './components/Footer';
import Error404 from './pages/error/Error404';
import Detail from './pages/project/Detail';
import Project from './pages/project/Index';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:projectName" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
