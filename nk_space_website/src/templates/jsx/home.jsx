import { NavBar } from '../../components/navBar/navBar'
import '../css/home.css'
import { useState,useEffect } from 'react';

export const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
      }, [screenWidth]);
    return (
        <div className='colunmContainer containerHomePage' style={{backgroundImage:((screenWidth < 640) && `url(${"./src/assets/home/background-home-mobile.jpg"})`) || ((screenWidth >= 640 && screenWidth < 1100) && `url(${"./src/assets/home/background-home-tablet.jpg"})`) || `url(${"./src/assets/home/background-home-desktop.jpg"})` }}>
            <NavBar/>
            <div className='columnContainer containerTextHome'>
                <h5>SO, YOU WANT TO TRAVEL TO</h5>
                <h1 className='titleHomePage'>SPACE</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </div>
            <a className='btnHomePage' href="/Destination">Explore</a>
        </div>
    )
}