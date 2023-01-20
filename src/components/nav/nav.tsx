import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { Avatar, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreIcon from "@mui/icons-material/MoreVert";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import logo from "./logo.png";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import SideBar from "../sideBar/sideBar";
import { menuList } from "./menuList";
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(.5em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [state, setState] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [focus, setFocus] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      onClick={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "scroll",
          backgroundColor: "#282828",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        sx={{
          color: "white",
          display: "flex",
          flexWrap: "none",
          alignItems: "flex-start",
          gap: 2,
          py: 4,
        }}
      >
        <Avatar src={logo} alt="user" />
        <Box>
          <Typography fontSize={"1.3rem"}>Samuel Appiah</Typography>
          <Typography>@samuelappiah5689</Typography>
          <br />
          <Typography
            sx={{ textDecoration: "none", color: "dodgerblue" }}
            component={"a"}
            href=""
          >
            Manage your Google Account
          </Typography>
        </Box>
      </MenuItem>
      <Divider sx={{ backgroundColor: "gray" }} />
      {menuList.map(({ icon, name, arrow }, id: number) => (
        <span key={id}>
          <MenuItem
            sx={{
              color: "white",
              fontSize: "1.3rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1em",
              }}
            >
              {icon}
              <Typography>{name}</Typography>
            </span>
            {arrow && <ArrowForwardIosIcon />}
          </MenuItem>
          {(id == 4 || id == 6 || id == 12 || id == 11) && (
            <Divider sx={{ backgroundColor: "gray" }} />
          )}
        </span>
      ))}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      onClick={handleMobileMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          backgroundColor: "#282828",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <VideoCallIcon />
        </IconButton>
        <p>Create</p>
      </MenuItem>

      <MenuItem
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={7} color="error">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
        onClick={handleProfileMenuOpen}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src={logo} alt="user" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => (
    <Box
      sx={{ width: "300px", backgroundColor: "#181818", color: "white" }}
      role="menu"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={toggleDrawer(false)}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: !search ? "flex" : "none",
            alignItems: "center",
            gap: 1,
          }}
        >
          <img height={40} src={logo} alt="logo" />
          <Typography variant="h6" noWrap component="h3" fontWeight={900}>
            YouTube <sup style={{ color: "#595959", fontWeight: 200 }}>HU</sup>
          </Typography>
        </Box>
      </Box>
      <SideBar />
    </Box>
  );

  return (
    <Box bgcolor={"red"}  >
      <AppBar
        sx={{ backgroundColor: "#181818" }}
        elevation={0}
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={toggleDrawer(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: !search ? "flex" : "none",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img height={40} src={logo} alt="logo" />
              <Typography variant="h6" noWrap component="h3" fontWeight={900}>
                YouTube{" "}
                <sup style={{ color: "#595959", fontWeight: 200 }}>HU</sup>
              </Typography>
            </Box>
          </Box>
          <Box
            display={{ md: "flex", xs: search ? "flex" : "none" }}
            sx={{
              width: search ? "90%" : "50%",
              alignItems: "center",
              gap: 1,
              flexWrap: "none",
            }}
          >
            <Box
              sx={{
                border: "1px solid grey",
                alignItems: "center",
                borderRadius: "52px",
                height: "100%",
                width: "90%",
                display: "flex",
                overflow: "hidden",
              }}
            >
              {focus && !search && (
                <IconButton
                  disabled
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    borderRadius: 0,
                    height: "50px",
                    width: "60px",
                    "&:hover": {
                      backgroundColor: "#222222",
                    },
                    "&:disabled": {
                      color: "white",
                    },
                  }}
                >
                  <SearchIcon />
                </IconButton>
              )}
              <StyledInputBase
                sx={{
                  width: { md: "90%", xs: "120px" },
                  "&::placeholder": {
                    color: "#222222",
                  },
                }}
                placeholder="Search"
                onFocus={() => setFocus(true)}
                onBlur={() => {
                  setSearch(false);
                  setFocus(false);
                }}
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                onClick={() => {
                  setSearch(false);
                  setFocus(false);
                }}
                sx={{
                  backgroundColor: "#222222",
                  alignItems: "center",
                  color: "white",
                  borderRadius: 0,
                  height: "50px",
                  width: { md: "90px", sm: "10px" },
                  "&:hover": {
                    backgroundColor: "#222222",
                  },
                  borderLeft: "1px solid grey",
                }}
              >
                <SearchIcon />
              </IconButton>
            </Box>
            <IconButton
              sx={{
                alignItems: "center",
                color: "white",
                padding: { md: ".6em", sm: "0.2em" },
                backgroundColor: "#222222",
                "&:hover": {
                  backgroundColor: "#222222",
                },
              }}
            >
              <MicIcon />
            </IconButton>
          </Box>
          <IconButton
            onClick={() => setSearch(true)}
            sx={{
              display: { md: "none", xs: search ? "none" : "flex" },
              alignItems: "center",
              color: "white",
              "&:hover": {
                backgroundColor: "#222222",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <VideoCallIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={7} color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={logo} alt="user" />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <SwipeableDrawer
        anchor={"left"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </Box>
  );
}
