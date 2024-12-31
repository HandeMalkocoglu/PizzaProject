import React from 'react'
import "../../images/iteration-1-images/logo.svg";
import "./Success.css";

function Success({onBack}) {
  return (
    <div className='success' data-cy="success">
        <div className='logo'>
            <img src="../../images/iteration-1-images/logo.svg"/>
        </div>
        <div className='success-message'>
            <p data-cy="success-congratulations">TEBRİKLER!</p>
            <p data-cy="success-order-received">SİPARİŞİNİZ ALINDI!</p>
        </div>
        <div className="success-button">
            <button onClick={onBack} data-cy="back-to-home">Anasayfaya Dön</button>
        </div>
    </div>
    
  )
}

export default Success