import { useLocation } from 'react-router-dom';
import {data} from '../../../data'
import s from './Chapter.module.css'
import Container from '../Container/Container';
import Location from '../Location/Location'
import Title from '../Title/Title';
import Card from '../Card/Card';
import { useEffect, useState, useRef } from 'react';
export default function Chapter(){
    const location = useLocation();
    
    const { loc } = location.state || {};
    // console.log(loc);
    const [products, setProducts] = useState([])
    const [pages, setPages] = useState([])
    const [pagePosition, setPagePosition] = useState(1)
    const [interval, setInterval] = useState([0, 6])

    const [highest, setHighest] = useState(10000)
    const [lowest, setLowest] = useState(0)
    const minPriceRef = useRef(null)
    const maxPriceRef = useRef(null)

    const [apply, setApply] = useState(true) //

    const [CheckBox, setCheckBox] = useState(true)
    const [filter, setFilter] = useState(['Фильтр', `Цена от ${lowest} до ${highest}`, 'В наличии', 'Очистить фильтры'])

    let productsLength = '' //кол-во товара в категории
    useEffect(()=>{
        console.log('В наличии:',CheckBox, ',минМакс:', lowest,'-',highest);
        
        
        {Object.values(data).map((el)=> {
            return(
                Object.values(el).map((element)=> {
                    if(element.name === loc.LocRu){
                        setProducts(element.items)
                        
                        productsLength = element.items.length
                    }
                })
            )
        })} 
        let productsPage = Array(Math.ceil(productsLength / 6)).fill().map((_, i) => i + 1);
        setPages(productsPage)
        // console.log(productsLength);
        
    }, [loc, apply])

    useEffect(()=>{
        let int = []
        switch (pagePosition){
            case 1:
                int = [0 ,6]
                break;
            default:
                int = [pagePosition*6 -6, pagePosition*6]
                break;
        }
        setInterval(int)
    }, [pagePosition])

    function GotoEnd(el){
        let position = 1
        
        switch (el){
            case 1:
                position = 1
                break;
            case 100:
                position = pages[pages.length-1]
                break;
        }
        setPagePosition(position)
    }

    function GotoSecond(el){
        let position = pagePosition
        
        switch (el){
            case 2:
                position-1 <= 0 ? position = pages[pages.length-1] : position--
                // console.log('-------');
                break;
            case 200:
                position+1 > pages[pages.length-1] ? position = 1 : position++
                // console.log('+++++++');
                break;
        }
        setPagePosition(position)
    }

    function setLowestPrice(el){
        setLowest(el.target.value)
    }

    function setHighestPrice(el){
        setHighest(el.target.value)
    }

    function resetPrice(){
        setLowest(0)
        setHighest(10000)
        minPriceRef.current.value = ''
        maxPriceRef.current.value = ''
    }

    function applySetting(event){
        event.preventDefault()
        setApply(!apply)
    }

    function checkBox(el){
        el.currentTarget.children[0].classList.toggle(`${s.off}`)
        el.currentTarget.classList.toggle(`${s.InStock__box_off}`)
        // console.log();
        setCheckBox(!CheckBox)
    }
    
    return(
        <main className={s.main}>
            <Container>
                <Location props={loc.prevLoc}/>
                <Title props={[loc.LocRu, 1]}/>
                <div style={{display: 'flex', flexDirection: 'row', gap: '40px'}}>
                    <form className={s.form}>
                        <div className={s.form__title}>
                            <h2 className={s.form__title_text}>Фильтр</h2> 
                        </div>
                        <div className={s.filter}>
                            <div className={s.filter__range}>
                                <div className={s.title}>
                                    <p className={s.title__p}>Цена</p>
                                    <a onClick={()=> resetPrice()} className={s.title__button}>Очистить</a>
                                </div>
                                <div className={s.range}>
                                    <input ref={minPriceRef} onChange={(el)=> setLowestPrice(el)} placeholder={0} min={0} max={10000} className={s.range__input} type='number' />
                                    <svg className={s.range__p} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.7239 4.72386 11.5 5 11.5H19C19.2761 11.5 19.5 11.7239 19.5 12C19.5 12.2761 19.2761 12.5 19 12.5H5C4.72386 12.5 4.5 12.2761 4.5 12Z" fill="#414141"/>
                                    </svg>
                                    <input ref={maxPriceRef} onChange={(el)=> setHighestPrice(el)} placeholder={10000} min={0} max={10000} className={s.range__input} type="number" />
                                </div>
                                <div className={s.scroll}>

                                </div>
                            </div>
                            <div className={s.categories}>
                                <p className={s.categories__p}>Молоко</p>
                                <p className={s.categories__p}>Сливки</p>
                                <p className={s.categories__p}>Яйцо</p>
                            </div>
                            <div className={s.InStock}>
                                <div onClick={(el)=> checkBox(el)} className={s.InStock__box}>
                                    <div className={s.InStock__check}></div>
                                </div>
                                <p className={s.InStock__p}>В наличии</p>
                            </div>
                        </div>
                        <button onClick={()=> applySetting(event)} type='submit' className={s.form__button}>Применить</button>
                    </form>
                    <div className={s.content}>
                        <div className={s.content__filters}>
                            {filter.map((el,i)=> {
                                // console.log(filter.length-1, i);
                                return(
                                    <div style={{background: `${i === filter.length-1 ? '#F3F2F1' : ''}`}} key={i} className={s.content__filter}>
                                        <p style={{color: `${i === filter.length-1 ? '#606060' : ''}`}} className={s.content__filter_p}>{el} {i === 0 ? filter.length-2: ''}</p>
                                        <svg className={s.content__filter_img} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill={filter.length-1 === i ? '#414141' : 'white'}/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill={filter.length-1 === i ? '#414141' : 'white'}/>
                                        </svg>
                                    </div>
                                )
                            })}
                        </div>
                        <div className={s.products}>
                            {products.slice(interval[0], interval[1]).map((e, i)=>(
                                <Card key={i} id={e.id} withCard={e.prices.price.withDiscount} withoutCard={e.prices.price.withoutDiscount} img={e.img} name={e.name} rating={e.rating}/>
                            ))}
                        </div>
                        <div className={s.page}>
                            <button onClick={()=> setInterval([interval[0], interval[1]+6])} className={s.page__seeMore}>Показать еще</button>
                            <div className={s.pages}>
                                <svg onClick={()=> GotoEnd(1)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.3536 6.64645C11.5488 6.84171 11.5488 7.15829 11.3536 7.35355L6.70711 12L11.3536 16.6464C11.5488 16.8417 11.5488 17.1583 11.3536 17.3536C11.1583 17.5488 10.8417 17.5488 10.6464 17.3536L5.64645 12.3536C5.45118 12.1583 5.45118 11.8417 5.64645 11.6464L10.6464 6.64645C10.8417 6.45118 11.1583 6.45118 11.3536 6.64645Z" fill="#414141"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3536 6.64645C18.5488 6.84171 18.5488 7.15829 18.3536 7.35355L13.7071 12L18.3536 16.6464C18.5488 16.8417 18.5488 17.1583 18.3536 17.3536C18.1583 17.5488 17.8417 17.5488 17.6464 17.3536L12.6464 12.3536C12.4512 12.1583 12.4512 11.8417 12.6464 11.6464L17.6464 6.64645C17.8417 6.45118 18.1583 6.45118 18.3536 6.64645Z" fill="#414141"/>
                                </svg>
                                <svg onClick={()=> GotoSecond(2)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.3536 5.64645C15.5488 5.84171 15.5488 6.15829 15.3536 6.35355L9.70711 12L15.3536 17.6464C15.5488 17.8417 15.5488 18.1583 15.3536 18.3536C15.1583 18.5488 14.8417 18.5488 14.6464 18.3536L8.64645 12.3536C8.45118 12.1583 8.45118 11.8417 8.64645 11.6464L14.6464 5.64645C14.8417 5.45118 15.1583 5.45118 15.3536 5.64645Z" fill="#414141"/>
                                </svg>
                                {pages.map((el,i)=>{
                                    return(
                                        <p onClick={()=> setPagePosition(el)} key={i} className={`${s.pages__number} ${el !== pagePosition || s.active__page}`}>{el}</p>
                                    )
                                })}
                                <svg onClick={()=> GotoSecond(200)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141"/>
                                </svg>
                                <svg onClick={()=> GotoEnd(100)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.6464 6.64645C12.8417 6.45118 13.1583 6.45118 13.3536 6.64645L18.3536 11.6464C18.5488 11.8417 18.5488 12.1583 18.3536 12.3536L13.3536 17.3536C13.1583 17.5488 12.8417 17.5488 12.6464 17.3536C12.4512 17.1583 12.4512 16.8417 12.6464 16.6464L17.2929 12L12.6464 7.35355C12.4512 7.15829 12.4512 6.84171 12.6464 6.64645Z" fill="#414141"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 6.64645C5.84171 6.45118 6.15829 6.45118 6.35355 6.64645L11.3536 11.6464C11.5488 11.8417 11.5488 12.1583 11.3536 12.3536L6.35355 17.3536C6.15829 17.5488 5.84171 17.5488 5.64645 17.3536C5.45118 17.1583 5.45118 16.8417 5.64645 16.6464L10.2929 12L5.64645 7.35355C5.45118 7.15829 5.45118 6.84171 5.64645 6.64645Z" fill="#414141"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}