import { FaVk, FaTelegram, FaInstagram } from 'react-icons/fa';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
    return (
        <div className={styles.socialLinks}>
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                <FaVk className={styles.icon} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegram className={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
            </a>
        </div>
    );
};

export default SocialLinks;