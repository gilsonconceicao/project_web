import { AuthProvider } from "./Contexts/AuthContext";
import { Routers } from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Routers />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
}

export default App;
