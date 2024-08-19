import styles from "./Menu.module.css";
import {useAppDispatch, useAppSelector} from "@/utils/hooks";
import {useRouter} from "next/navigation";
import {logout} from "@/store/features/userSlice";
import Link from "next/link";

export const Menu = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const router = useRouter()
  const handleLogout = () => {
    dispatch(logout());
  };
    return(
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link> href="#" className={styles.menuLink}>
                    Главное
              </Link>
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
