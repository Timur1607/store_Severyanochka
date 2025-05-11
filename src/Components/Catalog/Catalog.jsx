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
                                console.log(Object.keys(el));
                                return(
                                    <div style={{backgroundImage: `url(/img/catalog/${Object.keys(el)[i]}.webp)`}} className={`${s.section} ${(i === 0 || i === 9 || i === 11) ? s.sectionB : ''}`} key={i}>
                                        <p className={s.section__p}>{element.name}</p>
                                        <div className={s.gradient}></div>
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