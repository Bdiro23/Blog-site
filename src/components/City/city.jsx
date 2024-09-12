import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import villesEn from '../../Vil.js';
import villesFr from '../../Vilfr.js';
import './city.css';

export default function City() {
    const { cityName } = useParams();
    const { t, i18n } = useTranslation();


    const currentLanguage = i18n.language;
    const villes = currentLanguage === 'fr' ? villesFr : villesEn;


    const cityData = villes.find(ville => ville.ville === cityName);

    return (
        <div>
            <Navbar />
            {cityData ? (
                <div className="city-container">
                    <h1 className='title'>{cityData.titre}</h1>
                    <p className='description'>{cityData.description1}</p>
                    <img className='imgp' src={cityData.img.img1} alt={`${cityName} image 1`} />
                    <p className='description'>{cityData.description2}</p>
                    <img className='imgp' src={cityData.img.img2} alt={`${cityName} image 2`} />
                </div>
            ) : (
                <p>{t('cityNotFound')}</p>
            )}
            <Footer />
        </div>
    );
}
