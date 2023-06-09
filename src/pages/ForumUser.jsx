import React from "react";
import styles from "./ForumUser.modul.css";
import { Link } from "react-router-dom";

const ForumUser = () => {
  return (
    <div>
      <div className={styles.body}>
        <h2 className="category">Категории</h2>
        <div className="forum-category">
          <ul className="category-links">
            <li>
              <Link to="/detskaya-psy">Детская психология</Link>
            </li>
            <li>
              <Link to="/dushevnye-bolezni">Душевные болезни</Link>
            </li>
            <li>
              <Link to="/zavisimosti">Зависимости</Link>
            </li>
            <li>
              <Link to="/semeinye-problemy">Семейные неурядицы</Link>
            </li>
            <li>
              <Link to="/balance-pitanie">Сбалансированное питание</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForumUser;
