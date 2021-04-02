import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { useDataLayer } from "../../store/dataLayer";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ItemDetails = ({ keyword }) => {
  const classes = useStyles();
  const [state] = useDataLayer();

  const [tableDatas, setTableDatas] = useState([]);

  useEffect(() => {
    const array = [...state.data];

    const sorting = (array, key) => {
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        // let last = 0;
        // if (!i === array.length - 1 && array[i + 1]?.[key] > array[i]?.[key]) {
        //   last = array[i + 1]?.[key] - array[i]?.[key];
        // }
        const single = {
          date: array[i + 1]?.Date,
          id: i + 1,
          last:
            i === array.length - 1
              ? 0
              : array[i + 1]?.[key] > array[i]?.[key]
              ? array[i + 1]?.[key] - array[i]?.[key]
              : 0,
          total: array[i]?.[key],
        };

        newArray.push(single);
      }
      return newArray.slice(1, array.length - 1).sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });
    };

    setTableDatas(sorting(array, keyword));
  }, [state, keyword]);

  const timeTostring = (time) => {
    if (!time) return "invalid";
    const date = new Date(time);
    let day = date.toLocaleDateString("en-US").split("/")[1];
    let year = date.toLocaleDateString("en-US").split("/")[2];
    let month = date.toDateString("en-US").split(" ")[1];
    return `${day} ${month} ${year}  -- ${date.toLocaleTimeString()}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">New</TableCell>
            <TableCell align="center">Total </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableDatas.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {timeTostring(item.date)}
              </TableCell>
              <TableCell align="center">{item.last}</TableCell>
              <TableCell align="center">{item.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemDetails;
