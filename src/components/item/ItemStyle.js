export const ItemStyle = (theme) => ({
  cardRoot: {
    width: "100%",
    marginTop: "20px",
    padding: "0px 20px 20px 20px",
    boxSizing: "border-box",
  },
  title: {
    textAlign: "center",
    background: "#00A79D",
    width: "95%",
    margin: "auto",
    padding: "7px",
    marginBottom: "15px",
    color: "#fff",
    borderRadius: "0px 0 4px 4px ",
  },
  box: {
    textAlign: "center",
    marginTop: "15px",
  },
  subTitle: {
    fontSize: "24px",
  },
  counter: {
    fontSize: "23px",
    color: "#000",
    fontWeight: "bold",
  },
  divider: {
    margin: "7px 0",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    marginTop: "20px",
    fontSize: "30px",
    cursor: "pointer",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    height: "80%",
    width: "85%",
    overflowY: "scroll",
  },
  modelTitle: {
    padding: "10px 0 10px 20px",
  },
});
