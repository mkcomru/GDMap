import styles from './InstZaglushka.module.css';
import catProgrammer from '../../img/cat-computer.gif'; // Убедитесь, что у вас есть забавная гифка котика-программиста

function InstZaglushka() {
    return (
        <div className={styles.Zaglushka}>
            <h1>Котик-программист работает над нашей группой в Instagram!</h1>
            <img src={catProgrammer} alt="Cat Programmer" className={styles.catProgrammer} />
            <p>Пока наш котик-программист трудится, вы можете делать добрые дела и вдохновлять других!</p>
        </div>
    );
}

export default InstZaglushka;