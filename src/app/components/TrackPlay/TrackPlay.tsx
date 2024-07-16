import styles from "./TrackPlay.module.css";

// 29:51

export const TrackPlay = () => {
  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <svg className={styles.trackPlaySvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={styles.trackPlayAuthor}>
          <a className={styles.trackPlayAuthorLink} href="http://">
            Wonderful Life
          </a>
        </div>
        <div className={styles.trackPlayAlbum}>
          <a className={styles.trackPlayAlbumLink} href="http://">
            Hurts
          </a>
        </div>
      </div>
      <div className={styles.trackPlayLikeDis}>
        <div className={styles.trackPlayLike}>
          <svg className={styles.trackPlayLikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className={styles.trackPlayDislike}>
          <svg className={styles.trackPlayDislikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TrackPlay;