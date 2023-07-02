import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../Pages/Movies/Movies";
import WebMovies from "../Pages/WebMovies/WebMovies";
import Details from "../Pages/Movies/Details/Details";
import Register from "../Components/forms/Register/Register";
import Login from "../Components/forms/Login/Login";
import UseProfile from "../Components/forms/UserProfile";
import { AuthHome } from "../Pages/AuthHome/AuthHome";
import { useAuth } from "../Contexts/AuthContext";
import FavoredMovies from "../Pages/FavoredMovies/FavoredMovies";

export function Routers() {
  const { isAuthenticated, stepAccess } = useAuth();

  const isPrivateRoute = (): boolean => {
    if (isAuthenticated && stepAccess === "logged") {
      return true;
    }
    return false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthHome />}>
          {!isPrivateRoute() ? (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/preview" element={<WebMovies />} />
              <Route path="/filmes" element={<Movies />} />
            </>
          ) : (
            <>
              <Route path="/profile" element={<UseProfile />} />
              <Route path="/preview" element={<WebMovies />} />
              <Route path="/movies" element={<WebMovies />} />
              <Route path="/filmes" element={<Movies />} />
              <Route path="/filmes-favoritos" element={<FavoredMovies />} />
              <Route path="/filmes/Detalhes/:id" element={<Details />} />
            </>
          )}
        </Route>
        <Route path="*" element={<>Página não existente</>} />
      </Routes>
    </BrowserRouter>
  );
}
