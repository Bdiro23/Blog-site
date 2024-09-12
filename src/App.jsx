import Home from './Home';
import City from './components/City/city'; // Ensure this import is correct
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx"
import Login from "./components/Login/Login.jsx"
import Signup from "./components/Signup/Signup.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/:cityName" element={<City />} />
                 <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
    );
}

export default App;
