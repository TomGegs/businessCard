import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
    return (
        <BrowserRouter>
            <div className="mx-auto flex  h-screen w-screen max-w-[560px] flex-col">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
