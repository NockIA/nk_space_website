import '../css/destination.css'
import '../css/global.css'
import { NavBar } from '../../components/navBar/navBar'
import { DestinationComponent } from '../../components/destination_component/destination_component'

export const Destination = () => {
    return (
        <div className='columnContainer containerDestinationPage'>
            <NavBar/>
            <div className='rowContainer titleDestinationPageContainer'>
                <h5 className='numberTitleDestinationPage'>01</h5>
                <h5 className='titleDestinationPage'>Pick your destination</h5>
            </div>
            <DestinationComponent planet={"Moon"}></DestinationComponent>
        </div>
    )
}