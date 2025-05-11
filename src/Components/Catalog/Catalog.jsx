import Container from '../Container/Container'
import Location from '../Location/Location'
import s from './Catalog.module.css'
import {data} from '../../../data'
export default function Catalog(){
    return(
        <main className={s.main}>
            <Container>
                <Location props='Каталог'/>
                <h1 className={s.h1}>Каталог</h1>
                <div className={s.sections}>
                    {Object.values(data).map((el)=> {
                        return(
                            Object.values(el).map((element, i)=> {
                                return(
                                    <div style={{backgroundImage: `url(/img/catalog/${Object.keys(el)[i]}.webp)`}} className={`${(i === 0 || i === 9 || i === 11) ? s.sectionB : s.section}`} key={i}>
                                        <p className={s.section__p}>{element.name}</p>
                                        <div className={`${s.gradient} `}></div>
                                        <div className={`${s.gradientHover}`}></div>
                                    </div>
                                )
                            })
                        )
                    })}
                </div>
            </Container>
        </main>
    )
}