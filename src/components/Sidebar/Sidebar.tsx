'use client'

import Image from "next/image";
import styles from "./Sidebar.module.css"
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { logout } from "@/store/features/userSlice";
import { useInitialLikedTracks } from "@/hooks/useInitialTracks";

export const Sidebar = () => {
    const nameUser = useAppSelector((state) => state.user.user?.username)
    const dispatch =useAppDispatch()
    const handleLogout= () => {
      dispatch(logout())
      localStorage.clear()
    }
    useInitialLikedTracks()
    return (
        <div className={styles.mainSidebar}>
        {nameUser && 
        (<div onClick={handleLogout} className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>{nameUser}</p>
          <div className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#icon-logout" />
            </svg>
          </div>
        </div>)}
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                  width={250} 
                  height={160}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                  width={250} 
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                  width={250} 
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;