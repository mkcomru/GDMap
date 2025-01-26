import { useState } from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import Chat from './Chat';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import TaskDescription from './TaskDescription';
import styles from './TaskDetails.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

const TaskDetails = ({ task, onClose, onAccept, onTaskComplete }) => {
    const [showChat, setShowChat] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    const navigate = useNavigate();
    const handleAccept = () => {
        if (task.id === 1) {
            navigate('/catnmouse');
        }
        onAccept(task);
        setShowChat(true);
    };

    const handleTaskComplete = (taskId) => {
        onTaskComplete(taskId);
        setShowChat(false); // Close chat window when task is marked as completed
    };

    if (showChat) {
        return (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    {showDescription ? (
                        <div className={styles.descriptionView}>
                            <button className={styles.backButton}  onClick={() => setShowDescription(false)}>
                                <FaArrowLeft />
                            </button>
                            <TaskDescription task={task} />
                        </div>
                    ) : (
                        <div className={styles.chatView}>
                            <div className={styles.chatHeader}>
                                <h2>Чат с заказчиком</h2>
                                <div className={styles.chatActions}>
                                    <button className={styles.descriptionButton} onClick={() => setShowDescription(true)}>
                                        Описание
                                    </button>
                                    <button className={styles.declineButton} onClick={() => setShowConfirm(true)}>
                                        Отказаться
                                    </button>
                                </div>
                            </div>
                            <Chat 
                                taskId={task.id} 
                                onTaskComplete={handleTaskComplete}
                                isPendingConfirmation={task.isPendingConfirmation}
                            />
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
                    <button className={styles.declineButton} onClick={() => setShowConfirm(true)}>
                        Отказаться
                    </button>
                    <button className={styles.acceptButton} onClick={handleAccept}>
                        Принять
                    </button>
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
        id: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        fullDescription: PropTypes.string.isRequired,
        isPendingConfirmation: PropTypes.bool
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired,
    onTaskComplete: PropTypes.func.isRequired,
    onTaskConfirm: PropTypes.func.isRequired
};

export default TaskDetails;