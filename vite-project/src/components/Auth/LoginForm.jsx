import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import MyInput from '../common/MyInput/MyInput';
import MyButton from '../common/MyButton/MyButton';
import FormContainer from '../common/FormContainer/FormContainer';
import { handleFormChange } from '../../utils/forms';
import { validateEmail } from '../../utils/validation';
import styles from './LoginForm.module.css';

function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
            
        if (!validateEmail(loginData.email)) {
            newErrors.email = 'Некорректный email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Login data:', loginData);
        }
    };

    return (
        <FormContainer title="Вход" description="Введите ваш email и пароль для входа в систему">
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <MyInput
                        icon={Mail}
                        type="email"
                        name="email"
                        value={loginData.email}
                        onChange={handleFormChange(setLoginData)}
                        placeholder="Email"
                        required
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <MyInput
                    icon={Lock}
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleFormChange(setLoginData)}
                    placeholder="Пароль"
                    required
                />
                <div className={styles.forgotPassword}>
                    <Link to="/reset-password" className={styles.link}>
                        Забыли пароль?
                    </Link>
                </div>
                <MyButton type="submit">Войти</MyButton>
            </form>
        </FormContainer>
    );
}

export default LoginForm;