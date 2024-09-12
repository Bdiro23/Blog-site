import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Login.css';
//import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {useTranslation} from "react-i18next";

export default function Login() {
    const loginValidationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const loginFormik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginValidationSchema,
        onSubmit: (values) => {
            console.log('Log In Form Data:', values);
            alert('Login Successful!');
            loginFormik.resetForm();
        },
    });

    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="formsl" data-aos="fade-up">
                <div className="log" data-aos="fade-up">
                    <h2 data-aos="fade-down" className="title_login">{t('login.log.login')}</h2>
                    <form onSubmit={loginFormik.handleSubmit}>
                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('login.log.adress')}<span className="req">*</span></label>
                            <input
                                type="email"
                                name="email"
                                {...loginFormik.getFieldProps('email')}
                            />
                            {loginFormik.touched.email && loginFormik.errors.email ? (
                                <div className="error">{loginFormik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('login.log.pass')}<span className="req">*</span></label>
                            <input
                                type="password"
                                name="password"
                                {...loginFormik.getFieldProps('password')}
                            />
                            {loginFormik.touched.password && loginFormik.errors.password ? (
                                <div className="error">{loginFormik.errors.password}</div>
                            ) : null}
                        </div>

                        <p className="forgot" data-aos="fade-up"><a href="#">Forgot Password?</a></p>
                        <button type="submit" className="button button-block" data-aos="zoom-in">{t('login.log.identify')}</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}
