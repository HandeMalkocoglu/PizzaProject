import React from 'react';
import "../../images/iteration-1-images/logo.svg";
import "./Success.css";

function Success() {
  return (
    <div className='success' data-cy="success">
      <div className='logo'>
        <img src="../../images/iteration-1-images/logo.svg" alt="Logo" data-cy="success-logo" />
      </div>
      <div className='success-message'>
        <p data-cy="success-congratulations">TEBRİKLER!</p>
        <p data-cy="success-order-received">SİPARİŞİNİZ ALINDI!</p>
      </div>
    
    </div>
  );
}

export default Success;