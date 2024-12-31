import React, { useState } from "react";
import axios from "axios";
import "./OrderPizza.css";
import Success from "./Success.jsx";

export default function OrderPizza({ onBack, onSuccess }) {
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

  const pizzaPrice = 85.5;
  const toppingPrice = 5;
  const totalToppingPrice = formData.toppings.length * toppingPrice;
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
      const response = await axios.post("https://reqres.in/api/pizza", {
        ...formData,
        totalPrice,
      });
      onSuccess();
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header data-cy="order-header">
        <img src="../../images/iteration-1-images/logo.svg" alt="Logo" data-cy="order-logo" />
        <div className="order-header-buttons" data-cy="order-header-buttons">
          <button onClick={onBack} data-cy="order-back-button">Anasayfa</button>
          <p>-</p>
          <button data-cy="order-create-button">Sipariş Oluştur</button>
        </div>
      </header>
      <br />
      <section data-cy="order-section">
        <div className="pizza-info" data-cy="pizza-info">
          <h4 data-cy="pizza-name">Position Absolute Acı Pizza</h4>
          <div className="pizza-details" data-cy="pizza-details">
            <p data-cy="pizza-price">{pizzaPrice}₺</p>
            <div className="rateNreview" data-cy="rateNreview">
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
    </>
  );
}