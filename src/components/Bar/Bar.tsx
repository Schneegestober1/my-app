'use client'

import PlayerControls from "../PlayerControls/PlayerControls";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./Bar.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import { CurrentTimeBlock } from "./CurrentTimeBlock/CurrentTimeBlock";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { setIsPlaying, setNextTrack } from "@/store/features/playlistSlice";

export const Bar = () => {
  const currentTrack = useAppSelector((state) => state.playlist?.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist?.isPlaying || false);

  const dispatch = useAppDispatch();
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isLoop, setIsLoop] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
 
    if (audio) 
      audio.play()

    setIsPlaying(true)
  }, [currentTrack])

  const handleNextTrack = () => {
    dispatch(setNextTrack())
  }

  useEffect(() => {
    audioRef.current?.addEventListener("ended", handleNextTrack);

    return () => {
      audioRef.current?.removeEventListener("ended", handleNextTrack);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying)
        audio.pause();
      else
        audio.play();

        dispatch(setIsPlaying(!isPlaying));
    }
  }

  const handleLoop = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.loop = !isLoop;
    }
    setIsLoop((prev) => !prev);
  }

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = Number(event.target.value);
    }
  }
  if (!currentTrack) {
    return null
  }
  const {name, author, track_file} = currentTrack;
  const duration = audioRef.current?.duration || 0;

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
      <audio className={styles.audio} ref={audioRef} controls src={track_file} onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)} />
        <ProgressBar max={duration} value={currentTime} step={0.01} onChange={handleSeek} />
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls togglePlay={togglePlay} isPlaying={isPlaying} handleLoop={handleLoop} isLoop={isLoop} />
            <TrackPlay name={name} author={author} currentTrack={currentTrack} />
          </div>
          <div className={styles.box}>
            <Volume audio={audioRef.current} />
            <CurrentTimeBlock currentTime={currentTime} duration={duration} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar;
