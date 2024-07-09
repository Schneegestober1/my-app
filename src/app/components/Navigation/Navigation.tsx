import Image from "next/image";
import styles from "./Navigation.module.css";

export const Navigation =() => {
    return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image className={styles.logoImage} src="/img/logo.png" alt="Skypro-logo" width={114} height={17}/>
      </div>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      <div className={styles.navMenu}>
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="../signin.html" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;