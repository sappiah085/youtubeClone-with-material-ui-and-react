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
import { useNavigate } from "react-router-dom";
export default function MovieCard({
  id,
  flexDirection,
}: {
  id: number;
  flexDirection?: string;
}) {
  const navigate = useNavigate();
  const [time, setTime] = React.useState(0);
  let timeR: any;
  const videoEl: any = React.useRef(null);
  function play(e: any) {
    if (!flexDirection) {
      timeR = setTimeout(() => setTime(3000), 3000);
    }
  }
  function pause(e: any) {
    if (!flexDirection) {
      clearTimeout(timeR);
      setTime(0);
    }
  }
  React.useEffect(() => {
    if (time) {
      videoEl.current.play();
    } else {
      videoEl.current.pause();
    }
  }, [time]);

  return (
    <Card
      onClick={() => navigate(`/${id}`)}
      component={"div"}
      elevation={0}
      onMouseEnter={play}
      onMouseLeave={pause}
      sx={{
        display: "flex",
        maxHeight: !flexDirection ? "400px" : "300px",
        maxWidth: flexDirection ? "100%" : 300,
        flexDirection: flexDirection || "column",
        borderRadius: "15px",
        "--display": "collapse",
        "--displayTime": time ? "collapse" : "visible",
        transition: "all .5s ease",
        pb: 1,
        transform: time === 3000 ? "scale(1.2)" : "scale(1)",
        "--displayBut": time === 3000 ? "flex" : "none",
        backgroundColor: time === 3000 ? "rgb(31, 30, 30)" : "#181818",
        "--borderRadius": time === 3000 ? "15px 15px 0 0" : "15px",
        "&:hover": {
          "--display": time === 3000 || flexDirection ? "collapse" : "visible",
          zIndex: 400,
        },
        cursor: "pointer",
        rowGap: 0.2,
      }}
    >
      <span style={{ position: "relative" }}>
        <CardMedia
          sx={{
            borderRadius: "var(--borderRadius)",
            maxWidth: "300px",
          }}
          src={video}
          component="video"
          ref={videoEl}
        />
        <span
          className="time"
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.507)",
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
          className="hover"
          style={{
            color: "white",

            backgroundColor: "rgba(0, 0, 0, 0.807)",
            borderRadius: "6px",
            zIndex: 900,
            position: "relative",
            right: "-25%",
            fontSize: "1rem",
            padding: ".5em .5em",
            top: "-35px",
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
          padding: "0 .5em",
          pb: "0px !important",
        }}
      >
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            gap: " 1em",
            padding: "0 .5em",
          }}
        >
          {!flexDirection && <Avatar src={logo} alt="logo" />}
          <Typography
            variant="h6"
            fontWeight={500}
            fontSize={"1rem"}
            color="white"
          >
            Lizards are a widespread group of squamate
            <br />
            <span style={{ color: "rgb(158, 156, 156)", fontWeight: 200 }}>
              RealmanTv
            </span>
            <br />
            <span style={{ color: "rgb(158, 156, 156)", fontWeight: 200 }}>
              1.7M views ° 11 months ago
            </span>
          </Typography>
        </span>
        <Button
          sx={{
            display: "var(--displayBut)",
            color: "white",
            backgroundColor: "#272727",
            borderRadius: "15px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#272727",
            },
          }}
          startIcon={<AccessTimeIcon />}
        >
          Watch later
        </Button>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#272727",
            borderRadius: "15px",
            display: "var(--displayBut)",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#272727",
            },
          }}
          startIcon={<PlaylistPlayIcon />}
        >
          Add to Queue
        </Button>
      </CardContent>
    </Card>
  );
}
