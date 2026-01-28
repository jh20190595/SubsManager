import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.tsx";


export default function DashBoardLayout() {
    return (
        <>
            <SideBar/>
            <Outlet/>
        </>
    )
}