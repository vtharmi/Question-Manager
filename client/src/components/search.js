import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  Button,
  InputLabel,
  FormControl,
  Select,
  TextField,
  MenuItem,
} from '@material-ui/core';

// context imports
import { SearchContext } from '../context/context';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '10px',
    padding: theme.spacing(2, 3),
  },
  search_btn: {
    height: '50px',
  },
}));

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left',
  },
  getContentAnchorEl: null,
};

export default function Search(props) {
  const searchContext = useContext(SearchContext);

  const classes = useStyles();

  const [search, setSearch] = useState({
    question: '',
    license: 'all',
    state: 'all',
    category: 'all',
    group: 'all',
    status: 'all',
    display: 'all',
  });

  const handleChange = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <form noValidate>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={7}>
            <TextField
              id="question"
              name="question"
              label="Search by Question"
              variant="outlined"
              fullWidth
              value={search.question}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="license">License</InputLabel>
              <Select
                labelId="license"
                label="License"
                MenuProps={menuProps}
                value={search.license}
                onChange={(event) => {
                  setSearch({
                    ...search,
                    license: event.target.value,
                  });
                }}
              >
                <MenuItem selected value="all">
                  All License
                </MenuItem>
                <MenuItem value="A">A - License</MenuItem>
                <MenuItem value="B">B - License</MenuItem>
                <MenuItem value="C">C - License</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                labelId="state"
                label="State"
                MenuProps={menuProps}
                value={search.state}
                onChange={(event) => {
                  setSearch({
                    ...search,
                    state: event.target.value,
                  });
                }}
              >
                <MenuItem selected value="all">
                  All States
                </MenuItem>
                <MenuItem value="CA">CA</MenuItem>
                <MenuItem value="LA">LA</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="category">Category</InputLabel>
              <Select
                labelId="category"
                label="Category"
                MenuProps={menuProps}
                value={search.category}
                onChange={(event) => {
                  setSearch({
                    ...search,
                    category: event.target.value,
                  });
                }}
              >
                <MenuItem selected value="all">
                  All Categories
                </MenuItem>
                <MenuItem value="Company Policy">Company Policy</MenuItem>
                <MenuItem value="About Company">About Company</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="group">Question Group</InputLabel>
              <Select
                labelId="group"
                label="Question Group"
                MenuProps={menuProps}
                value={search.group}
                onChange={(event) => {
                  setSearch({
                    ...search,
                    group: event.target.value,
                  });
                }}
              >
                <MenuItem selected value="all">
                  All Question Groups
                </MenuItem>
                <MenuItem value="A Type 01">A Type 01</MenuItem>
                <MenuItem value="A Type 02">A Type 02</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                label="Status"
                MenuProps={menuProps}
                value={search.status}
                onChange={(event) => {
                  setSearch({
                    ...search,
                    status: event.target.value,
                  });
                }}
              >
                <MenuItem selected value="all">
                  All Status
                </MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Disabled">Disabled</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="display">Display</InputLabel>
              <Select
                labelId="display"
                label="Display"
                MenuProps={menuProps}
                value={search.display}
                onChange={(event) => {
                  setSearch({
                    ...search,
                    display: event.target.value,
                  });
                }}
              >
                <MenuItem selected value="all">
                  All Display
                </MenuItem>
                <MenuItem value="Published">Published</MenuItem>
                <MenuItem value="Draft">Draft</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              color="primary"
              className={classes.search_btn}
              fullWidth
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                searchContext.setSearchQuery(`?keyword=${search.question}`);
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}
