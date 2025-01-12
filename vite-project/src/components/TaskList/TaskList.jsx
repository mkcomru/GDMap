import { useState } from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';
import styles from './TaskList.module.css';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, onTaskComplete, onTaskConfirm }) => {
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
        <div className={styles.taskList}>
            {activeTasks.map((task) => (
                <div 
                    key={task.id} 
                    className={`${styles.taskItem} ${task.isPendingConfirmation ? styles.pending : ''}`}
                    onClick={() => handleTaskClick(task)}
                >
                    <h3>{task.shortDescription}</h3>
                    <p className={styles.address}>{task.address}</p>
                    {task.isPendingConfirmation && task.createdByCurrentUser && (
                        <button 
                            className={styles.confirmButton}
                            onClick={(e) => {
                                e.stopPropagation();
                                onTaskConfirm(task.id);
                            }}
                        >
                            Подтвердить выполнение
                        </button>
                    )}
                </div>
            ))}

            {selectedTask && (
                <TaskDetails
                    task={selectedTask}
                    onClose={() => setSelectedTask(null)}
                    onAccept={handleAcceptTask}
                    onTaskComplete={onTaskComplete}
                    onTaskConfirm={onTaskConfirm}
                />
            )}
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        shortDescription: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool,
        isPendingConfirmation: PropTypes.bool,
        createdByCurrentUser: PropTypes.bool
    })).isRequired,
    onTaskComplete: PropTypes.func.isRequired,
    onTaskConfirm: PropTypes.func.isRequired
};

export default TaskList;