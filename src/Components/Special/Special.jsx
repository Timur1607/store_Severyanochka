import s from './Special.module.css'
import Container from '../Container/Container'

export default function Special() {

    return (
        <>
            <div className={s.special}>
                <Container>
                    <h2 className={s.special__title}>Специальные предложения</h2>
                    <div className={s.special__cards}>
                        <article className={`${s.special__card} ${s.card_orange}`}>
                            <div className={s.card__texts}>
                                <p className={s.card__title}>Оформите карту <br /> «Северяночка»</p>
                                <p className={s.card__text}>И получайте бонусы при покупке в магазинах и на сайте</p>
                            </div>
                            <div className={s.card__img}>
                                <img className={s.card__imgCard} src="/img/Special/card.jpg" alt="" />
                            </div>
                        </article>

                        <article className={`${s.special__card} ${s.card_green}`}>
                            <div className={s.card__texts}>
                                <p className={s.card__title}>Покупайте <br /> акционные товары</p>
                                <p className={s.card__text}>И получайте вдвое больше бонусов</p>
                            </div>
                            <div className={s.card__img}>
                                <img className={s.card__imgBasket} src="/img/Special/basket.png" alt="" />
                            </div>
                        </article>
                    </div>
                </Container>
            </div>
        </>
    )
}