import '../css/global.css'
import '../css/technology.css'
import { NavBar } from '../../components/navBar/navBar'
import { TechComponent } from '../../components/tech_component/techComponent'
import { useState,useEffect } from 'react'

export const Technology = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
      }, [screenWidth]);
    return (
        <div className='columnContainer techPageContainer' style={{backgroundImage:((screenWidth < 640) && `url(${"./src/assets/technology/background-technology-mobile.jpg"})`) || ((screenWidth >= 640 && screenWidth < 1100) && `url(${"./src/assets/technology/background-technology-tablet.jpg"})`) || `url(${"./src/assets/technology/background-technology-desktop.jpg"})` }}>
            <NavBar/>
            <div className='rowContainer titleTechPageContainer'>
                <h5 className='numberTitleTechPage'>03</h5>
                <h5 className='titleTechPage'>SPACE LAUNCH 101</h5>
            </div>
            <TechComponent launchState={"Launch vehicle"}></TechComponent>
        </div>
    )
}