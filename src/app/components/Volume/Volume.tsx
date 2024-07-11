import styles from "./Volume.module.css";

export const Volume = () => {
  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeContent}>
          <svg className={styles.volumeImage}>
            <use xlinkHref="img/icon/sprite.svg#icon-volume" />
          </svg>
        </div>
        <div className={styles.volumeProgress}>
          <input
            className={styles.volumeProgressLine}
            type="range"
            name="range"
          />
        </div>
      </div>
    </div>
  )
}

export default Volume;