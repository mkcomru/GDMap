import PropTypes from 'prop-types';
import styles from './MyInput.module.css';

function MyInput({ icon: Icon, ...props }) {
    return (
        <div className={styles.inputWrapper}>
            <Icon className={styles.icon} />
            <input className={styles.input} {...props} />
        </div>
    );
}

MyInput.propTypes = {
    icon: PropTypes.elementType.isRequired,
    // Добавьте другие пропсы, если необходимо
};

export default MyInput;