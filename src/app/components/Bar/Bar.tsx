import PlayerControls from "../PlayerControls/PlayerControls";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./Bar.module.css";

export const Bar = () => {
    return (
      <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress} />
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <PlayerControls/>
              <TrackPlay/>
            </div>
            <Volume/>
          </div>
        </div>
      </div>
    )
}

export default Bar;