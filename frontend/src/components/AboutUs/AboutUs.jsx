import styles from './AboutUs.module.css';
import {FaArrowLeft, FaInstagram, FaTelegram, FaVk} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const AboutUs = () => {

    const navigate = useNavigate();
    const goToPage = () => {
        navigate(-1);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.zag1}>Мы</h1>
            <div className={styles.intro}>
                <p className={styles.text}>команда разработчиков, объединившаяся с ясной целью:
                    создать уникальную платформу, которая способна вдохновлять на добрые дела.
                    Каждый из нас привносит в проект свои уникальные навыки и подходы</p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.zag2}>Юля</h2>
                <p className={styles.text}>наш тим-лид, — это мозг и сердце нашей команды.
                    С её богатым опытом в управлении проектами и выдающимися лидерскими качествами,
                    она направляет нас к достижению общей цели, вдохновляя и поддерживая каждого из
                    нас на пути к созданию качественного продукта. </p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.zag2}>Максим</h2>
                <p className={styles.text}>наш фронтенд разработчик, играет ключевую роль в
                    формировании взаимодействия пользователей с платформой. Его внимание к
                    деталям и стремление к созданию интуитивно понятного интерфейса делают
                    использование нашего сервиса удобным и приятным. Максим с энтузиазмом
                    подходит к каждой задаче и всегда ищет новые способы улучшать пользовательский опыт.</p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.zag2}>Семён</h2>
                <p className={styles.text}>наш бэкенд разработчик, обеспечивает надежность
                    и эффективность работы сервиса на техническом уровне. С егоExpert
                    управлением базами данных и серверной логикой, платформа
                    функционирует гладко и без сбоев. Семён не боится сложных задач и всегда
                    готов предложить творческие решения для оптимизации процессов.</p>
            </div>
            <div className={styles.section}>
                <h2 className={styles.zag2}>Мы создали этот проект </h2>
                <p className={styles.text}>карту добрых дел — с убеждением, что каждый
                    из нас может внести свою лепту в улучшение общества. Мы стремимся
                    создавать пространство, где люди могут не только предлагать свои
                    задания, но и с радостью выполнять задания других, действуя на
                    добровольной и бескорыстной основе. В нашем мире, полном разнообразия и
                    возможностей, мы надеемся, что сможем расширить представления о том,
                    как простые поступки могут изменить жизни к лучшему.</p>
            </div>
            <div className={styles.footer}>
                <p className={styles.text}>Карта добрых дел - это целое сообщество людей
                    с огромным, горящим сердецем желающих совершать добрые дела и
                    помогать нуждающимся людям. Мы будем рады каждому человеку, который вступит
                    в наше сообщество и будет помогать в продвижении идеи о бескорыстной помощи нуждающимся</p>
                <p>#делаеммирдобреевместе</p>

            </div>
            <div className={styles.socialLinks}>
                <a href="https://vk.com/club229104907" target="_blank" rel="noopener noreferrer">
                    <FaVk className={styles.icon}/>
                </a>
                <a href="https://t.me/GDMapForSomeHelp" target="_blank" rel="noopener noreferrer">
                    <FaTelegram className={styles.icon}/>
                </a>
                <Link to="/placeholder">
                    <FaInstagram className={styles.icon}/>
                </Link>
                <button className={styles.backbtn} onClick={goToPage}>
                    <FaArrowLeft/>
                </button>
            </div>
        </div>
    );
};

export default AboutUs;