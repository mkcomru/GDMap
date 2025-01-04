import Sidebar from '../../components/Sidebar/Sidebar';
import Map from '../../components/Map/Map';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Map />
        </div>
    );
};

export default Dashboard;