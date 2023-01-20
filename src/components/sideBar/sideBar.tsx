import { Button, Grid, Divider, Typography, Avatar } from "@mui/material";
import { links, sub, explore, fromYoutube } from "./links";
import image from "./logo.png";
import { menuList } from "../nav/menuList";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import { useState } from "react";
export default function SideBar() {
  const [show, setShow] = useState(true);
  const [numberToShow, setNumbertoShow] = useState(sub.length);
  return (
    <Grid
      px={2}
      pb={5}
      container
      height={"100vh"}
      flexDirection={"column"}
      gap={2}
      flexWrap={"nowrap"}
      sx={{ overflowY: "scroll" }}
    >
      {links.map(({ icon, name }, id) => (
        <span key={id}>
          <Button
            sx={{
              display: "flex",
              fontSize: "1.2rem",
              width: "100%",
              "&:hover": {
                backgroundColor: "#222222",
              },
              color: "white",
              justifyContent: "flex-start",
              px: 2,
              gap: 2,
              textTransform: "capitalize",
              alignItems: "center",
            }}
            key={id}
            startIcon={icon}
          >
            {name}
          </Button>
          {(id == 2 || id == 7 || id == 12 || id == 11) && (
            <Divider sx={{ backgroundColor: "gray", my: 2 }} />
          )}
        </span>
      ))}
      <Typography color={"white"} fontSize={"1.3rem"}>
        Subscriptions
      </Typography>
      {sub.slice(0, numberToShow).map(({ name, now }, id) => (
        <Button
          sx={{
            display: "flex",
            fontSize: "1rem",
            width: "100%",
            "&:hover": {
              backgroundColor: "#222222",
            },
            color: "white",
            justifyContent: "flex-start",
            px: 2,
            gap: 2,
            textTransform: "capitalize",
            alignItems: "center",
            position: "relative",
          }}
          key={id}
          startIcon={<Avatar src={image} alt="sub image" />}
        >
          {name}{" "}
          {now && (
            <span
              style={{
                position: "absolute",
                height: ".3em",
                borderRadius: "50%",
                width: ".3em",
                backgroundColor: "dodgerblue",
                top: "50%",
                right: "5%",
                transform: "translateY(-50%)",
              }}
            ></span>
          )}
        </Button>
      ))}
      <Button
        onClick={() => {
          setShow((pre) => !pre);
          if (numberToShow == 4) {
            setNumbertoShow(sub.length);
          } else {
            setNumbertoShow(4);
          }
        }}
        sx={{
          display: "flex",
          fontSize: "1rem",
          width: "100%",
          "&:hover": {
            backgroundColor: "#222222",
          },
          color: "white",
          justifyContent: "flex-start",
          px: 2,
          gap: 2,
          textTransform: "capitalize",
          alignItems: "center",
          position: "relative",
        }}
        startIcon={!show ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      >
        Show {show ? "less" : "more"}
      </Button>
      <Divider sx={{ backgroundColor: "gray", my: 2 }} />
      <Typography color={"white"} fontSize={"1.3rem"}>
        Explore
      </Typography>
      {explore.map(({ icon, name }, id) => (
        <Button
          sx={{
            display: "flex",
            fontSize: "1.2rem",
            width: "100%",
            "&:hover": {
              backgroundColor: "#222222",
            },
            color: "white",
            justifyContent: "flex-start",
            px: 2,
            gap: 2,
            textTransform: "capitalize",
            alignItems: "center",
          }}
          key={id}
          startIcon={icon}
        >
          {name}
        </Button>
      ))}
      <Divider sx={{ backgroundColor: "gray", my: 2 }} />
      <Typography color={"white"} fontSize={"1.3rem"}>
        More from YouTube
      </Typography>
      {fromYoutube.map(({ name }, id) => (
        <Button
          sx={{
            display: "flex",
            fontSize: "1rem",
            width: "100%",
            "&:hover": {
              backgroundColor: "#222222",
            },
            color: "white",
            justifyContent: "flex-start",
            px: 2,
            gap: 2,
            textTransform: "capitalize",
            alignItems: "center",
          }}
          key={id}
          startIcon={<Avatar src={image} alt="sub image" />}
        >
          {name}
        </Button>
      ))}
      <Divider sx={{ backgroundColor: "gray", my: 2 }} />
      {menuList.slice(12).map(({ name, icon }, id) => (
        <Button
          sx={{
            display: "flex",
            fontSize: "1rem",
            width: "100%",
            "&:hover": {
              backgroundColor: "#222222",
            },
            color: "white",
            justifyContent: "flex-start",
            px: 2,
            gap: 2,
            textTransform: "capitalize",
            alignItems: "center",
          }}
          key={id}
          startIcon={icon}
        >
          {name}
        </Button>
      ))}
      <Button
        sx={{
          display: "flex",
          fontSize: "1rem",
          width: "100%",
          "&:hover": {
            backgroundColor: "#222222",
          },
          color: "white",
          justifyContent: "flex-start",
          px: 2,
          gap: 2,
          textTransform: "capitalize",
          alignItems: "center",
        }}
        startIcon={<EmojiFlagsIcon />}
      >
        Report history
      </Button>
      <Divider sx={{ backgroundColor: "gray", my: 2 }} />
      <Grid container gap={0.5}>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          About
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Press
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Copyright
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Contact us
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Creators
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Advertise
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Developers
        </Typography>
        <br />
        <br />
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Terms
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Privacy
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Policy & Safety
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          How YouTube works
        </Typography>
        <Typography
          component={"a"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          Test new features
        </Typography>
        <br />
        <br />
        <br />
        <Typography
          component={"h1"}
          sx={{ textDecoration: "none", color: "grey" }}
        >
          &copy; Google LLC
        </Typography>
      </Grid>
    </Grid>
  );
}
