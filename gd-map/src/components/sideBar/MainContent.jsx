import React from 'react';
import '../../styles/MainContent.css';

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
        <div className="main-content">
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="feature-image"
                        />
                        <span className="feature-title">{feature.title}</span>
                    </div>
                ))}
            </div>

            <div className="info-cards">
                {infoCards.map((card, index) => (
                    <div key={index} className="info-card">
                        <h3 className="info-card-title">{card.title}</h3>
                        <p className="info-card-description">{card.description}</p>
                        <p className="geo">{card.typeOfTask}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContent;