import { useState, useEffect } from 'react';
import s from './Title.module.css'
export default function Title(props){
    const [size, setSize] = useState(Array.isArray(props.props) ? props.props[1] : undefined)
    let set = ''
    useEffect(()=>{
        switch (Array.isArray(props.props) ? props.props[1] : undefined) {
            case 1:
                set = s.medium
                break;
            case 2:
                set = s.small
                break;
            default:
                set = ''
                break;
        }
        setSize(set)
    }, [])
    
    
    return(
        <h1 className={`${s.h1} ${size}`}>
            {Array.isArray(props.props) ? props.props[0] : props.props}
        </h1>
    )
}