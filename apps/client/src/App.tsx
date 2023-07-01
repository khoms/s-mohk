import { useEffect, useState } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";

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
          <div></div>
          <h1>{greeting}</h1>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
