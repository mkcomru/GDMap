import { FaStar } from 'react-icons/fa';
import styles from './TaskDescription.module.css';
import PropTypes from 'prop-types';

const TaskDescription = ({ task }) => {
    return (
        <div className={styles.content}>
            <div className={styles.userInfo}>
                <h3>Заказчик</h3>
                <div className={styles.userDetails}>
                    <span>{task.userName}</span>
                    <div className={styles.rating}>
                        <FaStar className={styles.star} />
                        <span>{task.userRating.toFixed(1)}</span>
                    </div>
                </div>
            </div>

            <div className={styles.field}>
                <label>Адрес</label>
                <p>{task.address}</p>
            </div>

            <div className={styles.field}>
                <label>Краткое описание</label>
                <p>{task.shortDescription}</p>
            </div>

            <div className={styles.field}>
                <label>Полное описание</label>
                <p>{task.fullDescription}</p>
            </div>
        </div>
    );
};

TaskDescription.propTypes = {
    task: PropTypes.shape({
        userName: PropTypes.string.isRequired,
        userRating: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired
    }).isRequired
};

export default TaskDescription;