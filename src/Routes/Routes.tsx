import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../Pages/Movies/Movies";

export function Routers () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Home</>}/>
                <Route path="/filmes" element={<Movies />}/>
                <Route path="*" element={<>Página não existente</>}/>
            </Routes>
        </BrowserRouter>
    )
}