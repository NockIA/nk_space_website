import '../css/crew.css'
import '../css/global.css'
import { NavBar } from '../../components/navBar/navBar'
import { CrewComponent } from '../../components/crew_component/crewComponent'
import { useState,useEffect } from 'react'

export const Crew = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
      }, [screenWidth]);
    return (
        <div className='columnContainer containerCrewPage' style={{backgroundImage:((screenWidth < 640) && `url(${"./src/assets/crew/background-crew-desktop.jpg"})`) || ((screenWidth >= 640 && screenWidth < 1000) && `url(${"./src/assets/crew/background-crew-tablet.jpg"})`) || `url(${"./src/assets/crew/background-crew-desktop.jpg"})` }}>
            <NavBar/>
            <CrewComponent crewMember = {"Douglas Hurley"}></CrewComponent>
        </div>
    )
}