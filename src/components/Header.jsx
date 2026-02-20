import React from "react";
import union from "./images/Union (2).svg"
import flag from "./images/flag.svg"

const Header = () => {
  return (
    <div id="container">

      <div className="header">
        <img src={union} alt="union" className="union1"/>
        <a href="">Проекты</a>
        <a href="">Вакансии</a>
        <a href="">О нас</a>
        <a href="">Отзывы</a>
        <a href="">Контакты</a>
      </div>
      <div className="hed1">
        <select name="" id="">
        <img src={flag} alt="" className="flag"/>
          <option value="">rus</option>
          <option value="">eng</option>
        </select>
        <div className="hed2">
          <p>Нужна консультация?</p>
          <p>0502800202</p>
        </div>
        <button className="btn">Написать</button>
      </div>
    </div>
  );
};

export default Header;
