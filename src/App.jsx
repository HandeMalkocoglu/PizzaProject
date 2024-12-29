import React, { useState } from "react";
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import Home from './components/Home.jsx'
import OrderPizza from './components/OrderPizza.jsx'

function App() {
  const [orderDetails, setOrderDetails] = useState(null);
return (
  <div className={orderDetails ?"order-pizza-page":"home-page"}>
   {!orderDetails ? (
        <Home onButtonClick={() => setOrderDetails(true)} />
      ) : (
        <OrderPizza onBack={() => setOrderDetails(false)} />
      )}
  </div>
)
}

export default App
