import { createContext, useMemo, useState } from "react";
import styles from "./App.module.scss";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navigation from "@components/Navigation/Navigation";
import Home from "@routes/Home/Home";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Layout = () => {
  return (
    <Container maxWidth="xl" className={styles["container"]}>
      <Navigation />
      <Outlet />
    </Container>
  );
};

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
