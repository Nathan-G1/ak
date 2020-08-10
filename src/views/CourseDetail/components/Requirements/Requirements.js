import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  ListItem
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main:{
    marginTop: theme.spacing(1), 
  },
  gridList: {
    
  }
}));

const Requirements = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const requirements = props.requirements;

  return (
    <Typography
      className={classes.main}
    >
      {requirements}
    </Typography>
  );
};

Requirements.propTypes = {
  className: PropTypes.string
};

export default Requirements;
