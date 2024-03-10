import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import Game from "./pages/game/Game";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu/>} />
                <Route path="/game" element={<Game/>} />
                <Route path="*" element={<h1 style={{marginTop: "10rem"}}>Страница не найдена</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;