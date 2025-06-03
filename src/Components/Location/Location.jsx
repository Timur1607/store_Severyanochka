import { useNavigate } from 'react-router-dom'
import s from './Location.module.css'
export default function Location(props){
    const navigate = useNavigate()
    // console.log(props.props);
    function test(){

    }
    
    return(
        <div className={s.location}>
            <p className={s.location__start} onClick={() => navigate('/')}>Главная</p>
            {props.props.map((el, i) => {
                return(
                    <div key={i} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px'}}>
                        <svg className={s.location__img} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z" fill="#414141"/>
                        </svg>
                        <p onClick={Array.isArray(el) ? () => navigate(`/${el[1]}`): test()} 
                           className={i+1 === props.props.length ? s.location__end : s.location__start}
                        >
                            {Array.isArray(el) ? el[0]: el}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}