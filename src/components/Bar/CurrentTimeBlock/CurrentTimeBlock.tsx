import { convertSecondsToMinutes } from "@/utils/helpers";
import styles from "./CurrentTimeBlock.module.css";

type CurrentTimeProps = {
    currentTime: number;
    duration: number;
}

export function CurrentTimeBlock({currentTime, duration}: CurrentTimeProps) {
    const durationTime = convertSecondsToMinutes(duration)
    const currentTimeSong = convertSecondsToMinutes(currentTime)
    return (
        <div className={styles.time}>{`${currentTimeSong} / ${durationTime}`}</div>
    )
}