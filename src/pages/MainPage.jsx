import { Link } from "react-router-dom";
import { TO_DO_PAGE } from "../constants/url";

const MainPage = () => {
  return (
    <div className="container">
      <h2>Привет, меня зовут Миша!</h2>

      <p>Это мой учебный проект "Список задач"</p>
      <p>Надеюсь, он поможет тебе планировать своё время!</p>
      <Link to={TO_DO_PAGE}>
        <button className="button-theme-toggler">Перейти к приложению</button>
      </Link>
    </div>
  );
};

export default MainPage;
