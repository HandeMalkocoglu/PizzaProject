import React from 'react';
import './Success.css';
import logo from '../../images/iteration-1-images/logo.svg';
import icon1 from '../../images/iteration-2-images/footer/icons/icon-1.png';
import icon2 from '../../images/iteration-2-images/footer/icons/icon-2.png';
import icon3 from '../../images/iteration-2-images/footer/icons/icon-3.png';
import li0 from '../../images/iteration-2-images/footer/insta/li-0.png';
import li1 from '../../images/iteration-2-images/footer/insta/li-1.png';
import li2 from '../../images/iteration-2-images/footer/insta/li-2.png';
import li3 from '../../images/iteration-2-images/footer/insta/li-3.png';
import li4 from '../../images/iteration-2-images/footer/insta/li-4.png';
import li5 from '../../images/iteration-2-images/footer/insta/li-5.png';

function Success({ orderDetails, onBack }) {
  return (
    <div className='success' data-cy="success">
      <div className='logo'>
        <img src={logo} alt="Logo" data-cy="success-logo" />
      </div>
      <div className='success-message'>
        <p data-cy="success-congratulations">Lezzetin yolda</p>
        <p data-cy="success-order-received">SİPARİŞ ALINDI</p>
      </div>
      <hr />
      <div className='success-details'>
        <h4 data-cy="pizza-name">Position Absolute Acı Pizza</h4>
        <div className='pizza-details'>
          <p data-cy="order-size">Boyut: {orderDetails.size}</p>
          <p data-cy="order-dough">Hamur: {orderDetails.hamur}</p>
          <p data-cy="order-toppings">
            Ek Malzemeler: {orderDetails.toppings.length > 0 ? orderDetails.toppings.join(', ') : "Yok"}
          </p>
        </div>
      </div>
      <div className="order-details" data-cy="order-details">
        <p>Sipariş Toplamı</p>
        <div className="extra-price" data-cy="extra-price">
          <p>Seçimler Toplamı:</p> <p>{orderDetails.totalToppingPrice}₺</p>
        </div>
        <div className="total-price" data-cy="total-price">
          <p>Toplam:</p> <p>{orderDetails.totalPrice}₺</p>
        </div>
      </div>
      <div className="success-button">
        <button onClick={onBack} data-cy="back-to-home">Anasayfaya</button>
      </div>
      <footer data-cy="success-footer" className='success-footer'>
        <div className="footer-1">
          <h4>Teknolojik Yemekler</h4>
          <div className="footer-adress">
            <img src={icon1} alt="Icon 1" />
            <p>341 Londonderry Road,
            Istanbul Türkiye</p>
            </div>
            <div className="footer-phone">
            <img src={icon2} alt="Icon 2" />
            <p>aciktim@teknolojikyemekler.com</p>
            </div>
            <div className="footer-mail">
            <img src={icon3} alt="Icon 3" />
            <p>+90 216 123 45 67</p>
            </div>
        </div>
        <div className="footer-2">
          <h4>Hot Menu</h4>
          <ul>Terminal Pizza</ul>
          <ul>5 Kişilik Hackathlon Pizza</ul>
          <ul>useEffect Tavuklu Pizza</ul>
          <ul>Beyaz  Console Frosty</ul>
          <ul>Testler Geçti Mutlu Burger</ul>
          <ul>Position Absolute Acı Burger</ul>
        </div>
        <div className="footer-3">
        <h4>İnstagram</h4>
        <div className="footer-insta">
        <img src={li0} alt="li 0" />
        <img src={li1} alt="li 1" />
        <img src={li2} alt="li 2" />
        <img src={li3} alt="li 3" />
        <img src={li4} alt="li 4" />
        <img src={li5} alt="li 5" />
        </div>
        </div>    
    </footer>
    </div>
    
  );
}

export default Success;