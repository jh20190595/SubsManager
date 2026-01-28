import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <div className="container">

            <div className="header">
                <h2>상단</h2>
            </div>

            <main>            
                <Outlet />
            </main>
        </div>
    )
}