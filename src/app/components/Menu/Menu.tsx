import styles from "./Menu.module.css";

export const Menu = () => {
    return(
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>
                <a href="#" className={styles.menuLink}>
                    Главное
                </a>
            </li>
            <li className={styles.menuItem}> 
                <a href="#" className={styles.menuLink}>
                    Мой плейлист
                </a>
            </li>
            <li className={styles.menuItem}>
                <a href="../signin.html" className={styles.menuLink}>
                    Войти
                </a>
            </li>
        </ul>
    )
}

export default Menu;
