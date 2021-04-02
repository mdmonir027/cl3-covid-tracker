import React, { useState, useEffect } from "react";
import { FormControl, Grid, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDataLayer } from "../../store/dataLayer";
import { getAllData } from "../../store/action/dataAction";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "30px",
    justifyContent: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ControlBox = () => {
  // data
  const classes = useStyles();
  const [state, dispatch] = useDataLayer();
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState(null);

  // effects
  useEffect(() => {
    setCountries(
      state.countries.sort((a, b) => {
        if (a.Country < b.Country) return -1;
        if (a.Country > b.Country) return 1;
        return 0;
      })
    );
  }, [state]);

  useEffect(() => {
    axios
      .get("https://extreme-ip-lookup.com/json/")
      .then((response) => {
        setCountry(response.data.country);
      })
      .catch((data, status) => {
        console.log("Request failed:", data);
      });
  }, []);

  useEffect(() => {
    if (country) {
      getAllData(country)(dispatch);
    }
  }, [country, dispatch]);

  useEffect(() => {
    const allData = state.data;
    if (allData) {
      const time = allData[allData.length - 1]?.Date;
      if (!time) return setDate("Unknown");
      const date = new Date(time);
      let day = date.toLocaleDateString("en-US").split("/")[1];
      let year = date.toLocaleDateString("en-US").split("/")[2];
      let month = date.toDateString("en-US").split(" ")[1];
      setDate(`${day} ${month} ${year}  -- ${date.toLocaleTimeString()}`);
    }
  }, [state]);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      alignItems="center"
      className={classes.wrapper}
    >
      <Grid item style={{ background: "#000 !important" }}>
        <h2>Covid Details</h2>
      </Grid>
      <Grid item style={{ background: "#000 !important" }}>
        <h2>{country}</h2>
      </Grid>
      <Grid item style={{ background: "#000 !important" }}>
        <h2>{date}</h2>
      </Grid>
      <Grid item>
        <div>
          <FormControl className={classes.formControl}>
            <Select
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            >
              {countries &&
                countries.map((country) => (
                  <MenuItem key={country.Country} value={country.Country}>
                    {country.Country}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default ControlBox;
