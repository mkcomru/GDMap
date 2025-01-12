import { FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:contact@example.com">contact@example.com</a>
            </div>
            <div className={styles.contactItem}>
                <FaPhone className={styles.icon} />
                <a href="tel:+71234567890">+7 (123) 456-78-90</a>
            </div>
        </div>
    );
};

export default ContactInfo;