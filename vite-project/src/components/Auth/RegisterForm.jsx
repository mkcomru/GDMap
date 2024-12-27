import { useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import MyInput from '../common/MyInput/MyInput';
import MyButton from '../common/MyButton/MyButton';
import FormContainer from '../common/FormContainer/FormContainer';
import { handleFormChange } from '../../utils/forms';
import { validateEmail, validatePhone, validatePassword } from '../../utils/validation';
import styles from './RegisterForm.module.css';

function RegisterForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Некорректный email';
        }
        
        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Некорректный номер телефона';
        }
        
        if (!validatePassword(formData.password)) {
            newErrors.password = 'Пароль должен содержать минимум 8 символов';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Registration data:', formData);
        }
    };

    return (
        <FormContainer title="Регистрация">
            <form onSubmit={handleSubmit} className={styles.form}>
                <MyInput
                    icon={User}
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange(setFormData)}
                    placeholder="ФИО"
                    required
                />
                <div className={styles.inputGroup}>
                    <MyInput
                        icon={Mail}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange(setFormData)}
                        placeholder="Email"
                        required
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
                <div className={styles.inputGroup}>
                    <MyInput
                        icon={Phone}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange(setFormData)}
                        placeholder="Телефон"
                        required
                    />
                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
                <div className={styles.inputGroup}>
                    <MyInput
                        icon={Lock}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange(setFormData)}
                        placeholder="Пароль"
                        required
                    />
                    {errors.password && <span className={styles.error}>{errors.password}</span>}
                </div>
                <MyButton type="submit">Зарегистрироваться</MyButton>
            </form>
        </FormContainer>
    );
}

export default RegisterForm;