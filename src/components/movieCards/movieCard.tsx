import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar, Button } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import video from "./video.mp4";
import logo from "./logo.png";
export default function MovieCard() {
  const videoEl: any = React.useRef(null);
  function play(e: any) {
    videoEl.current.play();
  }
  function pause(e: any) {
    videoEl.current.pause();
  }

  return (
    <Card
      component={"div"}
      elevation={0}
      onMouseEnter={play}
      onMouseLeave={pause}
      sx={{
        maxWidth: 300,
        borderRadius: "15px",
        "--display": "collapse",
        "--displayBut": "none",
        backgroundColor: "#181818",
        "--borderRadius": "15px",
        transition: "all .5s ease",
        pb: 2,
        "&:hover": {
          transform: "scale(1.2)",
          "--displayBut": "flex",
          "--borderRadius": "15px 15px 0 0",
          "--display": "visible",
          perspective: "5000px",
          backgroundColor: "rgb(31, 30, 30)",
          zIndex: 400,
        },
        cursor: "pointer",
      }}
    >
      <span style={{ position: "relative" }}>
        <CardMedia
          sx={{ borderRadius: "var(--borderRadius)" }}
          src={video}
          component="video"
          width={"300px"}
          ref={videoEl}
        />
        <span
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "6px",
            position: "relative",
            right: "-80%",
            fontSize: "1rem",
            padding: ".2em .2em",
            top: "-30px",
          }}
        >
          3:15
        </span>
        <span
          style={{
            color: "white",
            visibility: "var(--display)",
            backgroundColor: "black",
            borderRadius: "6px",
            zIndex: 9090900,
            position: "relative",
            right: "-25%",
            fontSize: "1rem",
            padding: ".5em .5em",
            top: "-30px",
          }}
        >
          Keep hovering to play
        </span>
      </span>
      <CardContent
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          padding: ".8em .5em",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            gap: " .4em",
            padding: ".8em .5em",
          }}
        >
          <Avatar src={logo} alt="logo" />
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={"1rem"}
            color="white"
          >
            Lizards are a widespread group of squamate
            <br />
            <span style={{ color: "rgb(158, 156, 156)", fontWeight: 500 }}>
              RealmanTv
            </span>
            <br />
            <span style={{ color: "rgb(158, 156, 156)", fontWeight: 500 }}>
              1.7M views ° 11 months ago
            </span>
          </Typography>
        </span>
        <Button
          sx={{
            display: "var(--displayBut)",
            color: "white",
            backgroundColor: "#222222",
            borderRadius: "15px",
            textTransform: "capitalize",
          }}
          startIcon={<AccessTimeIcon />}
        >
          Watch later
        </Button>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#222222",
            borderRadius: "15px",
            display: "var(--displayBut)",
            textTransform: "capitalize",
          }}
          startIcon={<PlaylistPlayIcon />}
        >
          Add to Queue
        </Button>
      </CardContent>
    </Card>
  );
}
