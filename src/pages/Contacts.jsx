import React from "react";
// import "./Contacts.css";
import {
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Contacts = () => {
  // Массив с адресами кризисных центров
  const crisisCenters = [
    {
      name: "Сезим",
      address: "Бишкек, улица Табышалиева 3",
      phone: "+(312)512-640",
    },
    {
      name: "Шанс",
      address: "Бишкек, проспект Чуй, 207, квартира 509",
      phone: "+996 (709) 710-320",
    },
    {
      name: "Акылкарачач при ОО «Эне назары»",
      address: "Ошская область, село Гульча, улица Набережная 1",
      phone: "+996 (555) 281-423, +996 (776)281-423;",
    },
    {
      name: "Каниет",
      address: "Джалал-Абад, улица Б.Осмонова 113",
      phone: "+996 (372) 255-084",
    },
    {
      name: "Маана при ОФ «Аялзат»",
      address: "Талас, улица Тагайбаева 274/2",
      phone: "+996 (557) 484-713, +996 (342)255-885;",
    },
    {
      name: "Тендеш",
      address: "Нарын, улица Кыргыза 31/3",
      phone: "+996 (700) 257-890, +996 (352)250-270;",
    },
  ];

  return (
    <div className="contacts-container">
      <h1>Контакты</h1>
      <p>Номер телефона: +996 (555) 555005</p>
      <div className="social-icons">
        <a href="https://whatsapp.com">
          <FaWhatsapp />
        </a>
        <a href="https://t.me">
          <FaTelegram />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
      </div>

      <div className="crisis-centers">
        <h2>Кризисные центры</h2>
        <ul>
          {crisisCenters.map((center, index) => (
            <li key={index}>
              <strong>{center.name}</strong>
              <br />
              <span>Адрес: {center.address}</span>
              <br />
              <span>Телефон: {center.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
