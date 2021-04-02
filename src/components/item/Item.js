import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Divider,
  Grid,
  Modal,
  Backdrop,
  Fade,
  Tooltip,
} from "@material-ui/core";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { ItemStyle } from "./ItemStyle";
import ItemDetails from "./ItemDetails";
import { useDataLayer } from "../../store/dataLayer";

const useStyles = makeStyles((theme) => ItemStyle(theme));

export default function Item(props) {
  const { secondaryColor, primaryColor, keyword } = props;

  const [state] = useDataLayer();
  const [data, setData] = useState([]);
  const [count, setCount] = useState({ last: 0, total: 0 });

  useEffect(() => setData(state.data), [state]);

  useEffect(() => {
    const countData = (key) => {
      const lastDataItem = data[data.length - 1];
      const lastBeforeDataItem = data[data.length - 2];

      return {
        last: lastDataItem?.[key] - lastBeforeDataItem?.[key],
        total: lastDataItem?.[key],
      };
    };

    if (data) {
      setCount(countData(keyword));
    }
  }, [data, keyword]);

  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Grid item md={3} xs={12} sm={6}>
        <Card
          className={classes.cardRoot}
          style={{ background: secondaryColor }}
        >
          <h1 className={classes.title} style={{ background: primaryColor }}>
            {keyword}
          </h1>
          <Grid container justify="space-between">
            <Grid item md={6}>
              <div className={classes.box}>
                <h3
                  className={classes.subTitle}
                  style={{ color: primaryColor }}
                >
                  24 Hours
                </h3>
                <Divider className={classes.divider} />
                <h6 className={classes.counter}>{count.last}</h6>
              </div>
            </Grid>
            <Grid item md={6}>
              <div className={classes.box}>
                <h3
                  className={classes.subTitle}
                  style={{ color: primaryColor }}
                >
                  Total
                </h3>
                <Divider className={classes.divider} />
                <h6 className={classes.counter}>{count.total}</h6>
              </div>
            </Grid>
          </Grid>
          <div className={classes.iconWrapper}>
            <Tooltip title="Details" aria-label={keyword}>
              <EqualizerIcon
                title=""
                className={classes.icon}
                style={{ color: primaryColor }}
                onClick={() => setModalOpen(true)}
                id={keyword}
              />
            </Tooltip>
          </div>
        </Card>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <h1 className={classes.modelTitle}>{keyword}</h1>
            <ItemDetails keyword={keyword} />
          </div>
        </Fade>
      </Modal>
    </>
  );
}
