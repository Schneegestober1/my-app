import Image from "next/image";
import styles from "./Navigation.module.css";
import { Menu } from "../Menu/Menu";

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
          <Menu/>
        </div>
      </nav>
    )
  }

export default Navigation;