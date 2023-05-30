import '../css/home.css'
import '../css/global.css'
import { NavBar } from '../../components/navBar/navBar'
import { DestinationComponent } from '../../components/destination_component/destination_component'

export const Home = () => {
    return (
        <div className='columnContainer containerHomePage'>
            <NavBar/>
            <div className='rowContainer titleHomePageContainer'>
                <h2 className='numberTitleHomePage'>01</h2>
                <h2 className='titleHomePage'>Pick your destination</h2>
            </div>
            <DestinationComponent planet={"Moon"}></DestinationComponent>
        </div>
    )
}