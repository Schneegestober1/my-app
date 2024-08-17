import useLikeTrack from "@/hooks/useLikeTrack";
import styles from "./TrackPlay.module.css";
import { TrackType } from "@/types/trackstypes";

type TrackPlayProps = {
  name:string,
  author: string,
  currentTrack: TrackType,
}

export const TrackPlay = ({name, author, currentTrack}: TrackPlayProps) => {
  const {isLiked, handleLike} = useLikeTrack(currentTrack);

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
            {name}
          </a>
        </div>
        <div className={styles.trackPlayAlbum}>
          <a className={styles.trackPlayAlbumLink} href="http://">
            {author}
          </a>
        </div>
      </div>
      <div className={styles.trackPlayLikeDis}>
        <div className={styles.trackPlayLike} onClick={handleLike}>
          <svg className={styles.trackPlayLikeSvg}>
            <use xlinkHref={isLiked ? "/img/icon/sprite.svg#icon-active-like" : "/img/icon/sprite.svg#icon-like"} />
          </svg>
        </div>
        {/* <div className={styles.trackPlayDislike}>
          <svg className={styles.trackPlayDislikeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div> */}
      </div>
    </div>
  )
}

export default TrackPlay;