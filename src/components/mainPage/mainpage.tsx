import { Grid, Container } from "@mui/material";
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
      <Container
        disableGutters
        sx={{ width: { md: "calc(100%-140px)", xs: "100%" }, margin: 0 }}
      >
        <Grid
          container
          height={"100%"}
          flexWrap={"nowrap"}
          flexDirection={"column"}
        >
          <Carro />
          <Grid
            container
            alignItems={"center"}
            width={"100%"}
            justifyContent={"center"}
            gap={1.2}
            py={6}
            flexWrap={"wrap"}
            sx={{ overflowY: "scroll"}}
          >
            {[1, 2, 3, 4].map((number, id) => (
              <MovieCard id={id} key={id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
