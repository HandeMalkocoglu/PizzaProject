import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Icon1 from "../../images/iteration-2-images/icons/1.svg";
import Icon2 from "../../images/iteration-2-images/icons/2.svg";
import Icon3 from "../../images/iteration-2-images/icons/3.svg";
import Icon4 from "../../images/iteration-2-images/icons/4.svg";
import Icon5 from "../../images/iteration-2-images/icons/5.svg";
import Icon6 from "../../images/iteration-2-images/icons/6.svg";
import Food1 from "../../images/iteration-2-images/pictures/food-1.png";
import Food2 from "../../images/iteration-2-images/pictures/food-2.png";
import Food3 from "../../images/iteration-2-images/pictures/food-3.png";
import logo from "../../images/iteration-1-images/logo.svg";
import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import li0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import li1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import li2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import li3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import li4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import li5 from "../../images/iteration-2-images/footer/insta/li-5.png";

export default function Home() {
  return (
    <>
      <header className="home-header">
        <div className="home-page" data-cy="home-page">
          <img src={logo} alt="Logo" />
          <p data-cy="home-message" className="home-message">fırsatı kaçırma</p>
          <p className="home-message2">
            KOD ACIKTIRIR <br />
            PİZZA, DOYURUR
          </p>
          <Link to="/order">
            <button data-cy="home-button" className="button">
              ACIKTIM
            </button>
          </Link>
        </div>
      </header>
      <section className="home-section">
        <div className="header-nav-button">
          <nav>
            <ul>
              <li>
                <div className="header-nav-elements">
                  <img src={Icon1} alt="Kore İkonu" className="nav-icon" />
                  <p>YENİ! Kore</p>
                </div>
              </li>
              <li>
                <div className="header-nav-elements">
                  <img src={Icon2} alt="Pizza İkonu" className="nav-icon" />
                  <p>Pizza</p>
                </div>
              </li>
              <li>
                <div className="header-nav-elements">
                  <img src={Icon3} alt="Burger İkonu" className="nav-icon" />
                  <p>Burger</p>
                </div>
              </li>
              <li>
                <div className="header-nav-elements">
                  <img src={Icon4} alt="Kızartmalar İkonu" className="nav-icon" />
                  <p>Kızartmalar</p>
                </div>
              </li>
              <li>
                <div className="header-nav-elements">
                  <img src={Icon5} alt="Fast Food İkonu" className="nav-icon" />
                  <p>Fast Food</p>
                </div>
              </li>
              <li>
                <div className="header-nav-elements">
                  <img src={Icon6} alt="Gazlı İçecek İkonu" className="nav-icon" />
                  <p>Gazlı İçecek</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home-section-content">
          <div className="content-card1">
            <h4>Özel Lezzetus</h4>
            <p>Position: Absolute Acı Burger</p>
            <Link to="/order">
            <button data-cy="home-button" className="button">
              SİPARİŞ VER
            </button>
            </Link>
          </div>
          <div className="home-section-content2">
          <div className="content-card2">
            <h4>Hackathon Burger Menü</h4>
            <Link to="/order">
            <button data-cy="home-button" className="button">
              SİPARİŞ VER
            </button>
            </Link>
          </div>
          <div className="content-card3">
            <h4>Çoooook hızlı npm gibi kurye</h4>
            <Link to="/order">
            <button data-cy="home-button" className="button">
              SİPARİŞ VER
            </button>
            </Link>
          </div>
          </div>
        </div>
        <div className="home-section-text">
          <p>en çok paketlenen menüler</p>
          <h4>Acıktıran Kodlara Doyuran Lezzetler</h4>
        </div>
        <div className="section-nav-button">
          <nav>
            <ul>
              <li>
                <div className="section-nav-elements">
                  <img src={Icon1} alt="Kore İkonu" className="nav-icon" />
                  <p>Ramen</p>
                </div>
              </li>
              <li>
                <div className="section-nav-elements">
                  <img src={Icon2} alt="Pizza İkonu" className="nav-icon" />
                  <p>Pizza</p>
                </div>
              </li>
              <li>
                <div className="section-nav-elements">
                  <img src={Icon3} alt="Burger İkonu" className="nav-icon" />
                  <p>Burger</p>
                </div>
              </li>
              <li>
                <div className="section-nav-elements">
                  <img src={Icon4} alt="Kızartmalar İkonu" className="nav-icon" />
                  <p>French fries</p>
                </div>
              </li>
              <li>
                <div className="section-nav-elements">
                  <img src={Icon5} alt="Fast Food İkonu" className="nav-icon" />
                  <p>Fast Food</p>
                </div>
              </li>
              <li>
                <div className="section-nav-elements">
                  <img src={Icon6} alt="Gazlı İçecek İkonu" className="nav-icon" />
                  <p>Soft Drinks</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="section-pizza">
          <div className="section-pizza-card1">
            <img src={Food1} alt="Terminal Pizza" />
            <p><strong>Terminal Pizza</strong></p>
            <div className="rateNreview" data-cy="rateNreview">
              <p data-cy="pizza-rating">4.9</p>
              <p data-cy="pizza-reviews">(200)</p>
              <p data-cy="pizza-price"><strong>60₺</strong></p>
            </div>
          </div>
          <div className="section-pizza-card2">
            <img src={Food2} alt="Position Absolute Acı Pizza" />
            <p><strong>Position Absolute Acı Pizza</strong></p>
            <div className="rateNreview" data-cy="rateNreview">
              <p data-cy="pizza-rating">4.9</p>
              <p data-cy="pizza-reviews">(200)</p>
              <p data-cy="pizza-price"><strong>60₺</strong></p>
            </div>
          </div>
          <div className="section-pizza-card3">
            <img src={Food3} alt="useEffect Tavuklu Burger" />
            <p><strong>useEffect Tavuklu Burger</strong></p>
            <div className="rateNreview" data-cy="rateNreview">
              <p data-cy="pizza-rating">4.9</p>
              <p data-cy="pizza-reviews">(200)</p>
              <p data-cy="pizza-price"><strong>60₺</strong></p>
            </div>
          </div>
        </div>
      </section>
      <footer data-cy="success-footer" className='success-footer'>
        <div className="footer-1">
          <h4>Teknolojik Yemekler</h4>
          <div className="footer-adress">
            <img src={icon1} alt="Icon 1" />
            <p>341 Londonderry Road, Istanbul Türkiye</p>
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
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathlon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Testler Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
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
    </>
  );
}