import s from './Card.module.css'
let localStorage = window.localStorage
let save = []

if (localStorage.getItem('favourite') != undefined) {
    let strLocal = JSON.parse(localStorage.getItem('favourite'))
    for (let index = 0; index < strLocal.length; index++) {
        save.push(strLocal[index])
    }
}
export default function Card(props) {
    let flag = false
    // console.log(props.id);


    function setItem(el, id) {
        let flag = false
        for (let index = 0; index < save.length; index++) {
            if (Number(save[index]) == Number(id)) {
                flag = true
                removeElement(index, el.target)
                el.target.closest('svg').classList.add(s.momentDislike)
            }
        }
        if (!flag) {
            el.target.closest('svg').classList.add(s.momentLiked)
            console.log(id)
            save.push(id)
            localStorage.setItem('favourite', JSON.stringify(save))
        }
    }

    function setStars(rating) {
        let toPush = []

        for (let index = 0; index < rating; index++) {
            toPush.push(
                <svg key={index} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z" fill="#FF6633" />
                </svg>
            )
        }
        if (5 - rating != 0) {
            for (let index = 0; index < (5 - rating); index++) {
                toPush.push(
                    <svg key={Math.random()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.10326 1.81698C7.47008 1.07374 8.52992 1.07374 8.89674 1.81699L10.1185 4.29249C10.2641 4.58763 10.5457 4.7922 10.8714 4.83953L13.6033 5.2365C14.4235 5.35568 14.751 6.36365 14.1575 6.94219L12.1807 8.8691C11.945 9.09884 11.8375 9.42984 11.8931 9.75423L12.3598 12.4751C12.4999 13.292 11.6424 13.9149 10.9088 13.5293L8.46534 12.2446C8.17402 12.0915 7.82598 12.0915 7.53466 12.2446L5.09119 13.5293C4.35756 13.9149 3.50013 13.292 3.64024 12.4751L4.1069 9.75423C4.16254 9.42984 4.05499 9.09884 3.81931 8.8691L1.8425 6.94219C1.24898 6.36365 1.57649 5.35568 2.39671 5.2365L5.12859 4.83953C5.4543 4.7922 5.73587 4.58763 5.88153 4.29249L7.10326 1.81698Z" fill="#BFBFBF" />
                    </svg>
                )
            }
        }
        // console.log(toPush);
        return toPush
    }

    function removeElement(index, el) {

        el.closest('svg').classList.add(s.momentDislike)
        save.splice(index, 1)
        localStorage.setItem('favourite', JSON.stringify(save))
    }

    if (!props.favourite) {
        return (
            <>
                <article key={props.id} data-id={props.id} className={props.count > 0 ? s.card : `${s.card} ${s.opacityLow}`}>
                    <div className={s.card__imgBlock}>
                        <img className={s.card__img} src={props.img} alt="" />
                    </div>
                    <div className={s.card__like}>
                        {console.log(save, props.id)}
                        {save.map((element, index) => {
                            console.log(element, props.id);
                            if (Number(props.id) == Number(element)) {
                                flag = true
                                return (
                                    <svg key={index} onClick={(el) => { removeElement(index, el.target) }} className={s.card__likeBTN} xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                        <path d="M17.3653 0C15.1604 0 13.2067 1.07706 12 2.73408C10.7933 1.07706 8.84098 0 6.63474 0C2.9706 0 0 2.9706 0 6.63474C0 12.2098 12 21.2004 12 21.2004C12 21.2004 24 12.2098 24 6.63474C24 2.9706 21.0294 0 17.3653 0Z" stroke="#ED1944" fill="#ED1944" />
                                    </svg>
                                )
                            }
                        })}
                        {!flag &&
                            <svg onClick={(el) => { setItem(el, el.target.closest('article').getAttribute('data-id')) }} className={s.card__likeBTN} xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                <path d="M17.3653 0C15.1604 0 13.2067 1.07706 12 2.73408C10.7933 1.07706 8.84098 0 6.63474 0C2.9706 0 0 2.9706 0 6.63474C0 12.2098 12 21.2004 12 21.2004C12 21.2004 24 12.2098 24 6.63474C24 2.9706 21.0294 0 17.3653 0Z" stroke="gray" fill="transparent" />
                            </svg>}
                    </div>
                    <div className={s.card__all}>
                        <div className={s.card__prices}>
                            {props.withCard == props.withoutCard ?
                                <div className={s.card__withCard}>
                                    <p className={s.card__withCardP}>{props.withCard} <span>₽</span></p>
                                </div>
                                :
                                <>
                                    <div className={s.card__withCard}>
                                        <p className={s.card__withCardP}>{props.withCard} <span>₽</span></p>
                                        <p className={s.card__type}>С картой</p>
                                    </div>
                                    <div className={s.card__withoutCard}>
                                        <p className={s.card__withoutCardP}>{props.withoutCard} <span>₽</span></p>
                                        <p className={s.card__type}>Обычная</p>
                                    </div>
                                </>}
                        </div>
                        <p className={s.card__name}>{props.name}</p>
                        <div className={s.card__rating}>
                            {setStars(props.rating)}
                        </div>
                        <button className={props.count > 0 ? s.card__btn : `${s.card__btn} ${s.disableClick}`}>В корзину</button>
                    </div>
                </article>
            </>
        )
    } else {
        for (let index = 0; index < save.length; index++) {
            if (Number(props.id) == Number(save[index])) {
                
                return (
                    <>
                        <article key={props.id} data-id={props.id} className={props.count > 0 ? s.card : `${s.card} ${s.opacityLow}`}>
                            <div className={s.card__imgBlock}>
                                <img className={s.card__img} src={props.img} alt="" />
                            </div>
                            <div className={s.card__like}>
                                {/* {console.log(save, props.id)} */}
                                {save.map((element, index) => {
                                    // console.log(element, props.id);
                                    if (Number(props.id) == Number(element)) {
                                        flag = true
                                        return (
                                            <svg key={index} onClick={(el) => { removeElement(index, el.target) }} className={s.card__likeBTN} xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                                <path d="M17.3653 0C15.1604 0 13.2067 1.07706 12 2.73408C10.7933 1.07706 8.84098 0 6.63474 0C2.9706 0 0 2.9706 0 6.63474C0 12.2098 12 21.2004 12 21.2004C12 21.2004 24 12.2098 24 6.63474C24 2.9706 21.0294 0 17.3653 0Z" stroke="#ED1944" fill="#ED1944" />
                                            </svg>
                                        )
                                    }
                                })}
                                {!flag &&
                                    <svg onClick={(el) => { setItem(el, el.target.closest('article').getAttribute('data-id')) }} className={s.card__likeBTN} xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                        <path d="M17.3653 0C15.1604 0 13.2067 1.07706 12 2.73408C10.7933 1.07706 8.84098 0 6.63474 0C2.9706 0 0 2.9706 0 6.63474C0 12.2098 12 21.2004 12 21.2004C12 21.2004 24 12.2098 24 6.63474C24 2.9706 21.0294 0 17.3653 0Z" stroke="gray" fill="transparent" />
                                    </svg>}
                            </div>
                            <div className={s.card__all}>
                                <div className={s.card__prices}>
                                    {props.withCard == props.withoutCard ?
                                        <div className={s.card__withCard}>
                                            <p className={s.card__withCardP}>{props.withCard} <span>₽</span></p>
                                        </div>
                                        :
                                        <>
                                            <div className={s.card__withCard}>
                                                <p className={s.card__withCardP}>{props.withCard} <span>₽</span></p>
                                                <p className={s.card__type}>С картой</p>
                                            </div>
                                            <div className={s.card__withoutCard}>
                                                <p className={s.card__withoutCardP}>{props.withoutCard} <span>₽</span></p>
                                                <p className={s.card__type}>Обычная</p>
                                            </div>
                                        </>}
                                </div>
                                <p className={s.card__name}>{props.name}</p>
                                <div className={s.card__rating}>
                                    {setStars(props.rating)}
                                </div>
                                <button className={props.count > 0 ? s.card__btn : `${s.card__btn} ${s.disableClick}`}>В корзину</button>
                            </div>
                        </article>
                    </>
                )

            }
        }
    }
}