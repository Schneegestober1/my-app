'use client'

import { useCurrentTrack } from "@/contexts/CurrentTrackProvider";
import PlayerControls from "../PlayerControls/PlayerControls";
import { TrackPlay } from "../TrackPlay/TrackPlay";
import { Volume } from "../Volume/Volume";
import styles from "./Bar.module.css";
import { useRef, useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

export const Bar = () => {
  const {currentTrack} = useCurrentTrack();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const togglePlay = () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying((prev) => !prev);
    }
  }

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <ProgressBar max={duration} value={currentTime} step={0.01} onChange={handleSeek}/>
        <div className={styles.barPlayerBlock}>
          <div className={styles.barPlayer}>
            <PlayerControls />
            <TrackPlay name={name} author={author}/>
          </div>
          <Volume/>
        </div>
      </div>
    </div>
  )
}

export default Bar;