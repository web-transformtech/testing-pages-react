import logo from './logo.svg';
import './App.css';
import {  Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
