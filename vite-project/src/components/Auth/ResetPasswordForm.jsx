import { useState } from 'react';
import { Mail } from 'lucide-react';
import MyInput from '../common/MyInput/MyInput';
import MyButton from '../common/MyButton/MyButton';
import FormContainer from '../common/FormContainer/FormContainer';
import { validateEmail } from '../../utils/validation';
import styles from './ResetPasswordForm.module.css';

function ResetPasswordForm() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log('Reset password for:', email);
            setIsSubmitted(true);
        } else {
            setError('Некорректный email');
        }
    };

    if (isSubmitted) {
        return (
            <FormContainer
                title="Проверьте почту"
                description={`Инструкции по восстановлению пароля были отправлены на ${email}`}
            />
        );
    }

    return (
        <FormContainer
            title="Восстановление пароля"
            description="Введите email, указанный при регистрации, и мы отправим вам инструкции по восстановлению пароля"
        >
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <MyInput
                        icon={Mail}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    {error && <span className={styles.error}>{error}</span>}
                </div>
                <MyButton type="submit">Отправить инструкции</MyButton>
            </form>
        </FormContainer>
    );
}

export default ResetPasswordForm;