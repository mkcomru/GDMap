import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
// import Logo from '../Logo/Logo'
import FooterLogo from './FooterLogo.jsx'
import styles from './Footer.module.css';
import { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
    return (
        <footer ref={ref} className={styles.footer}>
            <div className={styles.content}>
                <ContactInfo />
                <SocialLinks />
                <div className={styles.logoContainer}>
                    <FooterLogo />
                </div>
            </div>
        </footer>
    );
});

Footer.displayName = 'Contact'

export default Footer;