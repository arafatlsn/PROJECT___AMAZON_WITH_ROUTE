import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Card from '../Card/Card';
import './Products.css'


const Products = () => {
  const [products, setProducts] = useProducts();
  console.log(products)
  return (
    <div className='grid grid-cols-12 justify-center justify-items-center mt-10'>

        <div>

        </div>
        <div className='col-start-3 col-end-11'>
          <div className='grid grid-cols-4 gap-5'>
            {
              products.map(product => <Card key={product.id} product={product}></Card>)
            }
          </div>
        </div>
        <div>

        </div>
        

    </div>
    
  );
};

export default Products;