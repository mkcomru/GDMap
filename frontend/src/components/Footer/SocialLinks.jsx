import { FaVk, FaTelegram, FaInstagram } from 'react-icons/fa';
import styles from './SocialLinks.module.css';
import { Link } from "react-router-dom";

const SocialLinks = () => {

    return (
        <div className={styles.socialLinks}>
            <a href="https://vk.com/club229104907" target="_blank" rel="noopener noreferrer">
                <FaVk className={styles.icon} />
            </a>
            <a href="https://t.me/GDMapForSomeHelp" target="_blank" rel="noopener noreferrer">
                <FaTelegram className={styles.icon} />
            </a>
            <Link to="/placeholder">
                <FaInstagram className={styles.icon} />
            </Link>
        </div>
    );
};

export default SocialLinks;