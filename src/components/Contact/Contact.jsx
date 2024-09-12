import Navbar from "../Navbar/Navbar.jsx";
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Contact.css';
import Footer from "../Footer/Footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";
import i18n from "i18next";

export default function Contact() {
    const contactValidationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        message: Yup.string().required('Message is required'),
    });

    const contactFormik = useFormik({
        initialValues: { name: '', email: '', phone: '', message: '' },
        validationSchema: contactValidationSchema,
        onSubmit: (values) => {
            console.log('Contact Form Data:', values);
            alert('Your message has been sent successfully!');
            contactFormik.resetForm();
        },
    });

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const bgImage1 = '/contact.jpg';
    const titre = i18n.language === 'en' ? 'Stay Connected' : 'Restons Connectés';
    const paragraphe = i18n.language === 'en' ? 'If you have any questions or suggestions, please do not hesitate to contact us. We are here to help!':'Pour toute question ou suggestion, n\'hésitez pas à nous contacter. Nous sommes là pour vous aider !';

    return (
        <>
            <Navbar backgroundImage={bgImage1} title={titre} paragraph={paragraphe}/>
            <div className="contact-form-container" data-aos="fade-up">
                <h2 className="contact_title" data-aos="fade-down">{t('contact_us.title')}</h2>
                <form onSubmit={contactFormik.handleSubmit} className="contact-form" data-aos="fade-up">
                    <div className="field-wrap">
                        <label>{t('contact_us.form.name')}<span className="req">*</span></label>
                        <input
                            type="text"
                            name="name"
                            {...contactFormik.getFieldProps('name')}
                        />
                        {contactFormik.touched.name && contactFormik.errors.name ? (
                            <div className="error">{contactFormik.errors.name}</div>
                        ) : null}
                    </div>

                    <div className="field-wrap">
                        <label>{t('contact_us.form.email')}<span className="req">*</span></label>
                        <input
                            type="email"
                            name="email"
                            {...contactFormik.getFieldProps('email')}
                        />
                        {contactFormik.touched.email && contactFormik.errors.email ? (
                            <div className="error">{contactFormik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="field-wrap">
                        <label>{t('contact_us.form.phone')}<span className="req">*</span></label>
                        <input
                            type="text"
                            name="phone"
                            {...contactFormik.getFieldProps('phone')}
                        />
                        {contactFormik.touched.phone && contactFormik.errors.phone ? (
                            <div className="error">{contactFormik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className="field-wrap">
                        <label>{t('contact_us.form.message')}<span className="req">*</span></label>
                        <textarea
                            name="message"
                            rows="5"
                            {...contactFormik.getFieldProps('message')}
                        />
                        {contactFormik.touched.message && contactFormik.errors.message ? (
                            <div className="error">{contactFormik.errors.message}</div>
                        ) : null}
                    </div>

                    <button type="submit" className="button button-block" data-aos="zoom-in">{t('contact_us.form.envoie')}</button>
                </form>
            </div>
            <Footer />
        </>
);
}
