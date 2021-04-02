import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";

import { style } from "./Style";

const useStyles = makeStyles((theme) => style(theme));

const devUrl = "https://github.com/mdmonir027";

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid Tracker
          </Typography>
          <Button color="inherit" onClick={() => (window.location = devUrl)}>
            <Typography variant="h6" component="h2">
              Developer
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
