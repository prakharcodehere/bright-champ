import { useState } from 'react'

import './App.css'
import Welcome from './components/Welcome/Welcome'
import Instruction from './components/InstructionLayout/Instruction';
import CardLayout from './components/CardLayout/CardLayout';

const App: React.FC = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage =  () => {
    setCurrentPage(prev => prev + 1);
  
  }
  return (
    <>
    <div className='app'>
{  currentPage === 1 &&  <Welcome handleNext={handleNextPage} text="Start" calloutText ="Hey Kiddo"/>}
{  currentPage === 2 &&  <Welcome  handleNext={handleNextPage} text="Next" calloutText='Hey, I am Mizo!, i love bananas '/>}
{  currentPage === 3 &&  <Welcome  handleNext={handleNextPage} text="Yes" calloutText='can you help me to get some? '/>}
{  currentPage === 4 &&  <Instruction handleNext={handleNextPage} text="Play"/>}
{  currentPage === 5 &&  <CardLayout/>}
    </div>
    </>
  )
}

export default App
