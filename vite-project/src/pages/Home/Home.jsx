import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Mission from '../../components/Mission/Mission';
import HelpOptions from '../../components/HelpOptions/HelpOptions';
import HowToStart from '../../components/HowToStart/HowToStart';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';
import { useRef } from 'react';

const Home = () => {
    const missionRef = useRef(null)
    const footerRef = useRef(null)
    const mapImageRef = useRef(null)

    const scrollMission = () => {
        missionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollContact = () => {
        footerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollMapImage = () => {
        mapImageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className={styles.container}>
            <Header onAboutClick={scrollMission} onContactClick={scrollContact} onMapClick={scrollMapImage} />
            <main className={styles.main}>
                <Hero />
                <Mission ref={missionRef} />
                <HelpOptions />
                <HowToStart ref={mapImageRef} />
            </main>
            <Footer ref={footerRef} />
        </div>
    );
};

export default Home;