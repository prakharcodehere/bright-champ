import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import AppleImg from '../../assets/fruits-images/apple.png';
import OrangeImg from '../../assets/fruits-images/orange.png';
import KiwiImg from '../../assets/fruits-images/kiwi.png';
import WatermelonImg from '../../assets/fruits-images/watermelon.png';
import StrawberryImg from '../../assets/fruits-images/strawwberry.png';
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

const totalPairs = fruits.length;

const CardLayout: React.FC = () => {
  const [flippedLeftCards, setFlippedLeftCards] = useState<number[]>([]);
  const [flippedRightCards, setFlippedRightCards] = useState<number[]>([]);
  const [lastClicked, setLastClicked] = useState<'left' | 'right' | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<number[]>([]);
  const [matchingPair, setMatchingPair] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (matchingPair.length === 2) {
      const [leftIndex, rightIndex] = matchingPair;
      if (fruits[leftIndex].backText === fruits[rightIndex].backText) {
        setTimeout(() => {
          setMatchedPairs([...matchedPairs, leftIndex, rightIndex]);
          setMatchingPair([]);
          setProgress((matchedPairs.length + 2) / (totalPairs * 2) * 100);
        }, 1000); 
      } else {
        setTimeout(() => {
          setFlippedLeftCards(flippedLeftCards.filter(index => index !== leftIndex));
          setFlippedRightCards(flippedRightCards.filter(index => index !== rightIndex));
          setMatchingPair([]);
        }, 1000); 
      }
    }
  }, [matchingPair, matchedPairs, flippedLeftCards, flippedRightCards]);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setShowModal(true);
      }, 500); 
    }
  }, [progress]);

  const handleLeftCardClick = (index: number) => {
    if (lastClicked === 'left' || flippedLeftCards.includes(index) || matchedPairs.includes(index)) return; // Prevent clicking two left cards consecutively
    setFlippedLeftCards([...flippedLeftCards, index]);
    setLastClicked('left');
    setMatchingPair([...matchingPair, index]);
  };

  const handleRightCardClick = (index: number) => {
    if (lastClicked === 'right' || flippedRightCards.includes(index) || matchedPairs.includes(index)) return; // Prevent clicking two right cards consecutively
    setFlippedRightCards([...flippedRightCards, index]);
    setLastClicked('right');
    setMatchingPair([...matchingPair, index]);
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-evenly'>
      <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
        <div className="bg-yellow-500 h-6 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <div className='w-full h-full flex items-center justify-evenly'>
        <div className='left-container flex w-[44%] h-[80vh] gap-4 flex-wrap p-8 items-center justify-center'>
          {fruits.map((fruit, index) => (
            <Card
              key={index}
              imageSrc={fruit.imageSrc}
              frontColor="#FFC0CB" // Light pink color for left-container front
              backColor="#ADD8E6"  // Light blue color for left-container back
              onClick={() => handleLeftCardClick(index)}
              isFlipped={flippedLeftCards.includes(index) || matchedPairs.includes(index)}
              isMatched={matchedPairs.includes(index)}
              matchedClass={matchedPairs.includes(index) ? 'matched' : ''}
            />
          ))}
        </div>
        <div className='right-container flex w-[44%] h-[80vh] gap-4 flex-wrap p-8 items-center justify-center'>
          {fruits.map((fruit, index) => (
            <Card
              key={index}
              backText={fruit.backText}
              frontColor="#ADD8E6"  // Light blue color for right-container front
              backColor='#FFC0CB'   // Light pink color for right-container back
              onClick={() => handleRightCardClick(index)}
              isFlipped={flippedRightCards.includes(index) || matchedPairs.includes(index)}
              isMatched={matchedPairs.includes(index)}
              matchedClass={matchedPairs.includes(index) ? 'matched' : ''}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Congratulations!</h2>
            <p>You matched all the pairs!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardLayout;
