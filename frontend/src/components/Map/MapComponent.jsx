import { useEffect, useRef } from 'react';
import styles from './MapComponent.module.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapComponent = () => {
    // const scriptRef = useRef(null);
    // const mapInitialized = useRef(false);

    // useEffect(() => {
    //     if (mapInitialized.current) return;

    //     // Загружаем API Яндекс.Карт асинхронно
    //     const script = document.createElement('script');
    //     script.src = 'https://api-maps.yandex.ru/2.1/?apikey=7f1f3885-7910-496f-962d-808e18afa47e&lang=ru_RU';
    //     script.async = true;
    //     scriptRef.current = script;
    //     document.body.appendChild(script);

    //     script.onload = () => {
    //         // Инициализируем карту после загрузки API
    //         window.ymaps.ready(() => {
    //             new window.ymaps.Map('map', {
    //                 center: [43.11, 131.93], // Координаты центра карты (Владивосток)
    //                 zoom: 11 // Масштаб
    //             });
    //             mapInitialized.current = true;
    //         });
    //     };

    //     return () => {
    //         // Удаляем скрипт при размонтировании компонента
    //         if (scriptRef.current) {
    //             document.body.removeChild(scriptRef.current);
    //         }
    //     };
    // }, []);

    return (
        <YMaps>
            <Map 
                className={styles.map} 
                defaultState={{ center: [43.11, 131.93], zoom: 13, controls: ["zoomControl"] }}
                modules={["control.ZoomControl"]}
                >
                <Placemark geometry={[43.11, 131.93]} />
            </Map>
        </YMaps>

    );
};

export default MapComponent;