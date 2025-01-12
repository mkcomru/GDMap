import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import HeroImage from '../../img/Image placeholder 4.jpg'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Карта добрых дел. Помогай тем, кто нуждается рядом с вами.
                </h1>
                <Link to="/dashboard" className={styles.button}>
                    Начать помогать
                </Link>
            </div>
            <div className={styles.imageWrapper}>
                <img 
                    src={HeroImage}
                    alt="Люди помогают друг другу"
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default Hero;