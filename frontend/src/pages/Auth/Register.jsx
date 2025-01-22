import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../components/context/AuthContext';
import styles from './Auth.module.css';
import axios from 'axios';
import {FaArrowLeft} from "react-icons/fa";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    // const onSubmit = async (data) => {
    //     setIsLoading(true);
    //     data.preventDefault();
    //     try {
    //         const response = await axios.post('http://127.0.0.1:8000/api/hello', {
    //             text: "trfgyhujiko"
    //         });
    //         // Here you would implement the actual registration logic
    //         // await login(data); // Auto-login after registration
    //         // navigate('/');
    //         console.log("все ок", response.data)
    //     } catch (error) {
    //         console.error('Registration failed:', error);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

    const sendHello = async () => {
        try {
            // Отправляем POST запрос
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                text: "Привет от React!"
            }).then((response) => {
                console.log("все ок", response.data)
            });
            
            // Выводим ответ в консоль
            console.log('Пришёл ответ:', response.data);
            
        } catch (error) {
            console.log('Ошибка:', error);
        }
    };


    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <h1>Register</h1>
                <Link to="/">
                    <button className={styles.backbtn} to="/">
                        <FaArrowLeft />
                    </button>
                </Link>
                <form onSubmit={handleSubmit(sendHello)}>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            {...register('fullName', { 
                                required: 'Full name is required',
                                minLength: {
                                    value: 2,
                                    message: 'Name must be at least 2 characters'
                                }
                            })}
                        />
                        {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            {...register('phone', { 
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^\+?[1-9]\d{1,14}$/,
                                    message: 'Invalid phone number'
                                }
                            })}
                        />
                        {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { 
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { 
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters'
                                }
                            })}
                        />
                        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                    </div>

                    <button onClick={() => handleSubmit(sendHello)}>
                        Register
                    </button>
                </form>

                <div className={styles.links}>
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;