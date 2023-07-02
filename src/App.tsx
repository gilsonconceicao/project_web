import { AuthProvider } from "./Contexts/AuthContext";
import { FavoredMovieProvider } from "./Contexts/FavoredMoviesContext";
import { Routers } from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
      <AuthProvider>
        <FavoredMovieProvider>
          <QueryClientProvider client={queryClient}>
            <Routers />
          </QueryClientProvider>
        </FavoredMovieProvider>
      </AuthProvider>
    </>
  );
}

export default App;
