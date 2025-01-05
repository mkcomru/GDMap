import { FaUserCircle, FaCheck, FaPhone, FaStar } from 'react-icons/fa';
import styles from './HowToStart.module.css';
import howToStartImage from '../../img/HowToStartMap.png'
import { forwardRef } from 'react';

const steps = [
    {
        icon: FaUserCircle,
        text: '1. Зарегистрируйтесь или войдите в свой аккаунт.'
    },
    {
        icon: FaCheck,
        text: '2. Оставьте заявку на помомщь или выберите заявку, чтобы помочь другим.'
    },
    {
        icon: FaPhone,
        text: '3. Свяжитесь с пользователем для согласования деталей.'
    },
    {
        icon: FaStar,
        text: '4. Делайте добрые дела и меняйте жизнь к лучшему!'
    }
];

const HowToStart = forwardRef((props, ref) => {
    return (
        <section ref={ref} className={styles.howToStart}>
            
            <div className={styles.mapPreview}>
                <img 
                    src={howToStartImage} 
                    alt="Map"
                    className={styles.mapImage}
                />
            </div>
            <h2 className={styles.title}>Как начать?</h2>

            <div className={styles.stepsGrid}>
                
                {steps.map((step, index) => (
                    <div key={index} className={styles.step}>
                        <step.icon className={styles.icon} />
                        <p>{step.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
});

HowToStart.displayName = 'MapImage'

export default HowToStart;