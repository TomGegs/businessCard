import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col  w-screen h-screen max-w-[560px] mx-auto">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
