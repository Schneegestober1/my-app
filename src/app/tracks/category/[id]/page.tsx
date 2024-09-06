'use client'

import { getCategoryTracks } from "@/api/tracks"
import styles from "../../layout.module.css"
import { useAppDispatch, useAppSelector } from "@/utils/hooks"
import { useEffect, useRef } from "react"
import { setCurrentPlaylist } from "@/store/features/playlistSlice"
import Centerblock from "@/components/Centerblock/Centerblock"
import { Filter } from "@/components/Filter/Filter"

type CategoryProps = {
  params: {
    id: string;
  }
};

function Category({ params }: CategoryProps) {
  const dispatch = useAppDispatch();
  const { initialPlaylist } = useAppSelector((state) => state.playlist)

  const name = useRef()
  
  useEffect(() => {
    try {
      getCategoryTracks(params.id).then((res) => {
        name.current = res.name;
        const items = res.items;
        const tracks = items.map((item: number) => initialPlaylist.filter((track) => track._id === item)).flat()
        dispatch(setCurrentPlaylist(tracks))
      })
    } catch (error) {
      
    }
  }, [dispatch, params.id, initialPlaylist, name])
  

  return (
    <>
      <h2 className={styles.centerblockH2}>{name.current}</h2>
      <Filter tracks={tracks}/>
      <Centerblock />
    </>
  );
};

export default Category
