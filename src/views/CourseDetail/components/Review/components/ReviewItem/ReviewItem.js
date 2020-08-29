import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { CommentForm } from '..'
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Button,
} from '@material-ui/core';
import { setStatic } from 'recompose';
import { blue } from '@material-ui/core/colors';
import { transform } from 'typescript';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    // display: 'inline',
  },
  avatar: {
    width: 40,
    height: 40
  },

  clickedViewReply: {
    color: 'blue',
    textTransform : 'capitalize',
  },
  notActiveViewReply : {
    textTransform : 'capitalize',
  }
}));

const ReviewItem = props => {
  const { className, review ,currentuser, courseReview, ...rest } = props;
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          className={classes.avatar}
          src={review.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={review.userName}
        secondary={
          <React.Fragment>
            
            {review.text}<br />

          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};

ReviewItem.propTypes = {
  className: PropTypes.string
};

export default ReviewItem;
