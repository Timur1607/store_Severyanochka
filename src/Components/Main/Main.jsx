import Promotion from '../Promotion/Promotion'
import NewProducts from '../NewProducts/NewProducts'
import s from './Main.module.css'
import Special from '../Special/Special'
export default function Main(){
    return(
        <>
            <Promotion/>
            <NewProducts/>
            {/* <Special/> */}
        </>
    )
}