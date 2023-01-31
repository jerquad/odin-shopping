import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import './components/style/App.css';
import './components/style/Product.css';
import './components/style/Shop.css';
import './components/style/Home.css';
import './components/style/Cart.css';

function App() {
  const [cart, setCart] = useState({size: 0, content: {}});
  const [inCart, setInCart] = useState(false);

  const handleCartClick = function() { setInCart(!inCart) }

  const handleAddToCart = function({thumb, title, price}) {
    let content = {...cart.content};
    if (title in content) {
      content[title].quantity += 1;
    } else {
      content = {...content, 
                 [title]: {
                    thumb: thumb, 
                    title: title, 
                    price: price, 
                    quantity: 1
                  }
                }
    } 
    setCart({size: cart.size + 1, content: content});
  }

  return (
    <div className={`App ${inCart ? 'cart-open' : ''}`}>
      <BrowserRouter>
        {inCart ? <Cart content={cart.content} /> : ''}
        <Nav cartSize={cart.size} handleCartClick={handleCartClick} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop cart={handleAddToCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
