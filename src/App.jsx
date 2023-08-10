import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/2.about/About";
import Skill from "./pages/3.skills/Skill";
import Contact from "./pages/4.contact/Contact";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col  w-screen h-screen max-w-[560px] mx-auto">
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route path="/skills" element={<Skill />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
