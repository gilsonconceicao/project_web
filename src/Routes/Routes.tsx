import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "../Pages/Movies/Movies";
import WebMovies from "../Pages/WebMovies/WebMovies";
import Details from "../Pages/Movies/Details/Details";
import Register from "../Components/forms/Register";
import Login from "../Components/forms/Login";
import UseProfile from "../Components/forms/UserProfile";

export function Routers() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSwitchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebMovies />} />
        <Route path="/profile" element={<UseProfile />} />
        <Route
          path="/register"
          element={
            isLoginForm ? (
              <Register handleSwitchForm={handleSwitchForm} />
            ) : (
              <Login handleSwitchForm={handleSwitchForm} />
            )
          }
        />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/filmes/Detalhes/:id" element={<Details />} />
        <Route path="*" element={<>Página não existente</>} />
      </Routes>
    </BrowserRouter>
  );
}
