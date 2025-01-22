import Sidebar from '../../components/Sidebar/Sidebar';
import MapComponent from '../../components/Map/MapComponent';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <MapComponent />
        </div>
    );
};

export default Dashboard;