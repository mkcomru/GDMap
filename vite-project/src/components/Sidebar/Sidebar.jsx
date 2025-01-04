import styles from './Sidebar.module.css';
import { FaHome, FaUser, FaCog, FaChartBar, FaEnvelope } from 'react-icons/fa';

const sidebarIcons = [
    { icon: FaHome, label: 'Home' },
    { icon: FaUser, label: 'Profile' },
    { icon: FaCog, label: 'Settings' },
    { icon: FaChartBar, label: 'Analytics' },
    { icon: FaEnvelope, label: 'Messages' }
];

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h1 className={styles.title}>Карта добрых дел</h1>
            <p className={styles.city}>Владивосток</p>
            <div className={styles.content}>
                <div className={styles.iconMenu}>
                    {sidebarIcons.map(({ icon: Icon, label }) => (
                        <div key={label} className={styles.iconItem}>
                            <Icon className={styles.icon} />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
        
                <div className={styles.rightSection}>
                    <div className={styles.imageGrid}>
                        {[1, 2, 3].map((num) => (
                            <div key={num} className={styles.imageCard}>
                                <img 
                                    src={`https://picsum.photos/200/150?random=${num}`} 
                                    alt={`Card ${num}`} 
                                />
                                <p>Image Title {num}</p>
                            </div>
                        ))}
                    </div>
        
                    <div className={styles.taskList}>
                        {[...Array(10)].map((_, index) => (
                            <div key={index} className={styles.taskItem}>
                                <h3>Task {index + 1}</h3>
                                <p>Task description goes here</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;