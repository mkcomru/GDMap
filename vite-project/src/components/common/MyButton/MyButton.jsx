import styles from './MyButton.module.css';

function MyButton({ variant = 'primary', children, ...props }) {
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props}>
            {children}
        </button>
    );
}

export default MyButton;