import React, { useState } from "react";
import axios from "axios";
import "./OrderPizza.css";
import icon1 from "../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../images/iteration-2-images/footer/icons/icon-3.png";
import li0 from "../../images/iteration-2-images/footer/insta/li-0.png";
import li1 from "../../images/iteration-2-images/footer/insta/li-1.png";
import li2 from "../../images/iteration-2-images/footer/insta/li-2.png";
import li3 from "../../images/iteration-2-images/footer/insta/li-3.png";
import li4 from "../../images/iteration-2-images/footer/insta/li-4.png";
import li5 from "../../images/iteration-2-images/footer/insta/li-5.png";

export default function OrderPizza({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    size: "orta",
    toppings: [],
    notes: "",
    hamur: "normal",
    pizzaCount: 1,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pizzaPrices = {
    küçük: 50,
    orta: 85.5,
    büyük: 120,
  };

  const toppingPrice = 5;
  const totalToppingPrice = formData.toppings.length * toppingPrice;
  const pizzaPrice = pizzaPrices[formData.size.toLowerCase()] || 85.5;
  const totalPizzaPrice = pizzaPrice * formData.pizzaCount;
  const totalPrice = totalPizzaPrice + totalToppingPrice;

  const toppingsOptions = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Mantar",
    "Ananas",
    "Kabak",
  ];

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 3) newErrors.name = "İsim en az 3 karakter olmalı.";
    if (!formData.size) newErrors.size = "Pizza boyutu seçmelisiniz.";
    if (formData.toppings.length < 4 || formData.toppings.length > 10) {
      newErrors.toppings = "En az 4 ve en fazla 10 malzeme seçebilirsiniz.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        toppings: checked
          ? [...prev.toppings, value]
          : prev.toppings.filter((topping) => topping !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await axios.post("https://reqres.in/api/pizza", {
        ...formData,
        totalPrice,
      });
      onSuccess({
        ...formData,
        totalToppingPrice,
        totalPrice,
      }); // formData'yı onSuccess fonksiyonuna geçir
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);
      setErrors((prev) => ({
        ...prev,
        submit: "Sipariş gönderilemedi, lütfen tekrar deneyin.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header data-cy="order-header">
        <img src="../../images/iteration-1-images/logo.svg" alt="Logo" data-cy="order-logo" />
        <div className="order-header-buttons" data-cy="order-header-buttons">
          <button onClick={() => window.history.back()} data-cy="order-back-button">Anasayfa</button>
          <p>-</p>
          <button data-cy="order-create-button">Sipariş Oluştur</button>
        </div>
      </header>
      <div className="sections">
      <section data-cy="order-section" className="order-section">
        <div className="pizza-info" data-cy="pizza-info">
          <h4 data-cy="pizza-name">Position Absolute Acı Pizza</h4>
          <div className="pizza-detail" data-cy="pizza-detail">
            <p data-cy="pizza-price"><strong>{pizzaPrice}₺</strong></p>
            <div className="pizza-rate" data-cy="pizza-rate">
              <p data-cy="pizza-rating">4.9</p>
              <p data-cy="pizza-reviews">(200)</p>
            </div>
          </div>
          <p data-cy="pizza-description">
            Front Dev olarak hala position: absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellike çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
            düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
            lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>

        <form className="form-order" onSubmit={handleSubmit} data-cy="order-form">
          <div className="pizza-sizes" data-cy="pizza-sizes">
            <div className="dough-size" data-cy="dough-size">
              <strong>Boyut Seç *</strong>
              <br/>
              <br/>
              <div className="dough-sizes">
              {["Küçük", "Orta", "Büyük"].map((size) => (
                <label key={size}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={formData.size === size}
                    onChange={handleChange}
                    data-cy={`size-${size}`}
                  />
                  {size}
                </label>
              ))}
              {errors.size && <p style={{ color: "red" }} data-cy="size-error">{errors.size}</p>}
              </div>
            </div>
            <div className="dough-thickness" data-cy="dough-thickness">
              <strong>Hamur Seç *</strong>
              <br />
              <br />
              <label>
                <select
                  name="hamur"
                  value={formData.hamur}
                  onChange={handleChange}
                  required
                  data-cy="dough-select"
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option value="İnce Kenar">İnce Kenar</option>
                  <option value="Kalın Kenar">Kalın Kenar</option>
                  <option value="Normal">Normal</option>
                </select>
              </label>
            </div>
          </div>

          <div className="extras" data-cy="extras">
            <br />
            <legend>
              <strong>Ek Malzemeler</strong>
            </legend>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="extras-elements" data-cy="extras-elements">
              {toppingsOptions.map((topping) => (
                <label key={topping}>
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping}
                    checked={formData.toppings.includes(topping)}
                    onChange={handleChange}
                    data-cy={`topping-${topping}`}
                  />
                  {topping}
                </label>
              ))}
              {errors.toppings && (
                <p style={{ color: "red" }} data-cy="toppings-error">{errors.toppings}</p>
              )}
            </div>
          </div>

          <div className="customer-note" data-cy="customer-note">
            <strong>Adınız Soyadınız</strong>
            <label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                data-cy="customer-name"
              />
              {errors.name && <p style={{ color: "red" }} data-cy="name-error">{errors.name}</p>}
            </label>
            <strong>Sipariş Notu</strong>
            <label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                data-cy="customer-notes"
              />
            </label>
          </div>

          <div className="order-control" data-cy="order-control">
            <div className="pizza-count" data-cy="pizza-count">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pizzaCount: Math.max(1, prev.pizzaCount - 1),
                  }))
                }
                data-cy="decrease-pizza-count"
              >
                -
              </button>
              <p data-cy="pizza-count-value">{formData.pizzaCount}</p>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pizzaCount: prev.pizzaCount + 1,
                  }))
                }
                data-cy="increase-pizza-count"
              >
                +
              </button>
            </div>
            <div className="order-price" data-cy="order-price">
              <div className="order-details" data-cy="order-details">
                <h4>Sipariş Toplamı</h4>
                <div className="extra-price" data-cy="extra-price">
                  <p>Seçimler:</p> <p>{totalToppingPrice}₺</p>
                </div>
                <div className="total-price" data-cy="total-price">
                  <p>Toplam:</p> <p>{totalPrice}₺</p>
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} data-cy="submit-order">
                {isSubmitting ? "Gönderiliyor..." : "Sipariş Ver"}
              </button>
            </div>
          </div>
        </form>
      </section>
      </div>
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