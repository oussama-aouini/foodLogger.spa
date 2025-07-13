import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Box, CssBaseline, Toolbar } from "@mui/material";

const drawerWidth = 240;

const AppLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
export default AppLayout;
