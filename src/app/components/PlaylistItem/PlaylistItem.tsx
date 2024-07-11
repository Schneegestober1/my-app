import { TrackType } from "@/types/trackstypes";
import styles from "./PlaylistItem.module.css";

type TrackProps = {
    track: TrackType
}

export const PlaylistItem = ({track}: TrackProps) => {
    return (
        <div className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </svg>
                    </div>
                    <div className={styles.trackTitleText}>
                        <span className={styles.trackTitleLink}>
                        Guilt <span className={styles.trackTitleSpan} />
                        </span>
                    </div>
                </div>
                <div className={styles.trackAuthor}>
                    <span className={styles.trackAuthorLink}>
                        Nero
                    </span>
                </div>
                <div className={styles.trackAlbum}>
                    <span className={styles.trackAlbumLink}>
                        Welcome Reality
                    </span>
                </div>
                <div className={styles.trackTime}>
                    <svg className={styles.trackTimeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className={styles.trackTimeText}>4:44</span>
                </div>
            </div>
        </div>
    )
}