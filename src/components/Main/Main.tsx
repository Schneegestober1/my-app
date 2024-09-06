'use client'

import Sidebar from "../Sidebar/Sidebar";
import Centerblock from "../Centerblock/Centerblock";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import { getTracks } from "@/api/tracks";
import { TrackType } from "@/types/trackstypes";

export const Main = () => {
    const [tracks, setTracks] = useState<TrackType[]>([])
    useEffect(()=> {
        getTracks().then((res) => {
            setTracks(res)
        })
    },[])
    return (
        <main className={styles.main}>
            <Navigation/>
            <Centerblock tracks={tracks}/>
            <Sidebar/>
        </main>
    )
}

export default Main;