import { use, useEffect, useRef, useState } from 'react';
import styles from './Map.module.css';
import Container from '../Container/Container';

const Map = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapError, setMapError] = useState('');

    const shops = [
        {
            name: "Щельяюр",
            address: "Республика Коми, Ижемский район, п. Щельяюр",
            coords: [65.325869, 53.417914]
        },
        {
            name: "Вертеп",
            address: "Республика Коми, Усть-Вымский район, д. Вертеп",
            coords: [65.298894, 53.204025]
        },
        {
            name: "Краснобор",
            address: "Республика Коми, Ижемский район, с. Краснобор",
            coords: [65.294898, 53.285251]
        },
        {
            name: "Диюр",
            address: "Республика Коми, Княжпогостский район, д. Диюр",
            coords: [65.277609, 53.359892]
        }
    ];

    const initMap = () => {
        if (!window.ymaps || !mapRef.current) return;

        try {
            const map = new window.ymaps.Map(mapRef.current, {
                center: [65.325869, 53.417914],
                zoom: 14
            });

            map.controls.add('zoomControl');
            map.controls.add('typeSelector');

            shops.forEach(shop => {
                const placemark = new window.ymaps.Placemark(
                    shop.coords,
                    {
                        balloonContent: `<b>${shop.name}</b><br>${shop.address}`,
                        iconCaption: shop.name
                    },
                    {
                        preset: 'islands#blueShopIcon',
                        iconColor: '#06369b'
                    }
                );
                map.geoObjects.add(placemark);
            });

            mapInstance.current = map;
            setMapLoaded(true);
        } catch (error) {
            console.error('Map init error:', error);
            setMapError('Ошибка загрузки карты');
        }
    };

    useEffect(() => {
        if (window.ymaps) {
            window.ymaps.ready(initMap);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=5b317dde-1254-48f1-8b37-ae04a76c071e&lang=ru_RU';
        script.async = true;

        script.onload = () => window.ymaps.ready(initMap);
        script.onerror = () => setMapError('Ошибка загрузки API карт');

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    function setActive(e, position) {
        let btns = e.target.closest('div').getElementsByClassName(styles.map__button)
        for (let index = 0; index < btns.length; index++) {
            if (position == index) {
                btns[index].classList.add(styles.map__buttonActive)
                if (mapInstance.current) {
                    mapInstance.current.setCenter(shops[index].coords, 14, {
                        checkZoomRange: true
                    });
                }
            }
            else {
                btns[index].classList.remove(styles.map__buttonActive)
            }
        }

    }

    return (
        <>
            <section className={styles.mapSection}>
                <Container>
                    <h2 className={styles.map__title}>Наши магазины</h2>
                    <div className={styles.map__buttons}>
                        <button onClick={(e) => setActive(e, 0)} className={`${styles.map__button} ${styles.map__buttonActive}`}>п.Щельяюр</button>
                        <button onClick={(e) => setActive(e, 1)} className={`${styles.map__button} `}>д.Вертеп</button>
                        <button onClick={(e) => setActive(e, 2)} className={`${styles.map__button} `}>с.Краснобор</button>
                        <button onClick={(e) => setActive(e, 3)} className={`${styles.map__button} `}>д.Диюр</button>
                    </div>
                    <div className={styles.container}>
                        <div
                            ref={mapRef}
                            className={styles.map}
                        >
                            {!mapLoaded && !mapError && (
                                <div className={styles.loader}>Загрузка карты...</div>
                            )}
                            {mapError && (
                                <div className={styles.error}>{mapError}</div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Map;