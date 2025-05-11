import { useNavigate } from 'react-router-dom'
import Container from '../Container/Container'
import s from './About.module.css'
import check from '/img/other/check.svg'
import logo from '/img/logo/aboutLogo.svg'
import Location from '../Location/Location'
export default function About(){
    const navigate = useNavigate()
    return(
        <main className={s.main}>
            <Container>
                <Location props='О компании'/>
            </Container>
            <div className={s.about}>
                <Container>
                    <h1 className={s.about__h2}>О компании</h1>
                    <p className={s.about__p}>Мы непрерывно развиваемся и работаем над совершенствованием сервиса, заботимся о наших клиентах, стремимся к лучшему будущему.</p>
                </Container>
            </div>
            <Container>
                <div className={s.points}>
                    <div className={s.point}>
                        <img className={s.point__img} src={check} alt="check" />
                        <div className={s.point__content}>
                            <p className={s.point__content_title}>Мы занимаемся<br className={s.br}/> розничной <br className={s.br__amedia}/>торговлей</p>
                            <p className={s.point__content_text}>Более 20 лет.</p>
                        </div>
                    </div>
                    <div className={s.point}>
                        <img className={s.point__img} src={check} alt="check" />
                        <div className={s.point__content}>
                            <p className={s.point__content_title}>Основная миссия компании</p>
                            <p className={s.point__content_text}>Максимальное качество<br className={s.br}/> товаров и услуг по<br/> доступной цене.</p>
                        </div>
                    </div>
                    <div className={s.point}>
                        <img className={s.point__img} src={check} alt="check" />
                        <div className={s.point__content}>
                            <p className={s.point__content_title}>Отличительная черта нашей сети</p>
                            <p className={s.point__content_text}>Здоровая и полезная продукция местного производства внаших магазинах.</p>
                        </div>
                    </div>
                </div>
                <div className={s.thanks}>
                    <div className={s.thanks__logo}>
                        <img src={logo} alt="logo" />
                        <svg className={s.triangle} xmlns="http://www.w3.org/2000/svg" width="40" height="42" viewBox="0 0 40 42" fill="none">
                            <path d="M40 0.5L40 41.5L0 0.499998L40 0.5Z" fill="#E5FFDE"/>
                        </svg>
                    </div>
                    <div className={s.thanks__text}>
                        <p className={s.thanks__text_p}>Спасибо за то, что вы с нами. Северяночка, везет всегда!</p>
                    </div>
                </div>
            </Container>
        </main>
    )
}