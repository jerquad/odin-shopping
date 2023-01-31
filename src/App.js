import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import './components/style/App.css';
import './components/style/Product.css';
import './components/style/Shop.css';
import './components/style/Home.css';

function App() {
  const [cart, setCart] = useState({size: 0, content: {}});
  const [cartElement, setCartElement] = useState('');
  const [inCart, setInCart] = useState('');
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart])

  const handleCartClick = function() {
    if (cartElement === '') {
      setCartElement(<div className='cart-cover'></div>);
      setInCart('cart-open');
    } else {
      setCartElement('');
      setInCart('');
    }
  }

  const handleAddToCart = function(product) {
    const id = product.title;
    let content = {...cart.content};
    if (id in content) {
      content[id].quantity += 1;
    } else {
      content = {...content, [id]: {thumb: product.thumb, title: product.title, price: product.price, quantity: 1}}
    } 
    setCart({size: cart.size + 1, content: content});
  }

  return (
    <div className={`App ${inCart}`}>
      <BrowserRouter>
        {cartElement}
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
