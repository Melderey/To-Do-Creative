import { Link } from "react-router-dom";
import React from "react";

import { TO_DO_PAGE } from "../constants/url";

const MainPage = (): JSX.Element => {
  return (
    <div className="container">
      <h2>Привет, меня зовут Миша!</h2>

      <p>Это мой учебный проект "Список задач"</p>
      <p>Надеюсь, он поможет тебе планировать свои дела!</p>
      <Link to={TO_DO_PAGE}>
        <button className="button-theme-toggler button">Перейти к приложению</button>
      </Link>
    </div>
  );
};

export default MainPage;
