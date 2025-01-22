import styles from './ConfirmModal.module.css';
import PropTypes from 'prop-types';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className={styles.overlay} onClick={onCancel}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <p>{message}</p>
                <div className={styles.buttons}>
                    <button onClick={onCancel} className={styles.cancelButton}>Нет</button>
                    <button onClick={onConfirm} className={styles.confirmButton}>Да</button>
                </div>
            </div>
        </div>
    );
};

ConfirmModal.propTypes = {
    message: PropTypes.string.isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};


export default ConfirmModal;