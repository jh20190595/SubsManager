import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.tsx";
import styles from './PlatformLayout.module.css'

export default function DashBoardLayout() {
    
    return (
        <div className={styles.container}>

            <aside className={styles.sideWrap}><SideBar /></aside>
            <main className={styles.contentWrap}><Outlet /></main>

        </div>
    )
}