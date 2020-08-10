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

const About = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const aboutDescription = props.description;

  return (
    <Typography
      className={classes.main}
    >
      {aboutDescription}
    </Typography>
  );
};

About.propTypes = {
  className: PropTypes.string
};

export default About;
