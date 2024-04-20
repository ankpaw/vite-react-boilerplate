import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Typography variant="body1">
        {`Welcome to ${APP_NAME} v${APP_VERSION}`}
      </Typography>
    </div>
  );
};
export default Home;
