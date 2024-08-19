'use client'
import Image from "next/image";
import styles from "./Navigation.module.css";
import { Menu } from "../Menu/Menu";
import { useState } from "react";

export const Navigation =() => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
      <nav className={styles.mainNav}>
        <div className={styles.navLogo}>
          <Image className={styles.logoImage} src="/img/logo.png" alt="Skypro-logo" width={114} height={17}/>
        </div>
        <div onClick={()=> setIsOpen((prev) => !prev)} className={styles.navBurger}>
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </div>
        <div className={styles.navMenu}>
        {isOpen && <Menu/>}
        </div>
      </nav>
    )
  }

export default Navigation;