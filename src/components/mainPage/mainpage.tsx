import { Grid } from "@mui/material";
import LittleSideMenu from "../littleSideMenu/littleSideMenu";
import Carro from "../carro/carro";
import MovieCard from "../movieCards/movieCard";
export default function MainPage() {
  return (
    <Grid
      width={"100%"}
      height={"100vh"}
      pt={12}
      pb={5}
      container
      flexWrap={"nowrap"}
    >
      <LittleSideMenu />
      <Grid
        container
        height={"100%"}
        flexWrap={"nowrap"}
        flexDirection={"column"}
        flex={18}
      >
        <Carro />
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
          gap={2}
          rowGap={4}
          py={6}
          flexWrap={"wrap"}
          sx={{ overflowY: "scroll", overflowX: "hidden" }}
        >
          {[1, 2, 3, 4].map((number, id) => (
            <MovieCard id={id} key={id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
