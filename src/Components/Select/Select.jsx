import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import s from './Select.module.css'
import Container from '../Container/Container'
import Card from '../Card/Card'
import { use, useState } from "react";
import { data } from "/data.js";
let localStorage = window.localStorage
let save = []

if (localStorage.getItem('favourite') != undefined) {
    let strLocal = JSON.parse(localStorage.getItem('favourite'))
    for (let index = 0; index < strLocal.length; index++) {
        save.push(strLocal[index])
    }
}

export default function Select() {
    const count = save.length

    const getAllPrices = () => {
        const prices = [];
        Object.keys(data).forEach(el => {
            Object.keys(data[el]).forEach(element => {
                data[el][element]['items'].forEach(item => {
                    for (let index = 0; index < save.length; index++) {
                        if (Number(item.id) == Number(save[index])) {
                            prices.push(Number(item.prices.haveDiscount
                                ? item.prices.price.withoutDiscount.replace(',', '.')
                                : item.prices.price.replace(',', '.')));
                        }
                    }

                });

            });
        });
        return prices;
    };

    const allPrices = getAllPrices()
    const maxPriceValue = Number(allPrices.length > 0 ? Math.max(...allPrices) : 1)

    const getAllStock = () => {
        const prices = [];
        Object.keys(data).forEach(el => {
            Object.keys(data[el]).forEach(element => {
                data[el][element]['items'].forEach(item => {
                    prices.push(item.count > 0 ? true : false);
                });

            });
        });
        return prices;
    };
    const allStock = getAllStock()


    const getAllFilters = () => {
        const filters = [];
        Object.keys(data).forEach(el => {

            Object.keys(data[el]).forEach(element => {
                data[el][element]['items'].forEach(item => {
                    for (let index = 0; index < save.length; index++) {
                        if (Number(item.id) == Number(save[index])) {
                            filters.push(item.type);
                        }
                    }
                });

            });
        });
        return Array.from(new Set(filters));
    };
    const allFilters = getAllFilters()

    const [minValue, setMinValue] = useState('1');
    const [maxValue, setMaxValue] = useState(maxPriceValue);
    const [minInput, setMinInput] = useState(1)
    const [maxInput, setMaxInput] = useState(maxPriceValue)

    const [stock, setStock] = useState(false)
    const [applyStock, setApplyStock] = useState(false)

    const [minFilter, setMinFilter] = useState(1)
    const [maxFilter, setMaxFilter] = useState(maxPriceValue)

    const ApplyFilters = () => {
        setApplyMinValue(minValue);
        setApplyMaxValue(maxValue);
        setMinFilter(minValue);
        setMaxFilter(maxValue);
        setStock(applyStock)
    }

    const displayAll = (event) => {
        setMinValue(Math.round(event[0]))
        setMaxValue(Math.round(event[1]))
    }


    const Slider = () => (
        <Nouislider
            range={{ min: 1, max: maxPriceValue }} start={[minInput, maxInput]}
            connect onUpdate={displayAll} />
    );


    const [startCount, setStartCount] = useState(0)
    const [visibleCards, setVisibleCards] = useState(6)

    const [applyMinValue, setApplyMinValue] = useState(1)
    const [applyMaxValue, setApplyMaxValue] = useState(maxPriceValue)

    const getFilteredCards = () => {
        const filteredCards = [];

        Object.keys(data).forEach((el) => {
            Object.keys(data[el]).forEach((element) => {
                data[el][element]['items'].forEach((item) => {
                    const isFavourite = save.some(id => Number(id) === Number(item.id));

                    if (!isFavourite) return;

                    const price = Number(
                        item.prices.haveDiscount
                            ? item.prices.price.withoutDiscount.replace(',', '.')
                            : item.prices.price.replace(',', '.')
                    );

                    if (price < applyMinValue || price > applyMaxValue) return;

                    if (stock && item.count <= 0) return;

                    filteredCards.push({
                        ...item,
                        key: item.id,
                        price: price,
                        withCard: item.prices.haveDiscount
                            ? item.prices.price.withDiscount
                            : item.prices.price,
                        withoutCard: item.prices.haveDiscount
                            ? item.prices.price.withoutDiscount
                            : item.prices.price
                    });
                });
            });
        });

        return filteredCards;
    };

    const filteredCards = getFilteredCards();
    const cardsToShow = filteredCards.slice(startCount, visibleCards + startCount);
    console.log(cardsToShow);


    let multi = 6
    const pages = []

    for (let index = 0; index < filteredCards.length; index++) {
        if (filteredCards.length / multi > 1) {
            pages.push(index + 1)
            multi += multi
        } else {
            pages.push(index + 1)
            break
        }
    }

    function clearFilters() {
        setMinValue(1)
        setMaxValue(maxPriceValue)
        setMinInput(1)
        setMaxInput(maxPriceValue)
        setApplyMinValue(1)
        setApplyMaxValue(maxPriceValue)
        setMinFilter(1)
        setMaxFilter(maxPriceValue)
        setApplyStock(false)
        setStock(false)
    }

    return (
        <>
            <Container>
                <div className={s.select__path}><a className={s.select__main}>Главная</a> <svg className={s.select__arrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141" />
                </svg> <a className={s.select__favourite}>Избранное</a></div>

                <h1 className={s.select__title}>Избранное</h1>

                <div className={s.select__main}>
                    <div className={s.select__filter}>
                        <div className={s.select__filterBlock}>
                            <p className={s.select__filterText}>Фильтр</p>
                        </div>
                        <div className={s.select__filterAll}>
                            <div className={s.select__filterPrice}>
                                <div className={s.select__priceTitle}>
                                    <p className={s.select__price}>Цена</p>
                                    <button className={s.select__priceButton}>Очистить</button>
                                </div>
                                <div className={s.select__priceSlider}>
                                    <div className={s.select__prices}>
                                        <input id='0' onChange={(el) => (el.target.value > maxPriceValue) ? (el.target.value = maxPriceValue, setMinInput(el.target.value), setMinValue(el.target.value)) : (el.target.value < 1) ? (el.target.value = 1, setMinInput(el.target.value), setMinValue(el.target.value)) : (setMinInput(el.target.value), setMinValue(el.target.value))} value={minValue} className={s.select__priceBlock} />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="#414141" />
                                        </svg>
                                        <input id='1' onChange={(el) => (el.target.value > maxPriceValue) ? (el.target.value = maxPriceValue, setMaxInput(el.target.value), setMaxValue(el.target.value)) : (el.target.value < 1) ? (el.target.value = 1, setMaxInput(el.target.value), setMaxValue(el.target.value)) : (setMaxInput(el.target.value), setMaxValue(el.target.value))} value={maxValue} className={s.select__priceBlock} />
                                    </div>
                                    <div id='range'>
                                        {Slider()}
                                    </div>
                                </div>
                                <div className={s.select__tags}>
                                    {allFilters.map((el, i) => {
                                        return (
                                            <p key={i} className={s.select__tag}>{el}</p>
                                        )
                                    })}
                                </div>
                                <div className={s.stock}>
                                    <label className={s.stock__switch}>
                                        <input onChange={() => (stock ? setApplyStock(false) : setApplyStock(true))} type="checkbox" />
                                        <span className={s.slider}></span>
                                    </label>
                                    <p className={s.stock__text}>В наличии</p>
                                </div>
                                <button onClick={(e) => (ApplyFilters(), console.log(e.target.parentElement.parentElement.parentElement.classList.remove(s.toRight)))} className={s.select__apply}>Применить</button>
                            </div>
                        </div>
                    </div>
                    <div className={s.cards__all}>
                        <div className={s.cards__allBtns}>
                            <button onClick={(e) => e.target.closest('div').parentElement.parentElement.getElementsByClassName(s.select__filter)[0].classList.toggle(s.toRight)} className={s.cards__openFilter}>Фильтр</button>
                            <div className={s.cards__buttonGroup}>
                                <button className={s.cards__priceFilter}>Цена от {minFilter} до {maxFilter}</button>
                                <svg onClick={() => {
                                    clearFilters();
                                    ApplyFilters();
                                }} className={s.cards__clearSVG} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill="#414141" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#414141" />
                                </svg>
                            </div>
                            <div className={s.cards__buttonGroup}>
                                <button onClick={() => {
                                    clearFilters();
                                    ApplyFilters();
                                }} className={s.cards__clearFilter}>Очистить</button>
                                <svg onClick={() => {
                                    clearFilters();
                                    ApplyFilters();
                                }} className={s.cards__clearSVG} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="eveаnodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill="#414141" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#414141" />
                                </svg>
                            </div>
                        </div>
                        <div className={s.cards}>
                            {cardsToShow.map((item) => (
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    count={item.count}
                                    favourite={true}
                                    withCard={item.withCard}
                                    withoutCard={item.withoutCard}
                                    img={item.img}
                                    name={item.name}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                        <div className={`${s.select__more} ${s.display}`}>
                            <button onClick={() => setVisibleCards(visibleCards + 6)} className={`${s.select__moreBtn} ${cardsToShow.length <= 6 && startCount + 6 <= filteredCards.length ? s.display : ''}`}>Показать ещё</button>
                            <div className={s.select__pageBtns}>
                                <svg className={s.select__pageBtn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L6.70711 12L11.3536 16.6464C11.5488 16.8417 11.5488 17.1583 11.3536 17.3536C11.1583 17.5488 10.8417 17.5488 10.6464 17.3536L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645Z" fill="#414141" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3536 6.64645C18.5488 6.84171 18.5488 7.15829 18.3536 7.35355L13.7071 12L18.3536 16.6464C18.5488 16.8417 18.5488 17.1583 18.3536 17.3536C18.1583 17.5488 17.8417 17.5488 17.6464 17.3536L12.6464 12.3536C12.4512 12.1583 12.4512 11.8417 12.6464 11.6464L17.6464 6.64645C17.8417 6.45118 18.1583 6.45118 18.3536 6.64645Z" fill="#414141" />
                                </svg>
                                <svg className={s.select__pageBtn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3536 5.64645C15.5488 5.84171 15.5488 6.15829 15.3536 6.35355L9.70711 12L15.3536 17.6464C15.5488 17.8417 15.5488 18.1583 15.3536 18.3536C15.1583 18.5488 14.8417 18.5488 14.6464 18.3536L8.64645 12.3536C8.45118 12.1583 8.45118 11.8417 8.64645 11.6464L14.6464 5.64645C14.8417 5.45118 15.1583 5.45118 15.3536 5.64645Z" fill="#414141" />
                                </svg>
                                {pages.map((el, i) => {
                                    return (
                                        <p key={i} onClick={() => (setStartCount(el == 1 ? 0 : el * 2 + el), el == 1 ? setVisibleCards(6) : '')} className={`${s.select__page} ${s.select__pageBtn}`}>{el}</p>
                                    )
                                })}
                                <svg className={s.select__pageBtn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141" />
                                </svg>
                                <svg className={s.select__pageBtn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6464 6.64645C12.8417 6.45118 13.1583 6.45118 13.3536 6.64645L18.3536 11.6464C18.5488 11.8417 18.5488 12.1583 18.3536 12.3536L13.3536 17.3536C13.1583 17.5488 12.8417 17.5488 12.6464 17.3536C12.4512 17.1583 12.4512 16.8417 12.6464 16.6464L17.2929 12L12.6464 7.35355C12.4512 7.15829 12.4512 6.84171 12.6464 6.64645Z" fill="#414141" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 6.64645C5.84171 6.45118 6.15829 6.45118 6.35355 6.64645L11.3536 11.6464C11.5488 11.8417 11.5488 12.1583 11.3536 12.3536L6.35355 17.3536C6.15829 17.5488 5.84171 17.5488 5.64645 17.3536C5.45118 17.1583 5.45118 16.8417 5.64645 16.6464L10.2929 12L5.64645 7.35355C5.45118 7.15829 5.45118 6.84171 5.64645 6.64645Z" fill="#414141" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}