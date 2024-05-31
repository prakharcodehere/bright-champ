import AppleImg from "../../assets/fruits-images/apple.png"
import Button from "../Button/Button"


interface InstructionProps {
      handleNext: () => void;
      text: string;
     
    }

const Instruction: React.FC<InstructionProps> = ({handleNext, text}) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-evenly mx-4">
            <div className="bg-white relative rounded-[44px]  w-[20vw] flex flex-col h-80 ">
                  <div className="absolute left-12 top-4  w-28 h-36 flex  items-center justify-center bg-gray-200 mt-4 ">
                   <div className="w-24 h-32 bg-pink-200  rounded-xl ">

                   </div>
                  </div>
                  <div className="absolute  top-4 right-14 rotate-12 w-28 h-36 flex  items-center justify-center bg-gray-300 mt-4 ">
                   <div className="w-24 h-32 bg-orange-200  rounded-xl flex items-center justify-center">
<img src={AppleImg} className="w-16 h-auto "/>
                   </div>
                  </div>
                  <div className=" p-4 flex flex-col items-center absolute bottom-2 left-12">   
                        <span className="text-3xl text-center font-bold text-blue-400">Select a<br/> pink card.</span>
                  <span className="text-lg text-center font-bold text-green-400">It has Images</span>
                  </div>
               
            </div>
            <div className="bg-white rounded-[44px] w-[20vw] h-80 flex flex-col items-center pt-4">
            <div className=" w-28 h-36 flex  items-center justify-center bg-gray-200 mt-4 ">
                   <div className="w-24 h-32 bg-blue-300  rounded-xl ">

                   </div>

                  </div>
                  <div className="flex flex-col items-center justify-center">
<span className="text-3xl text-blue-400 text-center font-bold mt-4" >Select a <br/> blue card.</span>
<span className="text-lg text-green-400 font-bold">It has alphabets</span>
                   </div>
            </div>
            <div className="bg-white  flex flex-col items-center rounded-[44px] w-[20vw] h-80">
            
            <div className="flex items-center">
            <div className=" w-28 h-36 flex items-center  origin-bottom justify-center bg-gray-200 mt-8 ">
                   <div className="w-24 h-32 bg-blue-300  rounded-xl ">

                   </div>

                  </div>
            <div className=" w-28 h-36 flex items-center  origin-bottom justify-center bg-gray-200 mt-8 ">
                   <div className="w-24 h-32 bg-pink-300  rounded-xl ">

                   </div>

                  </div>
                  </div>
                  <div className="flex flex-col  items-center mt-4">
                        <span className="text-lg text-green-400 font-bold">
                        If they're same
                        </span>
                        <span className="text-3xl text-blue-400 text-center font-bold">
                        It's a match!
                        </span>
                        <span className="text-lg text-green-400 font-bold">
                        otherwise retry :(
                        </span>
                  </div>

            </div>
         
      </div>
      <div className="w-full flex justify-end mr-44 mt-10">
      <Button onClick={handleNext} text={text}/>
      </div>
     
    </div>
  )
}

export default Instruction