import { useState } from 'react';
import TaskDetails from '../TaskDetails/TaskDetails';
import styles from './TaskList.module.css';
import PropTypes from 'prop-types';

const TaskList = ({ tasks }) => {
    const [selectedTask, setSelectedTask] = useState(null);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleAcceptTask = (task) => {
        // Here you would implement the logic to accept the task
        console.log('Task accepted:', task);
    };

    return (
        <div className={styles.taskList}>
            {tasks.map((task, index) => (
                <div key={index} className={styles.taskItem} onClick={() => handleTaskClick(task)}>
                    <h3>{task.shortDescription}</h3>
                    <p className={styles.address}>{task.address}</p>
                </div>
            ))}

            {selectedTask && (
                <TaskDetails task={selectedTask} onClose={() => setSelectedTask(null)} onAccept={handleAcceptTask}/>
            )}
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        shortDescription: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired
    })).isRequired
};

export default TaskList;