import { Grid } from "@mui/material";
import Navbar from "./components/nav/nav";
import LittleSideMenu from "./components/littleSideMenu/littleSideMenu";
import Carro from "./components/carro/carro";
import MovieCard from "./components/movieCards/movieCard";
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
      <Grid height={"100vh"} pt={12} pb={5} container flexWrap={"nowrap"}>
        <LittleSideMenu />
        <Grid
          container
          maxWidth={"xl"}
          width={"100%"}
          height={"100%"}
          flexWrap={"nowrap"}
          flexDirection={"column"}
        >
          <Carro />
          <Grid
            container
            justifyContent={"center"}
            width={"100%"}
            maxWidth={"xl"}
            height={"100%"}
            gap={2}
            rowGap={4}
            py={6}
            flexWrap={"wrap"}
            sx={{ overflowY: "scroll", overflowX: "hidden" }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 90, 2, 4].map((number, id) => (
              <MovieCard key={id} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
