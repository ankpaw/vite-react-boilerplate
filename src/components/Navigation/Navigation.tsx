import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styles from "./Navigation.module.scss";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../App";
import { Link } from "react-router-dom";

const Navigation = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <nav className={styles["navbar"]}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            {`${APP_NAME} v${APP_VERSION}`}
          </Typography>
          <div className={styles["links"]}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
          <div>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default Navigation;
