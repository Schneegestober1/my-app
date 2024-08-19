'use client'

import { TrackType } from "@/types/trackstypes";
import styles from "./PlaylistItem.module.css";
import { convertSecondsToMinutes } from "@/utils/helpers";
import {setCurrentTrack, setIsPlaying} from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector} from "@/utils/hooks";
import classNames from "classnames";
import useLikeTrack from "@/hooks/useLikeTrack";

type TrackProps = {
  track: TrackType,
  tracksData: TrackType[],
}

export const PlaylistItem = ({track, tracksData }: TrackProps) => {
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist?.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist?.isPlaying || false);

  const {name, author, album, duration_in_seconds, _id} = track;
  const isCurrentTrack = currentTrack ? currentTrack._id === _id : false;

  const time = convertSecondsToMinutes(duration_in_seconds);

  const {isLiked, handleLike} = useLikeTrack(track);

  const handleTrackClick = () => {
    dispatch(setCurrentTrack({track, tracksData}))
    dispatch(setIsPlaying(true));
  }

  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg className={classNames(styles.trackTitleSvg, {[styles.trackTitleSvgActive]: isCurrentTrack && isPlaying})}>
              <use xlinkHref="img/icon/sprite.svg#icon-note"/>
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan}/>
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
        <div className={styles.trackTime} onClick={handleLike}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref={isLiked ? "/img/icon/sprite.svg#icon-active-like" : "/img/icon/sprite.svg#icon-like"}/>
          </svg>
          <span className={styles.trackTimeText}>{time}</span>
        </div>
      </div>
    </div>
  )
}
