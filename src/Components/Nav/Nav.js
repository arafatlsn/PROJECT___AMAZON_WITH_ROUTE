import React from 'react';
import './Nav.css'
import { GoSearch } from 'react-icons/go'
import { BsCart3 } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='grid md:grid-cols-12 items-center py-4 px-5 sticky top-0 z-50' style={{backgroundColor: '#EAEDED'}}>
      

        <div className='nav-logo-side col-start-1 col-end-4 lg:col-end-3'>
          <img src='logo.webp' alt="" />
        </div>
        <div className='nav-input-div flex h-4/5 col-start-4 lg:col-start-3 col-end-10'>
          <input type="text" className='rounded-l-lg p-2 text-lg font-semibold focus:outline-none'/>
          <button className='px-3 text-2xl rounded-r-lg' style={{backgroundColor: '#F3A847'}}><GoSearch/></button>
        </div>
        <div className='col-start-10 col-end-13 flex items-center ml-10'>
            <Link to={'/home'} className='text-xl font-semibold mx-2'>Home</Link>
            <Link to={'/products'} className='text-xl font-semibold mx-2'>Products</Link>
            <Link to={'/cart'} className='text-2xl font-semibold mx-2'><BsCart3></BsCart3></Link>
        </div>


    </div>
  );
};

export default Nav;