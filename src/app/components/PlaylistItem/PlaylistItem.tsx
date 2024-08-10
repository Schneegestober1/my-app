'use client'

import { TrackType } from "@/types/trackstypes";
import styles from "./PlaylistItem.module.css";
import { convertSecondsToMinutes } from "@/utils/helpers";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector} from "@/hooks";
import classNames from "classnames";

type TrackProps = {
    track: TrackType,
    tracksData: TrackType[],
}

export const PlaylistItem = ({track, tracksData }: TrackProps) => {
    const dispatch = useAppDispatch();
    const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
    const {name, author, album, duration_in_seconds, id} = track;
    const isPlaying = currentTrack ? currentTrack.id === id : false;

    const time = convertSecondsToMinutes(duration_in_seconds);
    
    const handleTrackClick = () => {
      dispatch(setCurrentTrack({track, tracksData}))
    }

    return (
        <div onClick={handleTrackClick} className={styles.playlistItem}>
            <div className={styles.playlistTrack}>
                <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                        <svg className={isPlaying ? classNames(styles.trackTitleSvg, styles.trackTitleSvgActive) : styles.trackTitleSvg}>
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