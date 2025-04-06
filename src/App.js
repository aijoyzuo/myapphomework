import { useReducer } from 'react';
//把外部的寫在前方，自定義的寫在後方

import './assets/all.scss';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import { CartContext, cartReducer,cartInit } from './store';


function App() {
  const reducer = useReducer(cartReducer, cartInit)
  return (
    <CartContext.Provider value={reducer}>
      <Navbar></Navbar>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Products></Products>
          </div>
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}


export default App;

