import { useFormik } from 'formik';
import * as Yup from 'yup';
//import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import './Signup.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {useTranslation} from "react-i18next";

export default function Signup() {
    const signupValidationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const signupFormik = useFormik({
        initialValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },
        validationSchema: signupValidationSchema,
        onSubmit: (values) => {
            console.log('Sign Up Form Data:', values);
            alert('Signup Successful!');
            signupFormik.resetForm();
        },
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { t } = useTranslation();

    return (
        <>
            <div className="for" data-aos="fade-up">
                <div className="formslog" data-aos="fade-up">
                    <h2 data-aos="fade-down" className='title_signup'>{t('signup.sign.title')}</h2>
                    <form onSubmit={signupFormik.handleSubmit}>
                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.Fname')}<span className="req">*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                {...signupFormik.getFieldProps('firstName')}
                            />
                            {signupFormik.touched.firstName && signupFormik.errors.firstName ? (
                                <div className="error">{signupFormik.errors.firstName}</div>
                            ) : null}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.Lname')}<span className="req">*</span></label>
                            <input
                                type="text"
                                name="lastName"
                                {...signupFormik.getFieldProps('lastName')}
                            />
                            {signupFormik.touched.lastName && signupFormik.errors.lastName ? (
                                <div className="error">{signupFormik.errors.lastName}</div>
                            ) : null}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.Email')}<span className="req">*</span></label>
                            <input
                                type="email"
                                name="email"
                                {...signupFormik.getFieldProps('email')}
                            />
                            {signupFormik.touched.email && signupFormik.errors.email ? (
                                <div className="error">{signupFormik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.pass')}<span className="req">*</span></label>
                            <input
                                type="password"
                                name="password"
                                {...signupFormik.getFieldProps('password')}
                            />
                            {signupFormik.touched.password && signupFormik.errors.password ? (
                                <div className="error">{signupFormik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className="field-wrap" data-aos="fade-up">
                            <label>{t('signup.sign.confpass')}<span className="req">*</span></label>
                            <input
                                type="password"
                                name="confirmPassword"
                                {...signupFormik.getFieldProps('confirmPassword')}
                            />
                            {signupFormik.touched.confirmPassword && signupFormik.errors.confirmPassword ? (
                                <div className="error">{signupFormik.errors.confirmPassword}</div>
                            ) : null}
                        </div>

                        <button type="submit" className="button button-block" data-aos="zoom-in">{t('signup.sign.start')}</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
