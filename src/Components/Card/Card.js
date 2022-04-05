import React from 'react';
import './Card.css'
import { BsCart3 } from 'react-icons/bs'

const Card = ({product, setProdCart}) => {
  const {name, image, price} = product
  return (
    <div className='card-container-div border overflow-hidden rounded-xl'>
      
        <div className='card-img-div border rounded-xl'>
          <img src={image ? image : 'https://image.shutterstock.com/image-vector/picture-icon-260nw-413647060.jpg'} alt="" />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis'>{name}</h1>
          <h6 className='text-lg font-semibold text-center'>${price}</h6>
          <button onClick={() => setProdCart(product)} className='text-white py-1 text-base font-semibold flex items-center justify-center' style={{backgroundColor: '#35353C'}}>Add To Cart <BsCart3 className='text-lg ml-1' style={{color: '#F3A847'}}/></button>
        </div>

    </div>
  );
};

export default Card;