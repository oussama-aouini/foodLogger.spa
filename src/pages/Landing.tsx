import { Box, Container, Toolbar, Typography } from "@mui/material";
import Header from "../layouts/Header";

const Landing = () => {
  return (
    <Box>
      <Header />
      <Box component="main">
        <Toolbar />
        <Container maxWidth="sm">
          <Typography variant="h3">Welcome To FoodLogger</Typography>
        </Container>
      </Box>
    </Box>
  );
};
export default Landing;
