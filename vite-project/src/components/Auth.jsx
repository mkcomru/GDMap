import React, { useState } from 'react';
import styles from './Auth.module.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            // Здесь будет логика авторизации
            console.log('Выполняется вход:', formData);
        } else {
            // Здесь будет логика регистрации
            console.log('Выполняется регистрация:', formData);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authBox}>
                <h2>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            name="username"
                            placeholder="Имя пользователя"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit">
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>
                
                <div className={styles.socialAuth}>
                    <p className={styles.socialText}>Или войдите через:</p>
                    <div className={styles.socialButtons}>
                        <button className={styles.socialButton} onClick={() => console.log('Google auth')}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="Google" 
                                className={styles.socialIcon}
                            />
                            Google
                        </button>
                        <button className={styles.socialButton} onClick={() => console.log('VK auth')}>
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" 
                                alt="VK" 
                                className={styles.socialIcon}
                            />
                            VKontakte
                        </button>
                    </div>
                </div>

                <p onClick={() => setIsLogin(!isLogin)} className={styles.switchMode}>
                    {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
                </p>
            </div>
        </div>
    );
};

export default Auth; 