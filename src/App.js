import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DashBoardLayout from './components/layout/DashBoardLayout.tsx';
import DashBoard from './pages/platform/dashBoard.tsx';
import Subscription from './pages/platform/subscription.tsx';
import PublicLayout from './components/layout/PublicLayout.tsx';
import PublicPage from './pages/Public/publicPage.tsx';


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DashBoardLayout />}>
                    <Route path='/dashBoard' element={<DashBoard />} />
                    <Route path='/subscription' element={<Subscription />} />
                </Route>

                <Route element={<PublicLayout />}>
                    <Route path='/public' element={<PublicPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
