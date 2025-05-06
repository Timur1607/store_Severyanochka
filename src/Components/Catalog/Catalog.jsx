import Container from '../Container/Container'
import Location from '../Location/Location'
import s from './Catalog.module.css'
export default function Catalog(){
    return(
        <main className={s.main}>
            <Container>
                <div className={s.content}>
                    <Location props='Каталог'/>
                </div>
            </Container>
        </main>
    )
}