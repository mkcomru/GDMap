import { Map, Navigation, Search, Settings, Users } from 'lucide-react';
import style from './IconStrip.module.css';

const icons = [
    { icon: Map, label: 'Заказчикам' },
    { icon: Navigation, label: 'Имполнителям' },
    { icon: Search, label: 'Задания' },
    { icon: Users, label: 'О сервисе' },
    { icon: Settings, label: 'Профиль' },
];

const IconStrip = () => {
    return (
        <div className={style.iconStrip}>
            <div className={style.iconList}>
                {icons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className={style.iconItem}>
                            <Icon className={style.icon} />
                            <span className={style.iconLabel}>{item.label}</span>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
};

export default IconStrip;