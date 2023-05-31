import './destination_component.css'
import '../../templates/css/global.css'
import axios from 'axios'
import { useEffect, useState  } from 'react'


export const DestinationComponent = (props) => {
    useEffect (() => {
        axios.get("/api/Destination").then((response) => setResult(JSON.parse(response.data)))
        .catch(console.error)
    }, [])
    const [result, setResult] = useState([])
    const [currentImg , setCurrentImg] = useState("")
    const [currentPlanet , setCurrentPlanet] = useState(props.planet)
    function setPlanet (name) {
        setCurrentImg(name)
        setCurrentPlanet(name)
    }
    useEffect(() => {
        if (result !== undefined && result.length !== 0) {
          setCurrentImg(Object.values(result[currentPlanet])[1].png);
        }
      }, [result, currentPlanet]);
    return (
        <div className='rowContainer containerPlanetComp'>   
            <img className='planetImage' src={currentImg} alt="planet_image" />
            <div className='columnContainer containerPlanetContent '>
                <nav className='rowContainer containerPlanetMenu'>
                    {Object.keys(result).map((planetName,x) => (
                        <h2 key={x} onClick={() => setPlanet(planetName)} style={{borderBottom: (planetName == currentPlanet) && "3px solid white"}} className='navText'>{planetName}</h2>
                    ))}
                </nav>
                <h2 className='planetName'>{currentPlanet}</h2>
                <p className='descriptionPlanet'>{result[currentPlanet] && result[currentPlanet].description}</p>
                <span className='lineDescription'></span>
                <div className='rowContainer containerPlanetStats'>
                    <div className='colunmContainer'>
                        <p className='subHeading_2 coloredText'>AVG. DISTANCE</p>
                        <p className='subHeading_1'>{result[currentPlanet] && result[currentPlanet].distance}</p>
                    </div>
                    <div className='colunmContainer'>
                        <p className='subHeading_2 coloredText'>Est. travel time</p>
                        <p className='subHeading_1'>{result[currentPlanet] && result[currentPlanet].travel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}