// 'use client'

import { useEffect, useState } from "react";
import styles from "./Volume.module.css";

type VolumeProps = {
  audio: HTMLAudioElement | null,
}

export const Volume = ({audio}: VolumeProps) => {
  const [volume, setVolume] = useState<number>(0.5);

  useEffect(() => {
  if (audio) {
    audio.volume = volume;
  }},[volume])
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
            name="range"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}

export default Volume;