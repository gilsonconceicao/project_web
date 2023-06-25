import Menu from "./Components/Menu/Menu";
import { Routers } from "./Routes/Routes"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient(); 

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Menu />
        <Routers />
      </QueryClientProvider>
    </>
  )
}

export default App
