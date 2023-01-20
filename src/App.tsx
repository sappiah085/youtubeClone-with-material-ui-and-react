import { Grid } from "@mui/material";
import Navbar from "./components/nav/nav";
import LittleSideMenu from "./components/littleSideMenu/littleSideMenu";
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
      <LittleSideMenu />
    </Grid>
  );
}

export default App;
