import { NavBar } from '../../components/navBar/navBar'
import '../css/home.css'

export const Home = () => {
    return (
        <div className='columnContainer containerHomePage'>
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