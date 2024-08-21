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
    dispatch(logout())
  };

  const handleFavorite = () => {
    if (user) {
      router.push("/tracks/favorite")
    } else {
      alert("Вы не авторизованы")
    }
  };
    return(
        <ul className={styles.menuList}>
            <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>Главное</Link>
            </li>
            <li onClick={handleFavorite} className={styles.menuItem}> 
                <Link href="#" className={styles.menuLink}>Мой плейлист</Link>
            </li>
            <li className={styles.menuItem}>
                {user 
                ? 
                (<a onClick={handleLogout} className={styles.menuLink}>Выйти</a>) 
                : 
                (<Link className={styles.menuLink} href="/login">Войти</Link>)}
            </li>
        </ul>
    )
}

export default Menu;
