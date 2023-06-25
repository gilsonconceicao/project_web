import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../Pages/Movies/Movies";
import WebMovies from "../Pages/WebMovies/WebMovies";
import Details from "../Pages/Movies/Details/Details";

export function Routers () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WebMovies/>}/>
                <Route path="/filmes" element={<Movies />}/>
                <Route path="/filmes/Detalhes/:id" element={<Details />}/>
                <Route path="*" element={<>Página não existente</>}/>
            </Routes>
        </BrowserRouter>
    )
}