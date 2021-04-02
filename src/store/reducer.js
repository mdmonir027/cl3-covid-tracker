import * as types from "./action/types";

export const initialState = {
  clientDetails: {},
  countries: [],
  data: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case types.setCureentCountry: {
      const { clientDetails } = action.payload;
      return {
        ...state,
        clientDetails,
      };
    }
    case types.getAllCountry: {
      const { countries } = action.payload;
      return {
        ...state,
        countries,
      };
    }
    case types.getAllData: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};
