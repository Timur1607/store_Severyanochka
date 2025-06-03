import { useNavigate } from 'react-router-dom';
import Container from '../Container/Container'
import Location from '../Location/Location'
import s from './Catalog.module.css'
import {data} from '../../../data'
import Title from '../Title/Title';

export default function Catalog(){
    const navigate = useNavigate();

    function chapter(el){
        navigate('/chapter', {
            state: {
                loc:{
                    LocRu: `${el.currentTarget.children[0].textContent}`,
                    LocEn: `${el.currentTarget.getAttribute('id')}`,
                    prevLoc: [['Каталог', 'catalog'], [el.currentTarget.children[0].textContent, el.currentTarget.getAttribute('id')]],
                }
            }
        })
    }
    return(
        <main className={s.main}>
            <Container>
                <Location props={['Каталог']}/>
                <Title props={['Каталог']}/>
                <div className={s.sections}>
                    {Object.values(data).map((el)=> {
                        return(
                            Object.values(el).map((element, i)=> {
                                return(
                                    <div onClick={(el)=> chapter(el)} style={{backgroundImage: `url(/img/catalog/${Object.keys(el)[i]}.webp)`}} id={Object.keys(el)[i]} className={`${(i === 0 || i === 9 || i === 11) ? s.sectionB : s.section}`} key={i}>
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