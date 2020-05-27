import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  ListItem,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main:{
    marginTop: theme.spacing(3), 
  },
  paper: {
    paddingTop: theme.spacing(3),     
    textAlign: 'center',
  },
}));

const WhatToLearn = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const itemList = props.lists;

  return (
    <Grid
        className={classes.main}
        container
        spacing={3}
    >
        <Grid item md={6} xs={12} className={classes.paper}>
          <Paper>{itemList[0]}</Paper>
        </Grid>
        <Grid item md={6} xs={12} className={classes.paper}>
          <Paper>{itemList[1]}</Paper>
        </Grid>
        <Grid item md={6} xs={12} className={classes.paper}>
          <Paper>{itemList[2]}</Paper>
        </Grid>
        <Grid item md={6} xs={12} className={classes.paper}>
          <Paper>{itemList[3]}</Paper>
        </Grid>
    </Grid>
  );
};

WhatToLearn.propTypes = {
  className: PropTypes.string
};

export default WhatToLearn;
