import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Index';
import Eror404 from './pages/error/404';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Eror404 />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
