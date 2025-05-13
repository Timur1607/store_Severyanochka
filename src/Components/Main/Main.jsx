import Promotion from '../Promotion/Promotion'
import NewProducts from '../NewProducts/NewProducts'
import s from './Main.module.css'
import Special from '../Special/Special'
export default function Main() {
    return (
        <>
            <h1 className={s.h1}>Интернет-магазин Северяночка</h1>
            <Promotion />
            <NewProducts />
            {/* <Special/> */}
        </>
    )
}