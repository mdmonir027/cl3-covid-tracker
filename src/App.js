import React, { useEffect } from "react";
import "./App.css";
import ControlBox from "./components/control/ControlBox";
import Header from "./components/header/Header";
import { Container, Divider, Grid, Typography } from "@material-ui/core";
import Item from "./components/item/Item";

import { getAllCountries } from "./store/action/automationAction";
import { useDataLayer } from "./store/dataLayer";

const App = () => {
  // effects
  const dispatch = useDataLayer()[1];
  useEffect(() => getAllCountries()(dispatch), [dispatch]);

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg">
        <ControlBox />
        <Divider />
        <Grid container spacing={2}>
          <Item
            primaryColor="#00A79D"
            secondaryColor="#E6F6F5"
            keyword="Confirmed"
          />
          <Item
            primaryColor="#ED1C24"
            secondaryColor="#FDE8E9"
            keyword="Deaths"
          />
          <Item
            primaryColor="#8DC63F"
            secondaryColor="#E8F3D9"
            keyword="Recovered"
          />
          <Item
            primaryColor="#27AAE1"
            secondaryColor="#D4EEF9"
            keyword="Active"
          />
        </Grid>
      </Container>
      <Typography
        variant="h5"
        component="h2"
        align="center"
        style={{ marginTop: "40px" }}
      >
        This app was developed by Md Monirul Islam
      </Typography>
    </div>
  );
};

export default App;
