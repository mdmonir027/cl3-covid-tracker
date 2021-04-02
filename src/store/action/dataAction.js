import * as types from "./types";
import axios from "axios";

const baseUrl = "https://api.covid19api.com";

export const getAllData = (country) => (dispatch) => {
  axios
    .get(`${baseUrl}/live/country/${country}`)
    .then((response) => {
      dispatch({
        type: types.getAllData,
        payload: { data: response.data },
      });
    })
    .catch((e) => console.log(e?.response?.data));
};
