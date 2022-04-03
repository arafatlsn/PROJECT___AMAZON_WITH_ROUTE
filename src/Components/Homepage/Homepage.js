import React from 'react';
import { GiCoffeeCup } from 'react-icons/gi'

const Homepage = () => {
  return (
    <div className='flex justify-center items-center' style={{height: '85vh'}}>
      <h1 className='font-mono flex text-5xl'>This is HomePage <GiCoffeeCup className='ml-2'/></h1>
    </div>
  );
};

export default Homepage;