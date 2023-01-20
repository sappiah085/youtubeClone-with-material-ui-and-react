import { Button, Grid } from "@mui/material";
import { links } from "../sideBar/links";
export default function LittleSideMenu() {
  return (
    <Grid
      px={2}
      mt={12}
      pb={5}
      container
      height={"100vh"}
      flexDirection={"column"}
      gap={2}
      flexWrap={"nowrap"}
      width={"140px"}
      sx={{ overflowY: "scroll" }}
    >
      {links.slice(0, 4).map(({ name, icon }, id) => (
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "1rem",
            width: "100%",
            "&:hover": {
              backgroundColor: "#222222",
            },
            color: "white",
            justifyContent: "flex-start",
            gap: 2,
            textTransform: "capitalize",
            alignItems: "center",
            position: "relative",
          }}
          key={id}
          startIcon={icon}
        >
          {name}
        </Button>
      ))}
    </Grid>
  );
}
