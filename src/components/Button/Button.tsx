// NextButton.tsx

import React from 'react';


interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({text,onClick }) => {
  return <button className='text-orange-700 w-36 h-30 bg-orange-200 p-4 border-2 border-orange-500 rounded-2xl hover:bg-orange-300 text-2xl font-bold'  onClick={onClick} >{text}</button>;
};

export default Button;
