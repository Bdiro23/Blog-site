import Aside from './components/Aside/Aside.jsx';
import Footer from './components/Footer/Footer.jsx'
import Navbar from "./components/Navbar/Navbar.jsx";
//import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Navbar/>
            <Aside />
            <Footer/>
        </>
    );
}
