import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TaskDetails from '../TaskDetails/TaskDetails';
import styles from './TasksModal.module.css';
import PropTypes from 'prop-types';

const ActiveTasksModal = ({ tasks, onClose, onTaskComplete, onTaskConfirm, currentUserId }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleAcceptTask = (task) => {
        console.log('Task accepted:', task);
    };

    // Filter tasks that are either created by or accepted by the current user
    const userActiveTasks = tasks.filter(task => 
        !task.isCompleted && 
        (task.createdByUserId === currentUserId || task.acceptedByUserId === currentUserId)
    );

    // Separate tasks into created and accepted
    const createdTasks = userActiveTasks.filter(task => task.createdByUserId === currentUserId);
    const acceptedTasks = userActiveTasks.filter(task => task.acceptedByUserId === currentUserId);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                {selectedTask ? (
                    <TaskDetails
                        task={selectedTask}
                        onClose={() => setSelectedTask(null)}
                        onAccept={handleAcceptTask}
                        onTaskComplete={onTaskComplete}
                        onTaskConfirm={onTaskConfirm}
                    />
                ) : (
                    <>
                        <div className={styles.header}>
                            <h2>Активные задания</h2>
                            <button className={styles.closeButton} onClick={onClose}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.taskList}>
                            {createdTasks.length > 0 && (
                                <div className={styles.taskSection}>
                                    <h3 className={styles.sectionTitle}>Мои опубликованные задания</h3>
                                    {createdTasks.map((task) => (
                                        <div 
                                            key={task.id} 
                                            className={`${styles.taskItem} ${task.isPendingConfirmation ? styles.pending : ''}`}
                                            onClick={() => handleTaskClick(task)}
                                        >
                                            <h3>{task.shortDescription}</h3>
                                            <p className={styles.address}>{task.address}</p>
                                            {task.isPendingConfirmation && (
                                                <div className={styles.pendingBadge}>
                                                Ожидает подтверждения
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {acceptedTasks.length > 0 && (
                                <div className={styles.taskSection}>
                                    <h3 className={styles.sectionTitle}>Принятые мной задания</h3>
                                    {acceptedTasks.map((task) => (
                                        <div 
                                            key={task.id} 
                                            className={`${styles.taskItem} ${task.isPendingConfirmation ? styles.pending : ''}`}
                                            onClick={() => handleTaskClick(task)}
                                        >
                                            <h3>{task.shortDescription}</h3>
                                            <p className={styles.address}>{task.address}</p>
                                            {task.isPendingConfirmation && (
                                                <div className={styles.pendingBadge}>
                                                Ожидает подтверждения
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {userActiveTasks.length === 0 && (
                                <div className={styles.noTasks}>
                                    У вас нет активных заданий
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

ActiveTasksModal.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        isPendingConfirmation: PropTypes.bool,
        createdByUserId: PropTypes.string.isRequired,
        acceptedByUserId: PropTypes.string
    })).isRequired,
    onClose: PropTypes.func.isRequired,
    onTaskComplete: PropTypes.func.isRequired,
    onTaskConfirm: PropTypes.func.isRequired,
    currentUserId: PropTypes.string.isRequired
};

export default ActiveTasksModal;