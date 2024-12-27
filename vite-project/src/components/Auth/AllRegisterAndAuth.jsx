import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ResetPasswordForm from './ResetPasswordForm';
import styles from './AllRegisterAndAuth.module.css';

function AllRegisterAndAuth() {
    return (
        <Router>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link to="/register" className={styles.link}>
                        Регистрация
                    </Link>
                    <Link to="/login" className={styles.link}>
                        Вход
                    </Link>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/reset-password" element={<ResetPasswordForm />} />
                    <Route path="/" element={<LoginForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default AllRegisterAndAuth;