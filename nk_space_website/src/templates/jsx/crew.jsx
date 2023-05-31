import '../css/crew.css'
import '../css/global.css'
import { NavBar } from '../../components/navBar/navBar'
import { CrewComponent } from '../../components/crew_component/crewComponent'

export const Crew = () => {
    return (
        <div className='columnContainer containerCrewPage'>
            <NavBar/>
            <CrewComponent crewMember = {"Douglas Hurley"}></CrewComponent>
        </div>
    )
}