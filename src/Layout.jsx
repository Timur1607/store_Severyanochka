import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HeaderAmedia from './Components/HeaderAmedia/HeaderAmedia'

function Layout() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
            <HeaderAmedia/>
        </>
    )
}

export default Layout