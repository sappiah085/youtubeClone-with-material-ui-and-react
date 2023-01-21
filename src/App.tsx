import { Grid } from "@mui/material";
import Navbar from "./components/nav/nav";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <Grid
      maxWidth={"xl"}
      flexDirection={"column"}
      height={"100vh"}
      container
      bgcolor={"#181818"}
      flexWrap={"nowrap"}
      alignItems={"flex-start"}
    >
      <Navbar />
      <Outlet />
    </Grid>
  );
}

export default App;
