import Header from './Header';
import IconStrip from './IconStrip';
import MainContent from './MainContent';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <Header />
            <div className="sidebar-content">
                <IconStrip />
                <MainContent />
            </div>
        </div>
    );
};

export default SideBar;