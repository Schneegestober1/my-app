import Sidebar from "../Sidebar/Sidebar";
import Centerblock from "../Centerblock/Centerblock";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Main.module.css";

export const Main = () => {
    return (
        <main className={styles.main}>
            <Navigation/>
            <Centerblock/>
            <Sidebar/>
        </main>
    )
}

export default Main;