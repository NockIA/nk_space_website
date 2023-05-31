import '../css/global.css'
import '../css/technology.css'
import { NavBar } from '../../components/navBar/navBar'
import { TechComponent } from '../../components/tech_component/techComponent'

export const Technology = () => {
    return (
        <div className='columnContainer techPageContainer'>
            <NavBar/>
            <div className='rowContainer titleTechPageContainer'>
                <h5 className='numberTitleTechPage'>03</h5>
                <h5 className='titleTechPage'>SPACE LAUNCH 101</h5>
            </div>
            <TechComponent launchState={"Launch vehicle"}></TechComponent>
        </div>
    )
}