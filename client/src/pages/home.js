import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestions } from '../store/actions';

import {
  Container,
  Typography,
  Button,
  Grid,
  ButtonGroup,
  Dialog,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

// context imports
import { SearchContext, QuestionDialog } from '../context/context';

// components
import AppBar from '../components/app_bar';
import Search from '../components/search';
import QuestionTable from '../components/question_table';
import CreateQuestion from '../components/create_question';

// temp data import
// import data from '../assets/json/sample.json';

const useStyles = makeStyles((theme) => ({
  section_1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#c5cae9',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(4, 0, 2),
  },
}));

// question table columns
const columns = [
  { id: 'id', label: '#', minWidth: 100 },
  {
    id: 'question',
    label: 'Question',
    minWidth: 300,
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 100,
  },
  {
    id: 'state',
    label: 'State',
    minWidth: 100,
  },
  {
    id: 'group',
    label: 'Question Group',
    minWidth: 100,
    type: 'popover',
    align: 'center',
  },
  {
    id: 'license',
    label: 'License',
    minWidth: 100,
    type: 'popover',
    align: 'center',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'display',
    label: 'Display',
    minWidth: 100,
    align: 'center',
    type: 'chip',
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 100,
    align: 'center',
    type: 'action',
    actions: [
      {
        name: 'View',
        icon: <VisibilityOutlinedIcon />,
      },
      {
        name: 'Deactivate',
        icon: <CheckCircleOutlineIcon />,
      },
      {
        name: 'Add to Group',
        icon: <AddCircleOutlineOutlinedIcon />,
      },
      {
        name: 'Delete',
        icon: <DeleteForeverOutlinedIcon />,
      },
    ],
  },
];

function Home(props) {
  const { questions, getQuestions } = props;
  const searchContext = useContext(SearchContext);
  const questionDialog = useContext(QuestionDialog);

  const classes = useStyles();

  useEffect(() => {
    getQuestions(searchContext.searchQuery);
  }, [searchContext.searchQuery]);

  return (
    <div>
      <AppBar />
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} className={classes.section_1}>
            <Typography variant="h5">Custom Question Manager</Typography>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<AddCircleIcon color="primary" />}
              onClick={() => questionDialog.setOpenQuestionDialog(true)}
            >
              Add New Question
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <QuestionTable columns={columns} data={questions} />
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.footer}>
          <Typography variant="h7">
            copyright @ 2016-18, Simplifya, LLC, All Rights Reserved
          </Typography>

          <ButtonGroup variant="text">
            <Button>@ Privacy Policy</Button>
            <Button>Terms of Service</Button>
            <Button>Help Center</Button>
          </ButtonGroup>
        </Grid>
      </Container>
      <Dialog
        fullWidth
        maxWidth="md"
        open={questionDialog.openQuestionDialog}
        onClose={() => questionDialog.setOpenQuestionDialog(false)}
      >
        <CreateQuestion />
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({ questionState }) => ({
  questions: questionState.questions,
});

const mapDispatchToProps = { getQuestions };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
