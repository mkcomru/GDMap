import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../components/context/AuthContext';
import styles from './Auth.module.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
        // Here you would implement the actual login logic
            await login(data);
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
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

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </form>

                <div className={styles.links}>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <Link to="/register">Don#39;t have an account? Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;