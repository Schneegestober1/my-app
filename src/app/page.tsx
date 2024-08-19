import styles from "./page.module.css";
import { Main } from "@/components/Main/Main";
import { Bar } from "@/components/Bar/Bar";
import Footer from "@/components/Footer/Footer";
import { CurrentTrackProvider } from "@/contexts/CurrentTrackProvider";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CurrentTrackProvider>
          <Main/>
          <Bar/>
        </CurrentTrackProvider>
        <Footer/>
      </div>
    </div>
  );
}
