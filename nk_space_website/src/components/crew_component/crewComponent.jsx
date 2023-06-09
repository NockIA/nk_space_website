import './crewComponent.css'
import '../../templates/css/global.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const CrewComponent = (props) => {
    useEffect (() => {
        axios.get("/api/Crew").then((response) => setResult(JSON.parse(response.data)))
        .catch(console.error)
    }, [])
    const [result, setResult] = useState([])
    const [currentCrewMember , setCurrentCrewMember] = useState(props.crewMember)
    const [currentImg , setCurrentImg] = useState("")
    function setCrew (name) {
        setCurrentImg(name)
        setCurrentCrewMember(name)
    }
    useEffect(() => {
        if (result !== undefined && result.length !== 0) {
            
          setCurrentImg(Object.values(result[currentCrewMember])[1].png);
        }
    }, [result, currentCrewMember]);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };      
        window.addEventListener('resize', handleResize);
      }, [screenWidth]);

    const content = ( 
        <div className='columnContainer containerDescpCrew'>
            <h4 className='roleColor'>{result[currentCrewMember] && result[currentCrewMember].role}</h4>
            <h3 className='roleMargin'>{result[currentCrewMember] && result[currentCrewMember].name}</h3>
            <p className='bioSize'>{result[currentCrewMember] && result[currentCrewMember].bio}</p>
        </div>
    )
    const navMenu = (
        <nav className='rowContainer navCrewMembersContainer '>
            {Object.keys(result).map((crewMember,x) => (
                <span key={x} onClick={() => setCrew(crewMember)} style={{backgroundColor: (crewMember == currentCrewMember) && "white"}} className='navText'></span>
            ))}
        </nav>
    )
    return (
        <div className='containerCrewComponent'>
            <div className='columnContainer contentContainerCrew'>
                <div className='rowContainer titleCrewPageContainer'>
                    <h5 className='numberTitleCrewPage'>02</h5>
                    <h5 className='titleCrewPage'>Meet your crew</h5>
                </div>
                {(screenWidth < 760) && <img className='crewImg' src={currentImg} alt="crew_img" />}
                <span className='lineCrew'></span>
                {(screenWidth < 760) && navMenu}
                {content}
                {(screenWidth >= 760) && navMenu}
            </div>
            {(screenWidth > 760) && <img className='crewImg' src={currentImg} alt="crew_img" />}
        </div>
    )
}