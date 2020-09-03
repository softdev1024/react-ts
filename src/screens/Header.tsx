import * as React from "react";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AccountCircle from "@material-ui/icons/AccountCircle";

import logoImg from "../assets/images/Vector.png";
import { THEME_COLORS } from "../config/constants/color";

const muiStyles = () => ({
  root: {
    marginBottom: "65px",
  },
  header: {
    flexGrow: 1,
    backgroundColor: THEME_COLORS.appbarBgColor,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  avatar: {
    display: "flex",
    cursor: "pointer",
  },
  avatarTextUser: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "20px",
  },
  avatarTextRole: {
    lineHeight: "18px",
    fontSize: "12px",
    opacity: 0.4,
  },
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar disableGutters={false} className={classes.toolbar}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => {}}
          >
            <img src={logoImg} style={{ width: 46, height: 9 }} alt="" />
            <Typography color="primary" style={{ fontWeight: 700 }}>
              HARBORMASTER
            </Typography>
          </div>
          <div className={classes.avatar}>
            <IconButton color="primary" onClick={() => {}}>
              <AccountCircle />
            </IconButton>
            <div className={classes.avatarText}>
              <Typography color="primary" className={classes.avatarTextUser}>
                Esther Howard
              </Typography>
              <Typography color="primary" className={classes.avatarTextRole}>
                Administrator
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(muiStyles)(Header);
