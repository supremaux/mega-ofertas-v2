import "./App.css";
import AppRoutes from "./routes";
import { useState, useEffect } from "react";
import LoadingScreen from "../src/components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento (substitua com lógica real, se necessário)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Exibe a tela de carregamento por 2 segundos

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return <AppRoutes />;
}

export default App;
