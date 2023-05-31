import './techComponent.css'
import '../../templates/css/global.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const TechComponent = (props) => {
    useEffect (() => {
        axios.get("/api/Tech").then((response) => setResult(JSON.parse(response.data)))
        .catch(console.error)
    }, [])
    const [result, setResult] = useState([])
    const [launchImg, setLaunchImg] = useState("")
    const [currentStep , setCurrentStep] = useState(props.launchState)
    function setLaunch (name) {
        setLaunchImg(name)
        setCurrentStep(name)
    }
    useEffect(() => {
        if (result !== undefined && result.length !== 0) {
            setLaunchImg(Object.values(result[currentStep])[1].portrait);
            
        }
    }, [result, currentStep]);
    return (
        <div className='rowContainer containerContentTech'>
            <nav className='colunmContainer containerMenuLauch'>
                {Object.keys(result).map((stepLauch,x) => (
                   <span key={x} onClick={() => setLaunch(stepLauch)} style={{backgroundColor :( stepLauch == currentStep) && "white",color: (stepLauch == currentStep) && 'black'}}className='btnLauch'>{x}</span>
                ))}
            </nav>
            <div className='colunmContainer techDescription'>
                <h5>THE TERMINOLOGY…</h5>
                <h3>{currentStep}</h3>
                <p>{result[currentStep] && result[currentStep].description}</p>
            </div>
            <img src={launchImg} alt="lauch_img" />
        </div>
    )
}