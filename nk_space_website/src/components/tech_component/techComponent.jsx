import './techComponent.css'
import '../../templates/css/global.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const TechComponent = (props) => {
    const [result, setResult] = useState([])
    const [launchImg, setLaunchImg] = useState("")
    const [currentStep , setCurrentStep] = useState(props.launchState)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        axios.get("/api/Tech")
          .then((response) => setResult(JSON.parse(response.data)))
          .catch(console.error);
    }, []);
    
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
    
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    useEffect(() => {
        if (result !== undefined && result.length !== 0) {
            if (screenWidth < 1200) {
                setLaunchImg(Object.values(result[currentStep])[1].landscape);
            } else {
                setLaunchImg(Object.values(result[currentStep])[1].portrait);
            }
        }
    }, [result, currentStep, screenWidth]);
    
    function setLaunch(name) {
        setLaunchImg(name);
        setCurrentStep(name);
    }
    
    return (
        <div className='containerContentTech'>
            {(screenWidth < 1200) && <img className='imgTech' src={launchImg} alt="lauch_img" />}
            <nav className='containerMenuLauch'>
                {Object.keys(result).map((stepLauch,x) => (
                   <span key={x} onClick={() => setLaunch(stepLauch)} style={{backgroundColor :( stepLauch == currentStep) && "white",color: (stepLauch == currentStep) && 'black'}}className='btnLauch'>{x}</span>
                ))}
            </nav>
            <div className='columnContainer techDescription'>
                <h5>THE TERMINOLOGY…</h5>
                <h3>{currentStep}</h3>
                <p>{result[currentStep] && result[currentStep].description}</p>
            </div>
            {(screenWidth >= 1200) && <img src={launchImg} alt="lauch_img" />}
        </div>
    )
}