import { Typography } from '@mui/material';
import styles from './Footer.module.scss'; // Importing styles from SCSS file

function Footer() {
  return (
    <footer className={styles.footer}> {/* Applying the className from SCSS */}
      <Typography variant="body1" color="textSecondary">
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
