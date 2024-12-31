import React, { useState } from "react";
import './App.css';
import Home from './components/Home.jsx';
import OrderPizza from './components/OrderPizza.jsx';
import Success from './components/Success.jsx';

function App() {
  const [orderDetails, setOrderDetails] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <div data-cy="app">
      {!orderDetails && !success && (
        <Home onButtonClick={() => setOrderDetails(true)} />
      )}
      {orderDetails && !success && (
        <OrderPizza
          onBack={() => setOrderDetails(false)}
          onSuccess={() => {
            setOrderDetails(false);
            setSuccess(true);
          }}
        />
      )}
      {success && (
        <Success
          onBack={() => {
            setOrderDetails(false);
            setSuccess(false);
          }}
        />
      )}
    </div>
  );
}

export default App;