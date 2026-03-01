import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PlatformLayout from './components/layout/PlatformLayout.tsx';
import DashBoard from './pages/platform/dashBoard.tsx';
import Subscription from './pages/platform/subscription.tsx';
import PublicLayout from './components/layout/PublicLayout.tsx';
import PublicPage from './pages/Public/PublicPage.tsx';
import LoginValidation from './components/auth/LoginValidation.tsx';
import { Toaster } from 'react-hot-toast';
;

function App() {

    return (
        <BrowserRouter>

            <Toaster
                position='top-center'
                reverseOrder={false}
                containerStyle={{
                    zIndex: 99999,
                }}
                toastOptions={{
                    duration: 1000,
                    style: {
                        background: '#333',
                        color: '#fff',
                    }
                }}
            />
            <Routes>

                <Route path='/' element={<PublicLayout />} />

                <Route element={<LoginValidation />}>
                    <Route element={<PlatformLayout />}>
                        <Route path='/dashBoard' element={<DashBoard />} />
                        <Route path='/subscription' element={<Subscription />} />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App;
