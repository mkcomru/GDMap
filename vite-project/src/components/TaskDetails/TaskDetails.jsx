import { useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import Chat from './Chat';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import TaskDescription from './TaskDescription';
import styles from './TaskDetails.module.css';
import PropTypes from 'prop-types';

const TaskDetails = ({ task, onClose, onAccept }) => {
    const [showChat, setShowChat] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const handleAccept = () => {
        onAccept(task);
        setShowChat(true);
    };

    if (showChat) {
        return (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    {showDescription ? (
                        <div className={styles.descriptionView}>
                            <button className={styles.backButton} onClick={() => setShowDescription(false)}>
                                <FaArrowLeft />
                            </button>
                            <TaskDescription task={task} />
                        </div>
                    ) : (
                        <div className={styles.chatView}>
                            <div className={styles.chatHeader}>
                                <h2>Чат с заказчиком</h2>
                                <div className={styles.chatActions}>
                                    <button className={styles.descriptionButton} onClick={() => setShowDescription(true)}>Описание</button>
                                    <button className={styles.declineButton} onClick={() => setShowConfirm(true)}>Отказаться</button>
                                </div>
                            </div>
                            <Chat taskId={task.id} />
                        </div>
                    )}
                </div>
                {showConfirm && (
                    <ConfirmModal
                        message="Вы уверены, что хотите отказаться от задания?"
                        onConfirm={onClose}
                        onCancel={() => setShowConfirm(false)}
                    />
                )}
            </div>
        );
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Детали задания</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <TaskDescription task={task} />

                <div className={styles.buttons}>
                    <button className={styles.declineButton} onClick={() => setShowConfirm(true)}>Отказаться</button>
                    <button className={styles.acceptButton} onClick={handleAccept}>Принять</button>
                </div>
            </div>

            {showConfirm && (
                <ConfirmModal
                    message="Вы уверены, что хотите отказаться от задания?"
                    onConfirm={onClose}
                    onCancel={() => setShowConfirm(false)}
                />
            )}
        </div>
    );
};

TaskDetails.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        shortDescription: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired
};

export default TaskDetails;