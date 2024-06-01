import React from 'react';
import './Card.css';
import { IoIosHeart } from 'react-icons/io';

interface CardProps {
  imageSrc?: string;
  backText?: string;
  frontColor: string;
  backColor: string;
  onClick: () => void;
  isFlipped: boolean;
  isMatched: boolean;
  matchedClass: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, backText, frontColor, backColor, onClick, isFlipped, isMatched, matchedClass }) => {
  if (isMatched && matchedClass === '') return null; 
  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''} ${matchedClass}`} onClick={onClick}>
      <div className="card-inner">
        <div className={`card-front ${frontColor}`}>
          <IoIosHeart className="text-white w-20 h-20 heart-icon" />
        </div>
        <div className="card-back" style={{ backgroundColor: backColor }}>
          {imageSrc && <img src={imageSrc} alt="Fruit" className="w-28 h-auto object-cover" />}
          {backText && <span className="text-7xl font-bold text-pink-800">{backText}</span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
