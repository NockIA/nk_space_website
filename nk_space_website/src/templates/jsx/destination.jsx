import '../css/destination.css'
import '../css/global.css'
import { NavBar } from '../../components/navBar/navBar'
import { DestinationComponent } from '../../components/destination_component/destination_component'
import { useState,useEffect } from 'react'

export const Destination = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
      }, [screenWidth]);
    return (
        <div className='columnContainer containerDestinationPage' style={{backgroundImage:((screenWidth < 640) && `url(${"./src/assets/destination/background-destination-mobile.jpg"})`) || ((screenWidth >= 640 && screenWidth < 1100) && `url(${"./src/assets/destination/background-destination-tablet.jpg"})`) || `url(${"./src/assets/destination/background-destination-desktop.jpg"})` }}>
            <NavBar/>
            <div className='rowContainer titleDestinationPageContainer'>
                <h5 className='numberTitleDestinationPage'>01</h5>
                <h5 className='titleDestinationPage'>Pick your destination</h5>
            </div>
            <DestinationComponent planet={"Moon"}></DestinationComponent>
        </div>
    )
}