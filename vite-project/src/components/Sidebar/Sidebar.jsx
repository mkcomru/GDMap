import styles from './Sidebar.module.css';
import { FaHome, FaUser, FaPlus, FaTasks, FaCheckSquare } from 'react-icons/fa';
import TaskList from '../TaskList/TaskList';
import TaskModal from '../TaskModal/TaskModal';
import { useState } from 'react';

const sidebarIcons = [
    { icon: FaHome, label: 'Главная' },
    { icon: FaUser, label: 'Профиль' },
    { icon: FaPlus, label: 'Добавить задание' },
    { icon: FaTasks, label: 'Здания' },
    { icon: FaCheckSquare, label: 'Активные задания' }
];

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    // Mock user data - in a real app, this would come from authentication
    const mockUser = {
        name: 'Максим Гребенщиков',
        rating: 5.0
    };

    const handleAddTask = (newTask) => {
        setTasks([newTask, ...tasks]);
    };

    const handleIconClick = (label) => {
        if (label === 'Добавить задание') {
            setIsModalOpen(true);
        }
    };

    return (
        <div className={styles.sidebar}>
            <h1 className={styles.title}>Карта добрых дел</h1>
            <p className={styles.city}>Владивосток</p>
            <div className={styles.content}>
                <div className={styles.iconMenu}>
                    {sidebarIcons.map(({ icon: Icon, label }) => (
                        <div key={label} className={styles.iconItem} onClick={() => handleIconClick(label)}>
                            <Icon className={styles.icon} />
                            <span className={styles.labelText}>{label}</span>
                        </div>
                    ))}
                </div>
        
                <div className={styles.rightSection}>
                    <TaskList tasks={tasks} />
                </div>
            </div>

            {isModalOpen && (<TaskModal user={mockUser} onClose={() => setIsModalOpen(false)} onSubmit={handleAddTask} />)}
        </div>
    );
};

export default Sidebar;