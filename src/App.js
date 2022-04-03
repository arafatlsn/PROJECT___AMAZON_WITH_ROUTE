import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import Homepage from './Components/Homepage/Homepage';
import Nav from './Components/Nav/Nav';
import OrderReview from './Components/OrderReview/OrderReview';
import Products from './Components/Products/Products';

function App() {
  return (
    <div>
      

          <Nav></Nav>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/home' element={<Homepage></Homepage>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='/order-review' element={<OrderReview></OrderReview>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>

          </Routes>


    </div>
  );
}

export default App;
