import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import TaskDetails from '../TaskDetails/TaskDetails';
import styles from './TasksModal.module.css';
import PropTypes from 'prop-types';

const TasksModal = ({ tasks, onClose, onTaskComplete, onTaskConfirm }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleAcceptTask = (task) => {
        console.log('Task accepted:', task);
    };

    // Filter out completed tasks
    const activeTasks = tasks.filter(task => !task.isCompleted);

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
                            <h2>Все задания</h2>
                            <button className={styles.closeButton} onClick={onClose}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className={styles.taskList}>
                            {activeTasks.map((task) => (
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
                            {activeTasks.length === 0 && (
                                <div className={styles.noTasks}>
                                    Нет активных заданий
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

TasksModal.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        isPendingConfirmation: PropTypes.bool
    })).isRequired,
    onClose: PropTypes.func.isRequired,
    onTaskComplete: PropTypes.func.isRequired,
    onTaskConfirm: PropTypes.func.isRequired
};

export default TasksModal;