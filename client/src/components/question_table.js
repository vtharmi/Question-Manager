import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  Button,
  Tooltip,
  ClickAwayListener,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "10px",
  },
  table_container: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },
  chip: {
    borderRadius: "5px",
    minWidth: "75px",
    "&.green": {
      backgroundColor: theme.palette.success.main,
    },
  },
  action_menu: {
    borderRadius: "10px",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    padding: theme.spacing(0, 1),
  },
  menu_item: {
    borderRadius: "10px",
  },
  no_data: {
    textAlign: "center !important",
    color: `${theme.palette.secondary.main} !important`,
  },
}));

const useStylesTooltip = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.white,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    width: "200px",
    minHeight: "50px",
    padding: theme.spacing(1.5, 1.5),
    border: "1px solid rgba(0, 0, 0, 0.12)",
    fontSize: "12px",
  },
}));

export default function QueationTable(props) {
  const { columns, data: rows } = props;

  const classes = useStyles();
  const classesTooltip = useStylesTooltip();

  const [openTooltip, setOpenTooltip] = useState({});
  const [actionAnchorEl, setActionAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    console.log(rows);
  }, [rows]);

  const handleTooltipClose = (id) => {
    setOpenTooltip({
      ...openTooltip,
      [id]: false,
    });
  };

  const handleTooltipOpen = (id) => {
    setOpenTooltip({
      ...openTooltip,
      [id]: true,
    });
  };

  const handleActionClick = (event) => {
    setActionAnchorEl(event.currentTarget);
  };

  const handleActionClose = () => {
    setActionAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <TableContainer className={classes.table_container}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {typeof rows !== "undefined" && rows.length > 0 ? (
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.type && column.type === "popover" ? (
                              <ClickAwayListener
                                onClickAway={() =>
                                  handleTooltipClose(`${column.id}-${row.id}`)
                                }
                              >
                                <div>
                                  <Tooltip
                                    placement="top"
                                    arrow
                                    classes={classesTooltip}
                                    PopperProps={{
                                      disablePortal: true,
                                    }}
                                    onClose={() =>
                                      handleTooltipClose(
                                        `${column.id}-${row.id}`
                                      )
                                    }
                                    open={
                                      openTooltip[`${column.id}-${row.id}`] ||
                                      false
                                    }
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={value}
                                  >
                                    <Button
                                      onClick={() =>
                                        handleTooltipOpen(
                                          `${column.id}-${row.id}`
                                        )
                                      }
                                      color="primary"
                                    >
                                      View
                                    </Button>
                                  </Tooltip>
                                </div>
                              </ClickAwayListener>
                            ) : column.type && column.type === "chip" ? (
                              <Chip
                                label={value}
                                className={clsx(
                                  classes.chip,
                                  value === "Published" ? "green" : ""
                                )}
                              />
                            ) : column.type && column.type === "action" ? (
                              <>
                                <IconButton
                                  aria-label="more"
                                  aria-controls="action-menu"
                                  aria-haspopup="true"
                                  onClick={handleActionClick}
                                >
                                  <MoreHorizIcon />
                                </IconButton>
                                <Menu
                                  id="action-menu"
                                  anchorEl={actionAnchorEl}
                                  keepMounted
                                  open={Boolean(actionAnchorEl)}
                                  onClose={handleActionClose}
                                  getContentAnchorEl={null}
                                  anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                  }}
                                  transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                  }}
                                  classes={{
                                    paper: classes.action_menu,
                                  }}
                                >
                                  {column.actions.map((action) => (
                                    <MenuItem
                                      className={classes.menu_item}
                                      onClick={handleActionClose}
                                    >
                                      <ListItemIcon>{action.icon}</ListItemIcon>
                                      <Typography variant="inherit">
                                        {action.name}
                                      </Typography>
                                    </MenuItem>
                                  ))}
                                </Menu>
                              </>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          ) : (
            <caption className={classes.no_data}>No data available</caption>
          )}
        </Table>
      </TableContainer>
      {typeof rows !== "undefined" && rows.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}
