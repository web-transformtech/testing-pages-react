import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
             <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />

                    </Routes>
                    </BrowserRouter>
    </div>
  );
}

export default App;
