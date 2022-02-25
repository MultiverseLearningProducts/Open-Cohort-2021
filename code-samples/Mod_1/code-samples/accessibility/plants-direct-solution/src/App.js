import data from './products.json'
import { useState } from 'react'
import { Product } from './Product'
import './App.css';

function App() {


//pass information from the parent -> child
//pass down props from parent to child
//props -> arbrituary label


  const [cart, setCart] = useState(data.cart)
  const [cartStatus, setStatus] = useState({})


  const addToCart = (product) => {
      setCart([...cart, product])
  }

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item !== product))
  }

  const setCartStatus = (key) => {
    setStatus({...cartStatus, [key]: !cartStatus[key]})
    console.log('THIS IS CART STATUS', cartStatus)
  }


  return (
    <div className="App">
      {data.products.map((product) => 
        <Product key={product.productId} id={product.productId} product={product} addToCart={addToCart} 
        removeFromCart={removeFromCart} setCartStatus={setCartStatus} cartStatus={cartStatus[product.productId]} />
      )
      }
      <p>Items in cart {cart.length}</p>
    </div>
  );
}

export default App;

//we need to give each child component access to the image file ?? [x]
// give each child component access to features.[x]
// link stylesheet [x]