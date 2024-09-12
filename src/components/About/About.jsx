import './About.css';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;

    const title = lang === 'en' ? 'Our mission and Our vision' : 'Notre Mission et Notre Vision';
    const paragraph = lang === 'en' ? 'We share our passion for travel and discovery through articles about cities around the world.' : 'Nous partageons notre passion pour les voyages et les découvertes à travers des articles sur les villes du monde entier.';

    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: "ease-out-cubic",
            once: true
        });
    }, []);

    return (
        <div className="about-container">

            <Navbar backgroundImage='/about.jpg' title={title} paragraph={paragraph} />
            <div className="about-content">
                <h1 className="sectitle" data-aos="zoom-y-out">{t('about_us.title')}</h1>
                <section className="about-section">
                    <div className="about-text" data-aos="fade-up" data-aos-delay="200">
                        <h2>{t('about_us.content.our_mission')}</h2>
                        <p>{t('about_us.content.our_mission_text')}</p>
                    </div>
                    <div className="about-image" data-aos="fade-left" data-aos-delay="300">
                        <img src="/about1.jpg" alt={t('about_us.city_view')} /> {/* Correct path */}
                    </div>
                </section>
                <section className="about-section reverse">
                    <div className="about-image" data-aos="fade-right" data-aos-delay="300">
                        <img src="/about2.jpg" alt={t('about_us.cultural_event')} /> {/* Correct path */}
                    </div>
                    <div className="about-text" data-aos="fade-up" data-aos-delay="200">
                        <h2>{t('about_us.content.our_vision')}</h2>
                        <p>{t('about_us.content.our_vision_text')}</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}
