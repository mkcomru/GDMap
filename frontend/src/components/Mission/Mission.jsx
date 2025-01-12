import styles from './Mission.module.css';
import missionImage from '../../img/7222.jpg'
import { forwardRef } from 'react';

const Mission = forwardRef((props, ref) => {
    return (
        <section ref={ref} className={styles.mission}>
            <h2 className={styles.title}>Наша миссия</h2>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p>Добро пожаловать на "Карту Добрых Дел" - платформу, которая объединяет людей для взаимной помощи и поддержки.</p>
                    
                    <p>Мы верим, что каждый человек может внести свой вклад в общее благо. Независимо от того, нужна ли вам помощь или вы готовы помочь другим, наш сайт предоставляет удобный способ найти единомышленников и действовать вместе.</p>
                    
                    <p>На нашей карте вы можете оставить заявку на помощь в разных сферах жизни или найти подходящую возможность, чтобы помочь другим: будь то мелкие бытовые дела, обучение или поддержка в трудной ситуации.</p>
                </div>
                <div className={styles.imageWrapper}>
                    <img 
                        src={missionImage}
                        alt="Люди помогают друг другу"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
});

Mission.displayName = 'Mission';

export default Mission;