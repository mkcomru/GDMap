import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext.jsx'

const Header = ({ onAboutClick, onContactClick, onMapClick }) => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <Logo />
                <nav className={styles.navigation}>
                    <Link onClick={onAboutClick}>О проекте</Link>
                    <Link to="/about">О нас</Link>
                    <Link onClick={onContactClick}>Контакты</Link>
                    <Link onClick={onMapClick}>Карта</Link>
                </nav>
            </div>

            <div className={styles.rightSection}>
                {isAuthenticated ? (
                    <>
                        <Link to="/profile">
                            <FaUser className={styles.profileIcon} />
                        </Link>
                        <button onClick={logout} className={styles.logoutBtn}>
                            Выйти
                        </button>
                    </>
                ) : (
                    <div className={styles.authButtons}>
                        <Link to="/login" className={styles.loginBtn}>Войти</Link>
                        <Link to="/register" className={styles.registerBtn}>Зарегистрироваться</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

Header.propTypes = {
    onAboutClick: PropTypes.func.isRequired,
    onContactClick: PropTypes.func.isRequired,
    onMapClick: PropTypes.func.isRequired
};

export default Header;