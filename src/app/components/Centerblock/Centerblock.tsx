import { PlaylistItem } from "@/app/components/PlaylistItem/PlaylistItem";
import { Filter } from "../Filter/Filter";
import PlaylistTitle from "../PlaylistTitle/PlaylistTitle";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Centerblock.module.css";
import { getTracks } from "../../../api/tracks";
import { TrackType } from "@/types/trackstypes";

export async function Centerblock () {
    let tracks: TrackType [] = []
    let error = ''
    try {
        tracks = await getTracks()
    } catch (err: unknown) {
        error = err instanceof Error ? "Ошибка при загрузке треков " + err.message : "Неизвестная ошибка"
    }

    return (
    <div className={styles.mainCenterblock}>
        <Searchbar/>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter tracks={tracks}/>
        <div className={styles.centerblockContent}>
            <PlaylistTitle/>
            <div className={styles.contentPlaylist}>
                {tracks.map((track) => <PlaylistItem key={track.id} track={track}/>) }
            </div>
            {error && error}
        </div>
    </div>
)}

export default Centerblock;