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
import ReactPlayer from 'react-player'


const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Video = props => {
  const { className, ...rest } = props;

  const currentlecture = props.currentlecture;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Subtitle or description about the video"
          title={currentlecture.title}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
          >
            <ReactPlayer url={currentlecture.url} controls width='100%'/>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          {/* TODO: Like, Unlike, share and speed control widgets go here */}
        </CardActions>
      </form>
    </Card>
  );
};

Video.propTypes = {
  className: PropTypes.string
};

export default Video;
