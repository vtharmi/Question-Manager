import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { addQuestion } from "../store/actions";

import {
  Typography,
  Button,
  TextField,
  Grid,
  Container,
  Paper,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";

// context imports
import { QuestionDialog } from "../context/context";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  header_title: {
    textAlign: "center",
    width: "100%",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  create_btn: {
    height: "50px",
  },
}));

const menuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
  getContentAnchorEl: null,
};

function CreateQuestion(props) {
  const { addQuestion } = props;

  const questionDialog = useContext(QuestionDialog);

  const classes = useStyles();

  const [question, setQuestion] = useState({
    question: "",
    license: "",
    state: "",
    category: "",
    group: "",
    status: "",
  });

  const [formErr, setFormErr] = useState({
    questionErr: false,
    questionErrMsg: "",
    licenseErr: false,
    licenseErrMsg: "",
    stateErr: false,
    stateErrMsg: "",
    categoryErr: false,
    categoryErrMsg: "",
    groupErr: false,
    groupErrMsg: "",
    statusErr: false,
    statusErrMsg: "",
  });

  const handleChange = (event) => {
    if (!event.target.value) {
      setFormErr({
        ...formErr,
        [`${event.target.name}Err`]: true,
        [`${event.target.name}ErrMsg`]: "This field cannot be empty",
      });
    } else {
      setFormErr({
        ...formErr,
        [`${event.target.name}Err`]: false,
        [`${event.target.name}ErrMsg`]: "",
      });
    }

    setQuestion({
      ...question,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event, type) => {
    event.preventDefault();
    console.log(type);

    var emptyFields = {};
    var validForm = true;
    Object.keys(question).map((field) => {
      if (question[field] === "") {
        validForm = false;
        emptyFields[`${field}Err`] = true;
        emptyFields[`${field}ErrMsg`] = "This field cannot be empty";
      }
    });
    setFormErr(emptyFields);

    if (validForm) {
      if (type === "draft") {
        question.display = "Draft";
        console.log(question);

        addQuestion(question);
        questionDialog.setOpenQuestionDialog(false);
      } else if (type === "published") {
        question.display = "Published";
        console.log(question);

        addQuestion(question);
        questionDialog.setOpenQuestionDialog(false);
      }
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper} elevation={0}>
        <div className={classes.header}>
          <IconButton
            onClick={() => questionDialog.setOpenQuestionDialog(false)}
            color="primary"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            className={classes.header_title}
            component="h1"
            variant="h4"
          >
            Create a Question
          </Typography>
        </div>

        <form className={classes.form} noValidate>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <TextField
                id="question"
                name="question"
                label="Enter Question"
                variant="outlined"
                fullWidth
                value={question.question}
                error={formErr.questionErr}
                helperText={formErr.questionErrMsg}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                fullWidth
                error={formErr.licenseErr}
              >
                <InputLabel id="license">Select License</InputLabel>
                <Select
                  labelId="license"
                  label="Select License"
                  MenuProps={menuProps}
                  name="license"
                  value={question.license}
                  onChange={handleChange}
                >
                  <MenuItem value="A">A - License</MenuItem>
                  <MenuItem value="B">B - License</MenuItem>
                  <MenuItem value="C">C - License</MenuItem>
                </Select>
                <FormHelperText>{formErr.licenseErrMsg}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                fullWidth
                error={formErr.stateErr}
              >
                <InputLabel id="state">Select State</InputLabel>
                <Select
                  labelId="state"
                  label="Select State"
                  MenuProps={menuProps}
                  name="state"
                  value={question.state}
                  onChange={handleChange}
                >
                  <MenuItem value="CA">CA</MenuItem>
                  <MenuItem value="LA">LA</MenuItem>
                </Select>
                <FormHelperText>{formErr.stateErrMsg}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                fullWidth
                error={formErr.categoryErr}
              >
                <InputLabel id="category">Select Category</InputLabel>
                <Select
                  labelId="category"
                  label="Select Category"
                  MenuProps={menuProps}
                  name="category"
                  value={question.category}
                  onChange={handleChange}
                >
                  <MenuItem value="Company Policy">Company Policy</MenuItem>
                  <MenuItem value="About Company">About Company</MenuItem>
                </Select>
                <FormHelperText>{formErr.categoryErrMsg}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                fullWidth
                error={formErr.groupErr}
              >
                <InputLabel id="group">Select Question Group</InputLabel>
                <Select
                  labelId="group"
                  label="Select Question Group"
                  MenuProps={menuProps}
                  name="group"
                  value={question.group}
                  onChange={handleChange}
                >
                  <MenuItem value="A Type 01">A Type 01</MenuItem>
                  <MenuItem value="A Type 02">A Type 02</MenuItem>
                </Select>
                <FormHelperText>{formErr.groupErrMsg}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                fullWidth
                error={formErr.statusErr}
              >
                <InputLabel id="status">Select Status</InputLabel>
                <Select
                  labelId="status"
                  label="Select Status"
                  MenuProps={menuProps}
                  name="status"
                  value={question.status}
                  onChange={handleChange}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Disabled">Disabled</MenuItem>
                </Select>
                <FormHelperText>{formErr.statusErrMsg}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                className={classes.create_btn}
                fullWidth
                type="submit"
                name="draft"
                onClick={(event) => handleSubmit(event, "draft")}
              >
                Save to Draft
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.create_btn}
                fullWidth
                name="published"
                onClick={(event) => handleSubmit(event, "published")}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

const mapStateToProps = ({ questionState }) => ({
  questions: questionState.questions,
});

const mapDispatchToProps = { addQuestion };

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
