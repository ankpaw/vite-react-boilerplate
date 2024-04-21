import { Typography } from "@mui/material";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Typography variant="body1" color={"primary"}>
        &copy; {`${APP_NAME} ${new Date().getFullYear()}`}
      </Typography>
    </footer>
  );
};

export default Footer;
