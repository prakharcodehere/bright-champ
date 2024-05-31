import "./Welcome.css"
import MonkeyImg from "../../assets/monkey.png"
import CalloutImg from "../../assets/callout.png"

import Button from "../Button/Button"

interface WelcomeProps {
  handleNext: () => void;
  text: string;
  calloutText:string;
}


const  Welcome: React.FC<WelcomeProps> = ({handleNext, text, calloutText}) => {

  return (
    <div className="w-full h-screen welcome-page relative">

      <div>
        <img src={MonkeyImg} alt="monkey-img" className="absolute w-96 h-auto top-28 right-[40%]" />
      </div>
      <div className="callout">
        <span className="callout-text absolute  w-fit  h-auto top-24 text-center text-blue-700 text-3xl font-semibold right-[40%] z-10">{calloutText}</span>
      </div>
      <img src={CalloutImg} alt="callout"  className="absolute max-w-64 h-auto top-16 right-[35%]"/>
    
<div className="absolute w-fit h-auto bottom-16 right-12 m-4">
<Button text={text} onClick={handleNext}  />
</div>
  
    </div>

  )
}

export default Welcome