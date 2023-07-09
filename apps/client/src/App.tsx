import { useEffect, useState } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import "./App.css";
import { theme } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRoute from "./routes/Navigation";

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
          <Routes>
            <Route path="*" element={<MainRoute />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
