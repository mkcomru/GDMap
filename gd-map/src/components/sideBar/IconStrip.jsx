import React from 'react';
import { Map, Navigation, Search, Settings, Users } from 'lucide-react';
import '../../styles/IconStrip.css';

const icons = [
    { icon: Map, label: 'Заказчикам' },
    { icon: Navigation, label: 'Имполнителям' },
    { icon: Search, label: 'Задания' },
    { icon: Users, label: 'О сервисе' },
    { icon: Settings, label: 'Профиль' },
];

const IconStrip = () => {
    return (
        <div className="icon-strip">
            <div className="icon-list">
                {icons.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="icon-item">
                            <Icon className="icon" />
                            <span className="icon-label">{item.label}</span>
                        </div>
                    );
                })} 
            </div>
        </div>
    );
};

export default IconStrip;