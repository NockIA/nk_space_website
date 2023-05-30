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
    const [currentPlanet , setCurrentPlanet] = useState(props.planet)
    let imgSrc = ""
    let datas = false
    console.log('res',result);
    if (result != undefined && result.length != 0) {
        datas = result
    }
    return (
        <div className='rowContainer alignCenter containerPlanetComp'>   
            <img className='planetImage' src={Object.values(result[currentPlanet])[1].png} alt="planet_image" />
            <div className='columnContainer containerPlanetContent '>
                <nav className='rowContainer containerPlanetMenu'>
                    {datas && Object.keys(datas).map(planetName => (
                        <h2 onClick={() => setCurrentPlanet(planetName)} className='navText'>{planetName}</h2>
                    ))}
                </nav>
                <h2 className='planetName'>{currentPlanet}</h2>
                <p className='descriptionPlanet'>{datas && datas[currentPlanet].description}</p>
                <span className='lineDescription'></span>
                <div className='rowContainer containerPlanetStats'>
                    <div className='colunmContainer'>
                        <p className='subHeading_2 coloredText'>AVG. DISTANCE</p>
                        <p className='subHeading_1'>{datas && datas[currentPlanet].distance}</p>
                    </div>
                    <div className='colunmContainer'>
                        <p className='subHeading_2 coloredText'>Est. travel time</p>
                        <p className='subHeading_1'>{datas && datas[currentPlanet].travel}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}