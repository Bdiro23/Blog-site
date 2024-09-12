
import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from 'react-i18next';


export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>{t('footer.foot.about')}</h4>
                    <p>
                        {t('footer.foot.p')}
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: escape@cityexplorer.com</p>
                    <p>{t('footer.foot.phone')}: +212604078600</p>
                </div>
                <div className="footer-section">
                    <h4>{t('footer.foot.follow')}</h4>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><BsTwitterX /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>{t('footer.foot.droit')}</p>
            </div>
        </footer>
    );
}
