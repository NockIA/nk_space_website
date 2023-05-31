import './navBar.css'
import '../../templates/css/global.css'
import { useState, useEffect } from 'react'

export const NavBar = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isActive,setIsActive] = useState([true,false,false,false])
    const [isMobile,setIsMobile] = useState(false)
    const [isComputer, setIsComputer] = useState(true)
    const [isDeployed ,setIsDeployed] = useState(true)
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
      useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
        if (screenWidth < 760) {
          setIsMobile(true);
          setIsComputer(false);
          setIsDeployed(true)
        } else {
          setIsComputer(true);
          setIsMobile(false);
          setIsDeployed(false)
        }
      }, [screenWidth]);
    return (
        <div className='rowContainer containerNav'>
            <svg className='logo' xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            <span className='line'></span>
            <nav className='containerLinks' style={{backgroundColor : isMobile && (isDeployed == false) && 'rgba(255, 255, 255, 0.04)',backdropFilter : isMobile && (isDeployed == false) && "blur(40.7742px)" }}>
                {isMobile && isDeployed && <svg onClick={() => setIsDeployed(false)} className='burgerPlacement' xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>}
                {isMobile && (isDeployed == false) && <svg onClick={() => setIsDeployed(true)} className='burgerPlacement' xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>}
                {(isDeployed == false)  && <div className='containerLinksGap'>  
                    <a href="/">
                        <div className='rowContainer containerCat ' style={{borderRight: isMobile && (isActive[0] == true) && " 3px solid white" ,borderBottom : isComputer && (isActive[0]== true) && " 3px solid white"}}>
                            <h2 className='nbNav navText'>00</h2>
                            <h2 className='navText'>Home</h2>
                        </div>
                    </a>
                    <a href="/Destination">
                        <div className='rowContainer containerCat ' style={{borderRight: isMobile && (isActive[1] == true) && " 3px solid white" ,borderBottom : isComputer && (isActive[1]== true) && " 3px solid white"}}>
                            <h2 className='nbNav navText'>01</h2>
                            <h2 className='navText'>Destination</h2>
                        </div>
                    </a>
                    <a href="/Crew">
                        <div className='rowContainer containerCat ' style={{borderRight: isMobile && (isActive[2]==true )&& " 3px solid white" ,borderBottom : isComputer && (isActive[2]== true) && " 3px solid white"}}>
                            <h2 className='nbNav navText'>02</h2>
                            <h2 className='navText'>Crew</h2>
                        </div>
                    </a>
                    <a href="/Technology">
                        <div className='rowContainer containerCat 'style={{borderRight: isMobile && (isActive[3]==true) && " 3px solid white" ,borderBottom : isComputer && (isActive[3]== true) && " 3px solid white"}}>
                            <h2 className='nbNav navText'>03</h2>
                            <h2 className='navText'>Technology</h2>
                        </div>
                    </a>
                </div>}
            </nav>
        </div>
    )
}