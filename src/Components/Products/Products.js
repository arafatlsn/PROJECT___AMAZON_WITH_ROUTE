import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Card from '../Card/Card';
import './Products.css'
import useCart from '../../Hooks/useCart'
import { setDataStrg, removeItemStrg } from '../../LocalStorage/LocalStorage';
import Cartitem from '../Cart/Cartitem';


const Products = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart();

  const setProdCart = cartItem => {
    const findCart = cart.find(elCart => elCart.id === cartItem.id);
    if(!findCart){
      setDataStrg(cartItem)
      const newCart = [...cart, cartItem]
      setCart(newCart)
    }
  }

  const removeItem = itemId => {
    removeItemStrg(itemId)
  }

  return (
    <div className='grid grid-cols-12 justify-center justify-items-center mt-10'>

        <div>

        </div>
        <div className='col-start-3 col-end-11 sticky top-0'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
              products.map(product => <Card key={product.id} product={product} setProdCart={setProdCart}></Card>)
            }
          </div>
        </div>
        <div className='col-start-11 col-end-13 justify-self-end sticky' style={{top: '5.5rem', height: '70vh'}}>
            
            {
              cart.map(elCart => <Cartitem key={elCart.id} elCart={elCart} removeItem={removeItem}></Cartitem>)
            }

        </div>
        

    </div>
    
  );
};

export default Products;