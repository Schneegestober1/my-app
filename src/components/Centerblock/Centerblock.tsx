'use client'

import { PlaylistItem } from "@/components/PlaylistItem/PlaylistItem";
import { Filter } from "../Filter/Filter";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Centerblock.module.css";

export function Centerblock (props: {tracks: }) {

    // let tracks: TrackType[] = []
    // let error = ''
    // try {
    //     tracks = await getTracks()
    // } catch (err: unknown) {
    //     error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка"
    // }
    return (
    <div className={styles.mainCenterblock}>
        <Searchbar/>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter tracks={tracks}/>
        <div className={styles.centerblockContent}>
            <PlaylistTitle/>
            {/* {error 
            ? 
            <div className={styles.error}>{error}</div> 
            :
            <div className={styles.contentPlaylist}>
                {tracks.map((track) => <PlaylistItem key={track._id} track={track} tracksData={tracks}/>)}
            </div>} */}
            <div className={styles.contentPlaylist}>
                {tracks.map((track) => <PlaylistItem key={track._id} track={track} tracksData={tracks}/>)}
            </div>
        </div>
    </div>
)}

export default Centerblock;