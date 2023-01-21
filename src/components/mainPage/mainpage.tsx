import { Grid } from "@mui/material";
import LittleSideMenu from "../littleSideMenu/littleSideMenu";
import Carro from "../carro/carro";
import MovieCard from "../movieCards/movieCard";
export default function MainPage() {
  return (
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
          {[1, 2, 3, 4, 5, 6].map((number, id) => (
            <MovieCard id={id} key={id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
