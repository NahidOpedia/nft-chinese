import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(name, history) {
  return {
    name,
    history,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              {row.history.map((historyRow) => (
                <div
                  style={{ background: "#fff" }}
                  className="d-flex justify-content-between"
                  key={historyRow.date}
                >
                  {/* <input>{historyRow.customerId}</p> */}
                  <input
                    style={{ borderRadius: "7px" }}
                    className="m-2 p-2 bg-light"
                    type="text"
                    placeholder={historyRow.customerId}
                    id=""
                  />
                  <input
                    style={{ borderRadius: "7px" }}
                    className="m-2 p-2 bg-light"
                    type="text"
                    placeholder={historyRow.amount}
                    id=""
                  />
                </div>
              ))}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("状态", [
    {
      date: "2020-01-05",
      customerId: "立即购买",
      amount: "拍卖中",
    },
    {
      date: "2020-01-02",
      customerId: "最新",
      amount: "优惠",
    },
  ]),
  createData("价格", [
    {
      date: "2020-01-02",
      customerId: "Anonymous",
      amount: 1,
    },
  ]),
  createData("区块链", [
    {
      date: "2020-01-05",
      customerId: "最新",
      amount: "优惠",
    },
    {
      date: "2020-01-02",
      customerId: "最新",
      amount: "优惠",
    },
    {
      date: "2020-01-02",
      customerId: "Anonymous",
      amount: 1,
    },
  ]),
  createData("在售", [
    {
      date: "2020-01-05",
      customerId: "最新",
      amount: "优惠",
    },
    {
      date: "2020-01-02",
      customerId: "Anonymous",
      amount: 1,
    },
  ]),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
