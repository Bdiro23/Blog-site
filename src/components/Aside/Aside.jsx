import './Aside.css';
import { useEffect, useState } from "react";
import villes from "../../Vil.js";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const cityBackgrounds = {
    Paris: '/public/p.jpg',
    LosAngeles: '/public/la.jpg',
    Rabat: '/public/Rb.jpg',
    Tokyo: '/public/tokyo.jpg',
    Rio: '/public/rio2.jpg',
    Bali: '/public/bali.jpg',
};

export default function Aside() {
    const [ville, setVilles] = useState([]);

    useEffect(() => {
        setVilles(villes);
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="Aside">
            <h2 className='sectitle'>Posts</h2>
            <div className='Posts' data-aos="fade-up" data-aos-delay="200">
                {ville.map((v) => {
                    const backgroundImage = cityBackgrounds[v.ville] || '/public/default.jpg';
                    return (
                        <Link
                            to={`/${v.ville}`}
                            className="city-link"
                            key={v.ville}
                            style={{ backgroundImage: `url(${backgroundImage})` }}
                            data-aos="fade-up"
                        >
                            <div className="city-post">
                                {v.ville}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
