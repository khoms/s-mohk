import { useEffect, useState } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/main/DashboardPage";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setGreeting);
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DashboardPage />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
