import './App.css';
import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Index';
import Error404 from './pages/error/Error404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
