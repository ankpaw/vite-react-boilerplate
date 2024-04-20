import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styles from "./Navigation.module.scss";
import { IconButton, Typography, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../../App";
import { Link } from "react-router-dom";

const Navigation = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["logo"]}>
        <Typography variant="h3">Ankit Pawar</Typography>
      </div>
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
    </nav>
  );
};

export default Navigation;
