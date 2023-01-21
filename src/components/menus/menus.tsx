import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Typography } from "@mui/material";

export default function Menus({
  children,
  list,
}: {
  children?: any;
  list: any;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        sx={{
          color: "white",
          textTransform: "capitalize",
          backgroundColor: "transparent",
          padding: ".5em",
          borderRadius: "32px",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {children}
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {list.map(({ icon, name }: any, id: number) => (
          <MenuItem
            key={id}
            onClick={handleClose}
            sx={{
              color: "white",
              fontSize: "1.3rem",
              display: "flex",
              alignItems: "center",
              py: 2,
              gap: "1em",
            }}
          >
            {icon}
            <Typography>{name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
