import { Suspense, createContext, lazy, useMemo, useState } from "react";
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
import Footer from "@components/Footer/Footer";
const Home = lazy(() => import("@routes/Home/Home"));
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="xl" className={styles["container"]}>
        <Outlet />
      </Container>
      <Footer />
    </>
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
                <Route
                  index
                  element={
                    <Suspense>
                      <Home />
                    </Suspense>
                  }
                />
              </Route>
            </Routes>
          </Router>
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
