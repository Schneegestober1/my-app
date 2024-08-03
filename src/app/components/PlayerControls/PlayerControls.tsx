import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./PlayerControls.module.css";
import { setIsShuffled, setNextTrack, setPrevTrack } from "@/store/features/playlistSlice";

type PlayerControlsProps = {
    togglePlay:() => void;
    isPlaying: boolean;
    handleLoop:() => void;
    isLoop: boolean;
}

export const PlayerControls = ({togglePlay, isPlaying, handleLoop, isLoop}: PlayerControlsProps) => {
    const { isShuffled } = useAppSelector((state) => state.playlist);
    const dispatch = useAppDispatch();

    const handlePrevTrack = () => {
        dispatch(setPrevTrack())
    }
    const handleNextTrack = () => {
        dispatch(setNextTrack())
    }
    const handleShuffleTrack = () => {
        dispatch(setIsShuffled(!isShuffled))
    }
    
    return (
     <div className={styles.playerControls}>
            <div onClick={handlePrevTrack} className={styles.playerBtnPrev}>
                <svg className={styles.playerBtnPrevSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
            </div>
            <div onClick={togglePlay} className={styles.playerBtnPlay}>
                {isPlaying 
                    ? 
                    <svg className={styles.playerBtnPlaySvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-pause" />
                    </svg>
                    :
                    <svg className={styles.playerBtnPlaySvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-play" />
                    </svg>
                }
            </div>
            <div onClick={handleNextTrack} className={styles.playerBtnNext}>
                <svg className={styles.playerBtnNextSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </svg>
            </div>
            <div onClick={handleLoop} className={styles.playerBtnRepeat}>
                <svg className={isLoop ? styles.playerBtnRepeatSvgActive : styles.playerBtnRepeatSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
            </div>
            <div onClick={handleShuffleTrack} className={styles.playerBtnShuffle}>
                <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </svg>
            </div>
      </div>
    )
}

export default PlayerControls;