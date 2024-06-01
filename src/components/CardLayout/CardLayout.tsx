import  { useState, useEffect } from 'react';
import Card from '../Card/Card';
import AppleImg from '../../assets/fruits-images/apple.png';
import OrangeImg from '../../assets/fruits-images/orange.png';
import KiwiImg from '../../assets/fruits-images/kiwi.png';
import WatermelonImg from '../../assets/fruits-images/watermelon.png';
import StrawberryImg from '../../assets/fruits-images/strawwberry.png'
import GrapesImg from '../../assets/fruits-images/grapes.png';
import './CardLayout.css';

const fruits = [
  { imageSrc: AppleImg, backText: 'A', name: 'Apple' },
  { imageSrc: GrapesImg, backText: 'G', name: 'Grapes' },
  { imageSrc: WatermelonImg, backText: 'W', name: 'Watermelon' },
  { imageSrc: StrawberryImg, backText: 'S', name: 'Strawberry' },
  { imageSrc: KiwiImg, backText: 'K', name: 'Kiwi' },
  { imageSrc: OrangeImg, backText: 'O', name: 'Orange' }
];

interface Fruit {
      imageSrc: string;
      backText: string;
      name: string;
    }


const totalPairs = fruits.length;

const shuffleArray = (array: Fruit[]) => {
      //eslint-disable-next-line
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const CardLayout = () => {
      const [flippedLeftCards, setFlippedLeftCards] = useState<number[]>([]);
      const [flippedRightCards, setFlippedRightCards] = useState<number[]>([]); // Corrected type
      const [lastClicked, setLastClicked] = useState<string | null>(null);
      const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
      const [matchingPair, setMatchingPair] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [attemptsLeft, setAttemptsLeft] = useState(5);
const [shuffledFruitsLeft, setShuffledFruitsLeft] = useState<Fruit[]>([]);
const [shuffledFruitsRight, setShuffledFruitsRight] = useState<Fruit[]>([]);

  useEffect(() => {
    setShuffledFruitsLeft(shuffleArray(fruits));
    setShuffledFruitsRight(shuffleArray(fruits));
  }, []);

  useEffect(() => {
    if (matchingPair.length === 2) {
      const [leftIndex, rightIndex] = matchingPair.map(Number) as [number, number];

      if (shuffledFruitsLeft[leftIndex].backText === shuffledFruitsRight[rightIndex].backText) {
        setTimeout(() => {
          setMatchedPairs([...matchedPairs, `left-${leftIndex}`, `right-${rightIndex}`]);
          setMatchingPair([]);
          setProgress(((matchedPairs.length + 2) / (totalPairs * 2)) * 100);
        }, 1000); 
      } else {
        setTimeout(() => {
          setFlippedLeftCards(flippedLeftCards.filter(index => index !== leftIndex));
          setFlippedRightCards(flippedRightCards.filter(index => index !== rightIndex));
          setMatchingPair([]);
          setAttemptsLeft(attemptsLeft - 1);
        }, 1000); 
      }
    }
  }, [matchingPair, matchedPairs, flippedLeftCards, flippedRightCards, shuffledFruitsLeft, shuffledFruitsRight]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setModalMessage('Congratulations! You matched all the pairs!');
        setShowModal(true);
      }, 500); 
    }
  }, [progress]);

  useEffect(() => {
    if (attemptsLeft === 0) {
      setTimeout(() => {
        setModalMessage('Game Over! You have used all your attempts. Try again.');
        setShowModal(true);
      }, 500); 
    }
  }, [attemptsLeft]);

  const handleLeftCardClick = (index: number) => {
    if (lastClicked === 'left' || flippedLeftCards.includes(index) || matchedPairs.includes(`left-${index}`) || attemptsLeft === 0) return;
    setFlippedLeftCards([...flippedLeftCards, index]);
    setLastClicked('left');
    setMatchingPair([...matchingPair, index]);
  };

  const handleRightCardClick = (index: number) => {
    if (lastClicked === 'right' || flippedRightCards.includes(index) || matchedPairs.includes(`right-${index}`) || attemptsLeft === 0) return;
    setFlippedRightCards([...flippedRightCards, index]);
    setLastClicked('right');
    setMatchingPair([...matchingPair, index]);
  };

  const handleModalClose = () => {
    setShowModal(false);
    window.location.reload(); 
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly'>
      <div className="w-full flex items-center justify-center gap-16 mt-8 mb-4 px-4">
        <div className="w-1/2 bg-gray-200 rounded-full h-6">
          <div className="bg-yellow-500 h-6 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="text-xl font-bold ml-16 bg-orange-400 rounded-3xl p-2 px-4">
          Attempts Left: {attemptsLeft}/5
        </div>
      </div>
      <div className='w-full h-full flex items-center justify-evenly'>
        <div className='left-container flex w-[44%] h-[80vh] gap-4 flex-wrap p-8 items-center justify-center'>
          {shuffledFruitsLeft.map((fruit, index) => (
            <Card
              key={index}
              imageSrc={fruit.imageSrc}
              frontColor="bg-customPink"
              backColor="#FFC0CB"
              onClick={() => handleLeftCardClick(index)}
              isFlipped={flippedLeftCards.includes(index) || matchedPairs.includes(`left-${index}`)}
              isMatched={matchedPairs.includes(`left-${index}`)}
              matchedClass={matchedPairs.includes(`left-${index}`) ? 'matched' : ''}
            />
          ))}
        </div>
        <div className='right-container flex w-[44%] h-[80vh] gap-4 flex-wrap p-8 items-center justify-center'>
          {shuffledFruitsRight.map((fruit, index) => (
            <Card
              key={index}
              backText={fruit.backText}
              frontColor="bg-customBlue"
              backColor='##ADD8E6'
              onClick={() => handleRightCardClick(index)}
              isFlipped={flippedRightCards.includes(index) || matchedPairs.includes(`right-${index}`)}
              isMatched={matchedPairs.includes(`right-${index}`)}
              matchedClass={matchedPairs.includes(`right-${index}`) ? 'matched' : ''}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <div className="modal ">
          <div className="modal-content w-72 h-64 flex flex-col items-center justify-center bg-orange-300 text-xl font-semibold" >
            <h2>{modalMessage}</h2>
            <button onClick={handleModalClose} className='text-xl mt-4 border-4 border-orange-800 button bg-orange-600 p-2 px-4 rounded-2xl'>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
