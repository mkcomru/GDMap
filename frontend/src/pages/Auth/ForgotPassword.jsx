import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styles from './Auth.module.css';

const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Here you would implement the actual password reset logic
        console.log(data);
        setEmailSent(true);
        setIsLoading(false);
    };

    if (emailSent) {
        return (
            <div className={styles.authContainer}>
                <div className={styles.authCard}>
                    <h1>Check Your Email</h1>
                    <p>We've sent password reset instructions to your email address.</p>
                    <div className={styles.links}>
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <h1>Forgot Password</h1>
                <p>Enter your email address to reset your password.</p>
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

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Send Reset Link'}
                    </button>
                </form>

                <div className={styles.links}>
                    <Link to="/login">Back to Login</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;