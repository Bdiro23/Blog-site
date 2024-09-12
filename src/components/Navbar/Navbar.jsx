import './Navbar.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { CgAirplane } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';


const getDefaultValues = (lang) => {
    if (lang === 'en') {
        return {
            title: 'Let\'s do it together',
            paragraph: 'We travel the world in search of stories. Come and take a walk with us.'
        };
    } else {
        return {
            title: 'Faisons-le ensemble',
            paragraph: 'Nous voyageons à travers le monde à la recherche d\'histoires. Venez faire une promenade avec nous.'
        };
    }

};

export default function Navbar({ backgroundImage, title, paragraph }) {
    const { i18n, t } = useTranslation();
    const lang = i18n.language;

    const { title: defaultTitle, paragraph: defaultParagraph } = getDefaultValues(lang);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const handleScroll = () => {
        window.scrollBy({ top: 500, behavior: 'smooth' });
    };

    const defBackImage = '/travel.jpg';

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='all' style={{ backgroundImage: `url(${backgroundImage || defBackImage})` }}>
            <div className='navbar'>
                <div className="language-switcher">
                    <button onClick={() => changeLanguage('en')} className="button1"></button>
                    <button onClick={() => changeLanguage('fr')} className="button2"></button>
                </div>

                {/* Brand and navigation */}
                <div className='navbar-brand'>
                    <CgAirplane className="icon"/>
                    <h1>Escape</h1>
                </div>
                <nav>
                    <Link to="/">{t('navbar.nav.home')}</Link>
                    <Link to="/about">{t('navbar.nav.about')}</Link>
                    <Link to="/contact">{t('navbar.nav.contact')}</Link>
                </nav>
                <div className='navbar-buttons'>
                    <Link to="/signup" className="nav-button">{t('navbar.nav.sign up')}</Link>
                    <Link to="/login" className="nav-button1">{t('navbar.nav.log in')}</Link>
                </div>
            </div>
            <section className="section" data-aos="fade-up" data-aos-delay="200">
                <h2>{title || defaultTitle}</h2>
                <p>{paragraph || defaultParagraph}</p>
                <button onClick={handleScroll} className="scroll-button">{t('navbar.nav.button')}</button>
            </section>
        </div>
    );
}

Navbar.propTypes = {
    backgroundImage: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string
};
