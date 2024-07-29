'use client'

import { TrackType } from "@/types/trackstypes";
import styles from "./PlaylistItem.module.css";
import { convertSecondsToMinutes } from "@/utils/helpers";
import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import { useAppDispatch } from "@/hooks";

type TrackProps = {
    track: TrackType
}

export const PlaylistItem = ({track }: TrackProps) => {
    const {setCurrentTrack} = useCurrentTrack()
    const {name, author, album, duration_in_seconds} = track;
    const time = convertSecondsToMinutes(duration_in_seconds);
    
    const dispatch = useAppDispatch();

    const handleTrackClick = () => {
      dispatch(
        setCurrentTrack({track})
      )
    }

    const dispatch = useAppDispatch();

    return (
        <div onClick={handleTrackClick} className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note" />
                        </svg>
                    </div>
                    <div className={styles.trackTitleText}>
                        <span className={styles.trackTitleLink}>
                        {name} <span className={styles.trackTitleSpan} />
                        </span>
                    </div>
                </div>
                <div className={styles.trackAuthor}>
                    <span className={styles.trackAuthorLink}>
                        {author}
                    </span>
                </div>
                <div className={styles.trackAlbum}>
                    <span className={styles.trackAlbumLink}>
                        {album}
                    </span>
                </div>
                <div className={styles.trackTime}>
                    <svg className={styles.trackTimeSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className={styles.trackTimeText}>{time}</span>
                </div>
            </div>
        </div>
    )
}