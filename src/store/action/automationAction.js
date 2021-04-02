import * as types from "./types";
import axios from "axios";

const baseUrl = "https://api.covid19api.com";

export const getAllCountries = () => (dispatch) => {
  axios
    .get(`${baseUrl}/countries`)
    .then((response) => {
      dispatch({
        type: types.getAllCountry,
        payload: { countries: response.data },
      });
    })
    .catch((e) => e?.respones?.data);
};
