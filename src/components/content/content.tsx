import {
  Avatar,
  Grid,
  Typography,
  Button,
  IconButton,
  Box,
  Switch,
} from "@mui/material";
import { Container } from "@mui/system";
import video from "../movieCards/video.mp4";
import Carro from "../carro/carro";
import MovieCard from "../movieCards/movieCard";
import logo from "../movieCards/logo.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SortIcon from "@mui/icons-material/Sort";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { useState } from "react";
import Menus from "../menus/menus";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { list, listMenu } from "./list";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ClosedCaptionOffIcon from "@mui/icons-material/ClosedCaptionOff";
import SettingsIcon from "@mui/icons-material/Settings";
import Crop32Icon from "@mui/icons-material/Crop32";
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import CropFreeIcon from "@mui/icons-material/CropFree";
export default function Content() {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <Container maxWidth="xl">
      <Grid
        container
        py={10}
        gap={2}
        height={"100vh"}
        width={"100%"}
        sx={{ overflowY: "scroll" }}
      >
        <Grid flex={7} minWidth={"320px"}>
          <span className="hover__video" style={{ position: "relative" }}>
            <video autoPlay className="video__player" src={video}></video>
            <Container
              sx={{
                zIndex: 599,
                position: "absolute",
                bottom: "12px",
                opacity: "var(--opacity)",
                transition: "all .5s ease",
              }}
            >
              <div className="progress">
                <div></div>
              </div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}
                >
                  <IconButton sx={{ color: "white" }}>
                    <PauseIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <PlayArrowIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <VolumeOffIcon />
                  </IconButton>
                  <span
                    style={{
                      color: "rgb(158, 156, 156)",
                      fontWeight: 200,
                      fontSize: "1rem",
                      display: "flex",
                      flexWrap: "nowrap",
                    }}
                  >
                    1:22 / 12:34 .{" "}
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        color: "rgb(158, 156, 156)",
                      }}
                      endIcon={<ArrowForwardIosIcon />}
                    >
                      The 90s
                    </Button>
                  </span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}
                >
                  <Switch />
                  <IconButton sx={{ color: "white" }}>
                    <ClosedCaptionOffIcon />
                  </IconButton>
                  <Menus list={[]}>
                    <SettingsIcon />
                  </Menus>
                  <IconButton sx={{ color: "white" }}>
                    <PictureInPictureAltIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <Crop32Icon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }}>
                    <CropFreeIcon />
                  </IconButton>
                </Box>
              </Box>
            </Container>
          </span>
          <Grid container gap={2} flexDirection={"column"} flexWrap={"nowrap"}>
            <Typography
              fontWeight={800}
              fontSize={"1.5rem"}
              sx={{ color: "white" }}
            >
              {" "}
              Lizards are a widespread group of squamate
            </Typography>
            <Grid
              container
              flexWrap={"wrap"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <span
                style={{
                  display: "flex",
                  gap: "1em",
                  flexWrap: "nowrap",
                  alignItems: "center",
                }}
              >
                <Avatar src={logo} alt="channel" />
                <Typography
                  fontWeight={600}
                  fontSize={"1.2rem"}
                  sx={{ color: "white" }}
                >
                  {" "}
                  RealMannTv
                  <br />
                  <span
                    style={{
                      color: "rgb(158, 156, 156)",
                      fontWeight: 200,
                      fontSize: "1rem",
                    }}
                  >
                    1.7M subscribers
                  </span>
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    "&:hover": {
                      color: "white",
                    },
                    borderRadius: "32px",
                    fontSize: { md: "1.1rem", xs: ".8rem" },
                    padding: ".6em 1em",
                  }}
                >
                  Subscribe
                </Button>
              </span>
              <span
                style={{
                  display: "flex",
                  gap: "1em",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#272727",
                    padding: ".5em .7em",
                    borderRadius: "32px",
                    display: "flex",
                    flexWrap: "nowrap",
                    alignItems: "center",
                  }}
                >
                  <Button
                    disableRipple
                    sx={{
                      color: "white",
                      fontSize: { md: "1.1rem", xs: ".8rem" },
                    }}
                    startIcon={<ThumbUpIcon />}
                  >
                    1.3M
                  </Button>
                  <Button
                    sx={{
                      color: "white",
                      borderLeft: "1px solid grey",
                      borderRadius: 0,
                      fontSize: { md: "1.1rem", xs: ".4rem" },
                    }}
                    disableRipple
                    startIcon={<ThumbDownIcon />}
                  ></Button>
                </span>
                <Button
                  disableRipple
                  sx={{
                    color: "white",
                    textTransform: "capitalize",
                    backgroundColor: "#272727",
                    padding: "1em 1.5em",
                    borderRadius: "32px",
                    fontSize: { md: "1.1rem", xs: ".8rem" },
                    "&:hover": {
                      backgroundColor: "#272727",
                    },
                  }}
                  startIcon={<ReplyIcon />}
                >
                  Share
                </Button>
                <Menus list={list}>
                  <MoreHorizIcon />
                </Menus>
              </span>
            </Grid>
            <Container
              disableGutters
              sx={{
                backgroundColor: "#272727",
                padding: "1em",
                borderRadius: "12px",
                width: "100%",
              }}
            >
              <Typography color={"white"}>
                <span
                  style={{
                    color: "rgb(158, 156, 156)",
                    fontWeight: 200,
                    fontSize: "1rem",
                  }}
                >
                  #brainjotter #lasiesa
                </span>
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                nobis pariatur eum delectus laudantium adipisci, odio odit quos
                aliquid! Sequi veritatis beatae delectus illum?Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quod, eligendi ut
                corrupti sed itaque sapiente praesentium iure voluptatem fugit,
                necessitatibus non harum, amet minima ea quaerat illum minus
                recusandae aspernatur cupiditate laboriosam quo. Aliquam magni
                qui iusto beatae voluptates neque quibusdam suscipit magnam
                soluta veritatis!
                <br />
                <span
                  style={{
                    color: "rgb(158, 156, 156)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  Read more
                </span>
              </Typography>
            </Container>
            <Container
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Typography color={"white"}>23 Comments</Typography>
              <Button
                sx={{ color: "white", textTransform: "capitalize" }}
                startIcon={<SortIcon />}
              >
                Sort by
              </Button>
            </Container>
            <Container
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: "1em",
              }}
            >
              <Avatar src={logo} alt="channel" />
              <span
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1em",
                }}
              >
                <textarea
                  onFocus={() => setFocus(true)}
                  className="my__input"
                  value={value}
                  placeholder="Add a comment"
                  onInput={(e) => setValue(e.target.value)}
                />
                {focus && (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton sx={{ color: "white" }}>
                      <EmojiEmotionsIcon />
                    </IconButton>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1em",
                      }}
                    >
                      <Button
                        onClick={() => setFocus(false)}
                        sx={{
                          color: "white",
                          textTransform: "capitalize",
                          backgroundColor: "transparent",
                          padding: ".3em 1.5em",
                          borderRadius: "32px",
                          fontSize: { md: "1.1rem", xs: ".8rem" },
                          "&:hover": {
                            backgroundColor: "#272727",
                          },
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        disabled={value.length == 0}
                        sx={{
                          color: "white",
                          textTransform: "capitalize",
                          backgroundColor: "#272727",
                          padding: ".3em 1.5em",
                          borderRadius: "32px",
                          fontSize: { md: "1.1rem", xs: ".8rem" },
                          "&:hover": {
                            backgroundColor: "#272727",
                          },
                          "&:disabled": {
                            color: "gray",
                          },
                        }}
                      >
                        Comment
                      </Button>
                    </span>
                  </span>
                )}
              </span>
            </Container>
            {[1, 3, 4, 6].map((el, id) => (
              <Container
                key={id}
                sx={{
                  display: "flex",
                  gap: 2,
                  mt: 3,
                  "--display": "none",
                  "&:hover": {
                    "--display": "block",
                  },
                }}
              >
                <Avatar src={logo} alt="channel" />
                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "1em",
                    position: "relative",
                  }}
                >
                  <Typography sx={{ color: "white" }}>
                    @realmann34{" "}
                    <span
                      style={{
                        color: "rgb(158, 156, 156)",
                        fontWeight: 200,
                        fontSize: "1rem",
                      }}
                    >
                      2 weeks ago (edited)
                    </span>
                    <br />
                    Lorem, ipsum. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Eveniet, laborum ducimus? Quis cupiditate,
                    eveniet hic eum ut nihil totam optio facilis eius veniam est
                    assumenda doloribus voluptatibus quia magnam.
                    Quisquam.lorem45 Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Totam quisquam sed fuga.
                    <br />
                    <span
                      style={{
                        color: "rgb(158, 156, 156)",
                        fontWeight: 500,
                        fontSize: "1rem",
                        cursor: "pointer",
                      }}
                    >
                      Read more
                    </span>
                  </Typography>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1em",
                    }}
                  >
                    <IconButton
                      sx={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <ThumbUpIcon />{" "}
                      <span
                        style={{
                          color: "rgb(158, 156, 156)",
                          fontWeight: 200,
                          fontSize: "1rem",
                        }}
                      >
                        {" "}
                        22
                      </span>
                    </IconButton>
                    <IconButton sx={{ color: "white" }}>
                      <ThumbDownIcon />{" "}
                    </IconButton>
                    <Button
                      sx={{ color: "white", textTransform: "capitalize" }}
                    >
                      Reply
                    </Button>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      right: "0%",
                      top: "2%",
                      display: "var(--display)",
                    }}
                  >
                    <Menus list={[list[4]]}>
                      <MoreHorizIcon />
                    </Menus>
                  </span>
                </span>
              </Container>
            ))}
          </Grid>
        </Grid>
        <Grid
          flex={3.8}
          width={"30%"}
          display={{ md: "flex", xs: "none" }}
          flexDirection={"column"}
          rowGap={2}
          minWidth={"320px"}
        >
          <Carro />
          {[1, 2, 3, 4, 5].map((number, id) => (
            <span
              key={id}
              className="other__hovers"
              style={{ position: "relative" }}
            >
              <MovieCard flexDirection="row" id={id} />
              <span
                style={{
                  position: "absolute",
                  right: "3%",
                  top: "2%",
                  display: "var(--display)",
                }}
              >
                <Menus list={listMenu}>
                  <MoreHorizIcon />
                </Menus>
              </span>
            </span>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
