import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaHome, FaUser, FaPlus, FaTasks, FaCheckSquare } from 'react-icons/fa';
import TaskModal from '../TaskModal/TaskModal';
import TaskList from '../TaskList/TaskList';
import TasksModal from '../TasksModal/TasksModal';
import ActiveTasksModal from '../TasksModal/ActiveTasksModal';


const sidebarIcons = [
    { icon: FaHome, label: 'Главная', path: '/' },
    { icon: FaUser, label: 'Профиль', path: '/profile' },
    { icon: FaPlus, label: 'Добавить задание' },
    { icon: FaTasks, label: 'Задания' },
    { icon: FaCheckSquare, label: 'Активные задания' }
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTasksModalOpen, setIsTasksModalOpen] = useState(false);
    const [isActiveTasksModalOpen, setIsActiveTasksModalOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    // Mock current user ID (replace with actual auth system later)
    const currentUserId = 'user123';

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const mockUser = {
        id: currentUserId,
        name: 'Гребенщиков Максим',
        rating: 5.0
    };

    const handleAddTask = (newTask) => {
        const taskWithStatus = {
            ...newTask,
            id: Date.now(),
            status: 'active',
            isCompleted: false,
            isPendingConfirmation: false,
            createdByUserId: currentUserId,
            acceptedByUserId: null,
            createdByCurrentUser: true
        };
        setTasks([taskWithStatus, ...tasks]);
    };

    const handleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, isPendingConfirmation: true }
                : task
        ));
    };

    const handleTaskConfirmation = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, status: 'completed', isCompleted: true }
                : task
        ));
    };

    const handleTaskAccept = (taskId) => {
        setTasks(tasks.map(task => 
            task.id === taskId 
                ? { ...task, acceptedByUserId: currentUserId }
                : task
        ));
    };

    const handleIconClick = (label, path) => {
        if (path) {
            navigate(path);
        } else if (label === 'Добавить задание') {
            setIsModalOpen(true);
        } else if (label === 'Задания') {
            setIsTasksModalOpen(true);
        } else if (label === 'Активные задания') {
            setIsActiveTasksModalOpen(true);
        }
    };

    return (
        <div className={styles.sidebar}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.content}>
                <div className={styles.iconMenu}>
                    {sidebarIcons.map(({ icon: Icon, label, path }) => (
                        <div 
                            key={label} 
                            className={styles.iconItem}
                            onClick={() => handleIconClick(label, path)}
                        >
                            <Icon className={styles.icon} />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
        
                <div className={styles.rightSection}>
                    <TaskList 
                        tasks={tasks} 
                        onTaskComplete={handleTaskCompletion}
                        onTaskConfirm={handleTaskConfirmation}
                    />
                </div>
            </div>

            {isModalOpen && (
                <TaskModal
                    user={mockUser}
                    onClose={() => setIsModalOpen(false)}
                    onSubmit={handleAddTask}
                />
            )}

            {isTasksModalOpen && (
                <TasksModal
                    tasks={tasks}
                    onClose={() => setIsTasksModalOpen(false)}
                    onTaskComplete={handleTaskCompletion}
                    onTaskConfirm={handleTaskConfirmation}
                    onTaskAccept={handleTaskAccept}
                    currentUserId={currentUserId}
                />
            )}

            {isActiveTasksModalOpen && (
                <ActiveTasksModal
                    tasks={tasks}
                    onClose={() => setIsActiveTasksModalOpen(false)}
                    onTaskComplete={handleTaskCompletion}
                    onTaskConfirm={handleTaskConfirmation}
                    currentUserId={currentUserId}
                />
            )}
        </div>
    );
};

export default Sidebar;