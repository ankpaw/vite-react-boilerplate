import { Button, Typography } from '@mui/material';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.hero}>
    <Typography variant="h2" component="h1" className={styles.title}>
      Welcome to {APP_NAME}!
    </Typography>
    <Typography variant="body1" className={styles.subtitle}>
      This is the home page of our application.
    </Typography>
    <Button variant="contained" color="primary" className={styles.button}>
      Get Started
    </Button>
  </div>
  );
}

export default Home;
