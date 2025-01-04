import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import styles from './Header.module.css';
import Logo from '../Logo/Logo';

const Header = ({ onAboutClick, onContactClick, onMapClick }) => {
    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <Logo />
                <nav className={styles.navigation}>
                    {/* <Link to="/">Главная</Link> */}
                    <Link onClick={onAboutClick}>О проекте</Link>
                    <Link onClick={onContactClick}>Контакты</Link>
                    <Link onClick={onMapClick}>Карта</Link>
                </nav>
            </div>

            <div className={styles.rightSection}>
                <FaUser className={styles.profileIcon} />
                <div className={styles.authButtons}>
                    <Link to="/login" className={styles.loginBtn}>Войти</Link>
                    <Link to="/register" className={styles.registerBtn}>Зарегистрироваться</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;