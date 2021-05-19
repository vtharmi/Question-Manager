import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: "#ffc000",
  },
  logo_wrapper: {
    flexGrow: 1,
  },
  logo: {
    width: "auto",
    height: "50px",
    filter: " brightness(0) invert(1)",
  },
  notification_button: {
    marginRight: theme.spacing(2),
  },
  menu_button: {
    marginLeft: theme.spacing(0),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.logo_wrapper}>
            <img
              className={classes.logo}
              src="https://www.simplifya.com/wp-content/uploads/2019/10/Simplifya_logo_trans_2000x543.png"
              alt="logo"
            />
          </div>

          <IconButton
            edge="start"
            className={classes.notification_button}
            color="inherit"
            aria-label="menu"
          >
            <Badge
              color="secondary"
              overlap="circle"
              badgeContent=" "
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Typography variant="h7">Menu</Typography>
          <IconButton
            edge="start"
            className={classes.menu_button}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
