import s from './Promotion.module.css'
import Container from '../Container/Container'
import { data } from '/data.js'
import Card from '../Card/Card'
let stopper = 0
export default function Promotion() {
    return (
        <>
            <div className={s.promotion}>
                <Container>
                    <div className={s.promotion__titles}>
                        <h2 className={s.promotion__title}>Акции</h2>
                        <a className={s.promotion__link} href="">Все акции <svg className={s.promotion__linkSVG} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#606060" />
                        </svg></a>
                    </div>
                    <div className={s.promotion__cards}>
                        {Object.keys(data).map((el, i) => {
                            return (
                                Object.keys(data[el]).map((element, index) => {
                                    console.log(element)
                                    return (
                                        data[el][Object.keys(data[el])[index]]['items'].map((el, i) => {
                                            if (el.prices.haveDiscount && stopper < 4) {
                                                stopper += 1
                                                return (
                                                    <Card key={i} withCard={el.prices.price.withDiscount} withoutCard={el.prices.price.withoutDiscount} img={el.img} name={el.name}rating={el.rating} />
                                                )
                                            }
                                        })
                                    )
                                }))
                        })}
                    </div>
                </Container>
            </div>
        </>
    )
}