import React from 'react';
import style from '../../styles/MainContent.module.css';

const features = [
    {
        image: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?w=500&auto=format",
        title: "Сопровождение"
    },
    {
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=500&auto=format",
        title: "Покупки"
    },
    {
        image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=500&auto=format",
        title: "Помощь по дому"
    }
];

const infoCards = [
    { title: "Задание", description: "Описание", typeOfTask: "Район" },
    { title: "Задание", description: "Описание", typeOfTask: "Район" },
    { title: "Задание", description: "Описание", typeOfTask: "Район" },
];

const MainContent = () => {
    return (
        <div className={style.mainContent}>
            <div className={style.featuresGrid}>
                {features.map((feature, index) => (
                    <div key={index} className={style.featureItem}>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className={style.featureImage}
                        />
                        <span className={style.featureTitle}>{feature.title}</span>
                    </div>
                ))}
            </div>

            <div className={style.infoCards}>
                {infoCards.map((card, index) => (
                    <div key={index} className={style.infoCard}>
                        <h3 className={style.infoCardTitle}>{card.title}</h3>
                        <p className={style.infoCardDescription}>{card.description}</p>
                        <p className={style.geo}>{card.typeOfTask}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent;