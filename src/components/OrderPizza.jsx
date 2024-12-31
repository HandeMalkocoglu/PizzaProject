import React, { useState } from "react";
import axios from "axios";
import "./OrderPizza.css";
import Success from "./Success.jsx";

export default function OrderPizza({ onBack }) {
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
  const [isSuccess, setIsSuccess] = useState(false); // Success durumunu takip eden state

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
      
      // Success sayfasına geçiş yap
      setIsSuccess(true);
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    // Başarı durumunda Success bileşenini render et
    return <Success />;
  }

  return (
    <>
      <header>
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <div className="order-header-buttons">
          <button onClick={onBack}>Anasayfa</button>
          <p>-</p>
          <button>Sipariş Oluştur</button>
        </div>
      </header>
      <br />
      <section>
        <div className="pizza-info">
          <h4>Position Absolute Acı Pizza</h4>
          <div className="pizza-details">
            <p>{pizzaPrice}₺</p>
            <div className="rateNreview">
              <p>4.9</p>
              <p>(200)</p>
            </div>
          </div>
          <p>
            Front Dev olarak hala position: absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellike çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
            düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
            lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
          </p>
        </div>

        <form className="form-order" onSubmit={handleSubmit}>
          <div className="pizza-sizes">
            <div className="dough-size">
              <strong>Boyut Seç *</strong>
              {["Küçük", "Orta", "Büyük"].map((size) => (
                <label key={size}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={formData.size === size}
                    onChange={handleChange}
                  />
                  {size}
                </label>
              ))}
              {errors.size && <p style={{ color: "red" }}>{errors.size}</p>}
            </div>
            <div className="dough-thickness">
              <strong>Hamur Seç *</strong>
              <br />
              <br />
              <label>
                <select
                  name="hamur"
                  value={formData.hamur}
                  onChange={handleChange}
                  required
                >
                  <option value="">Hamur Kalınlığı</option>
                  <option value="İnce Kenar">İnce Kenar</option>
                  <option value="Kalın Kenar">Kalın Kenar</option>
                  <option value="Normal">Normal</option>
                </select>
              </label>
            </div>
          </div>

          <div className="extras">
            <br />
            <legend>
              <strong>Ek Malzemeler</strong>
            </legend>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="extras-elements">
              {toppingsOptions.map((topping) => (
                <label key={topping}>
                  <input
                    type="checkbox"
                    name="toppings"
                    value={topping}
                    checked={formData.toppings.includes(topping)}
                    onChange={handleChange}
                  />
                  {topping}
                </label>
              ))}
              {errors.toppings && (
                <p style={{ color: "red" }}>{errors.toppings}</p>
              )}
            </div>
          </div>

          <div className="customer-note">
            <strong>Adınız Soyadınız</strong>
            <label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </label>
            <strong>Sipariş Notu</strong>
            <label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="order-control">
            <div className="pizza-count">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pizzaCount: Math.max(1, prev.pizzaCount - 1),
                  }))
                }
              >
                -
              </button>
              <p>{formData.pizzaCount}</p>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    pizzaCount: prev.pizzaCount + 1,
                  }))
                }
              >
                +
              </button>
            </div>
            <div className="order-price">
              <h4>Sipariş Toplamı</h4>
              <p>Seçimler {totalToppingPrice}₺</p>
              <p>Toplam {totalPrice}₺</p>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Gönderiliyor..." : "SİPARİŞ VER"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
