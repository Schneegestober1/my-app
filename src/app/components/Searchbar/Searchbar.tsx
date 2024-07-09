import styles from "./Searchbar.module.css";

export const Searchbar = () => {
    return (
        <div className={styles.centerblockSearch}>
            <svg className={styles.searchSvg}>
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
            </svg>
            <input
                className={styles.searchText}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export default Searchbar;