"use client";

import { setCurrentPlaylist } from "@/store/features/playlistSlice";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { useEffect } from "react";
import styles from '../FavoriteTracks/favoriteTracks.module.css'
import Centerblock from "../Centerblock/Centerblock";


export function FavoriteTracks() {
  const allTracks = useAppSelector((state) => state.playlist.favoritePlaylist);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setCurrentPlaylist(allTracks));
  }, [dispatch, allTracks]);

  return (
    <>
      <h2 className={styles.centerblockH2}>Мои треки</h2>
      <Centerblock />
    </>
  );
}