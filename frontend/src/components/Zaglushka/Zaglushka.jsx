import styles from './Zaglushka.module.css'
import { useEffect, useRef } from 'react'
import catImage from '../../img/catImg.png';

const Zaglushka = () => {
    const catRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (catRef.current) {
                catRef.current.style.left = `${event.clientX - 75}px`;
                catRef.current.style.top = `${event.clientY - 75}px`;
            }
        };

        const handleMouseOver = () => {
            alert('GameOver!');
        };

        document.addEventListener('mousemove', handleMouseMove);
        catRef.current.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (catRef.current) {
                catRef.current.removeEventListener('mouseover', handleMouseOver);
            }
        };
    }, []);

    return (
        <div className={styles.pole}>
            <img
                ref={catRef}
                className={styles.catImg}
                id="cat"
                src={catImage}
                alt="Cat"
                style={{ position: 'fixed' }}
            />
        </div>
    );
};

export default Zaglushka;