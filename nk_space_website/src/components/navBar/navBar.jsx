import './navBar.css'
import '../../templates/css/global.css'
import { useState, useEffect } from 'react'

export const NavBar = () => {

    const [isActive,setIsActive] = useState([true,false,false,false])
    useEffect(() => {
        if (document.location.href === 'http://localhost:5173/Crew') {
          setIsActive([false, false, true, false]);
        } else if (document.location.href === 'http://localhost:5173/Destination') {
          setIsActive([false, true, false, false]);
        } else if (document.location.href === 'http://localhost:5173/Technology') {
          setIsActive([false, false, false, true]);
        } else {
          setIsActive([true, false, false, false]);
        }
      }, []);
    return (
        <div className='rowContainer containerNav'>
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <span className='line'></span>
            <nav className='rowContainer containerLinks'>
                <a href="/">
                    <div className='rowContainer containerCat alignCenter' style={{borderBottom : (isActive[0] == true) && " 3px solid white"}}>
                        <h2 className='nbNav navText'>00</h2>
                        <h2 className='navText'>Home</h2>
                    </div>
                </a>
                <a href="/Destination">
                    <div className='rowContainer containerCat alignCenter' style={{borderBottom : (isActive[1]== true) && " 3px solid white"}}>
                        <h2 className='nbNav navText'>01</h2>
                        <h2 className='navText'>Destination</h2>
                    </div>
                </a>
                <a href="/Crew">
                    <div className='rowContainer containerCat alignCenter' style={{borderBottom : (isActive[2]== true) && " 3px solid white"}}>
                        <h2 className='nbNav navText'>02</h2>
                        <h2 className='navText'>Crew</h2>
                    </div>
                </a>
                <a href="/Technology">
                    <div className='rowContainer containerCat alignCenter'style={{borderBottom : (isActive[4]== true) && " 3px solid white"}}>
                        <h2 className='nbNav navText'>03</h2>
                        <h2 className='navText'>Technology</h2>
                    </div>
                </a>
            </nav>
        </div>
    )
}