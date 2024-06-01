import "./Welcome.css"
import MonkeyImg from "../../assets/monkey.png"
import CalloutImg from "../../assets/callout.png"
import Banana from "../../assets/banana.png"
import Button from "../Button/Button"

interface WelcomeProps {
  handleNext: () => void;
  text: string;
  calloutText:string;
  currentPage: number; 
}


const  Welcome: React.FC<WelcomeProps> = ({handleNext, text, calloutText, currentPage}) => {

  return (
    <div className="w-full h-screen welcome-page relative">

      <div  >
        <img src={MonkeyImg} alt="monkey-img" className="absolute w-96 h-auto top-28 right-[40%]" />
      </div>

      <div className="callout">
        <span className={`callout-text absolute w-[84%] md:max-w-sm h-auto top-20 md:top-24 left-[43%] z-10 text-center text-blue-700 font-bold ${
            currentPage === 2 || currentPage === 3 ? "text-md" : "text-2xl"
          }`}>{calloutText} {currentPage ===3 && <img src={Banana} className=" absolute w-10 h-auto left-[43%]"/>}</span>
         
      </div>
      <img src={CalloutImg} alt="callout"  className=" absolute max-w-72 h-auto top-16 right-[30%]"/>
    
<div className="absolute w-fit h-auto bottom-16 right-12 m-4">
<Button text={text} onClick={handleNext}  />
</div>
  
    </div>

  )
}

export default Welcome