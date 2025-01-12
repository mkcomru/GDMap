import { useForm } from 'react-hook-form';
import styles from './TaskModal.module.css';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';

const TaskModal = ({ user, onClose, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFormSubmit = (data) => {
        onSubmit({
            ...data,
            id: Date.now(), // Generate unique ID
            userName: user.name,
            userRating: user.rating,
            createdAt: new Date().toISOString(),
            createdByCurrentUser: true, // Mark as created by current user
            status: 'active'
        });
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <h2>Добавить задание</h2>
        
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <div className={styles.field}>
                        <label>Автор задания</label>
                        <div className={styles.userInfo}>
                            <span>{user.name}</span>
                            <div className={styles.rating}>
                                <FaStar className={styles.star} />
                                <span>{user.rating.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label>Адрес</label>
                        <input
                            {...register('address', { required: 'Укажите адрес' })}
                            placeholder="Введите адрес"
                        />
                        {errors.address && <span className={styles.error}>{errors.address.message}</span>}
                    </div>

                    <div className={styles.field}>
                        <label>Краткое описание</label>
                        <input
                            {...register('shortDescription', { required: 'Добавьте краткое описание' })}
                            placeholder="Кратко опишите задание"
                        />
                        {errors.shortDescription && <span className={styles.error}>{errors.shortDescription.message}</span>}
                    </div>

                    <div className={styles.field}>
                        <label>Полное описание</label>
                        <textarea
                            {...register('fullDescription', { required: 'Добавьте полное описание' })}
                            rows={4}
                            placeholder="Подробно опишите задание"
                        />
                        {errors.fullDescription && <span className={styles.error}>{errors.fullDescription.message}</span>}
                    </div>

                    <div className={styles.buttons}>
                        <button type="button" onClick={onClose} className={styles.cancelButton}>
                            Отмена
                        </button>
                        <button type="submit" className={styles.submitButton}>
                        Добавить задание
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

TaskModal.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default TaskModal;