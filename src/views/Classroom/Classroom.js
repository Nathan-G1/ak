import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { Video, Password } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const Classroom = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
      >
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Video />
        </Grid>
      </Grid>
      <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Password />
        </Grid>
    </div>
  );
};

export default Classroom;
