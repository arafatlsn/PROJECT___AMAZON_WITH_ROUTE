import React from 'react';
import './Cartitem.css'
import { BsTrash } from 'react-icons/bs'

const Cartitem = ({elCart, removeItem}) => {
  const {name, image, price, id} = elCart
  return (
    <div className='cartitem-container border flex flex-col items-center overflow-hidden box-border mr-10'>
      
        <div>
          <img className='w-20 lg:w-28 ' src={image} alt="product"/>
        </div>
        <div className='w-20 lg:w-28 flex flex-col items-center px-1 my-1'>
          <h1 className='whitespace-nowrap text-base font-semibold'>{name.length > 8 ? name.slice(0,8) + '...' : name}</h1>
          <h6 className='text-sm font-semibold'>${price}</h6>
          <p onClick={() => removeItem(id)} className='text-red-500 px-3 py-1 border rounded-lg cursor-pointer' style={{backgroundColor: '#F3F6F6'}}><BsTrash/></p>
        </div>

    </div>
  );
};

export default Cartitem;