import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Video = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Subtitle or description about the video"
          title="Video Ttitle"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
           {/* TODO: Like, Unlike, share and speed control widgets go here */}
          <Button
            color="primary"
            variant="outlined"
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Video.propTypes = {
  className: PropTypes.string
};

export default Video;
