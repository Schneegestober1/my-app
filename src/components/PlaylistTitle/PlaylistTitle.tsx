import styles from "./PlaylistTitle.module.css";

export const PlaylistTitle = () => {
    return (
        <div className={styles.contentTitle}>
            <div className={styles.playlistTitleCol01}>Трек</div>
            <div className={styles.playlistTitleCol02}>Исполнитель</div>
            <div className={styles.playlistTitleCol03}>Альбом</div>
            <div className={styles.playlistTitleCol04}>
                <svg className={styles.playlistTitleSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                </svg>
            </div>
        </div>
    )
}

export default PlaylistTitle;