import { FaHeart } from 'react-icons/fa';
import styles from './HelpOptions.module.css';

const HelpOptions = () => {
    return (
        <section className={styles.helpOptions}>
            <div className={styles.frame}>
                <h2 className={styles.mainTitle}>Объединяем сердца для добрых поступков.</h2>
                <p className={styles.subtitle}>На нашей платформе каждый может:</p>
        
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <FaHeart className={styles.icon} />
                            <h3>Получить помощь</h3>
                        </div>
                        <p>Оставьте заявку, и отзывчивые люди из вашего города помогут решить задачу или преодолеть трудности</p>
                    </div>
        
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <FaHeart className={styles.icon} />
                            <h3>Помочь другим</h3>
                        </div>
                        <p>Найдите заявки от тех, кто нуждается в поддержке, и предложите свою помощь</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpOptions;