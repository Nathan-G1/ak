import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { approveUserRequest } from '../../../../actions/courseAction';
import {
  Card,
  CardActions,
  CardContent,
  List,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  Typography,
  Button
} from '@material-ui/core';

import {
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

}));

const RequestItem = props => {
  const { className, request, approveUserRequest, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleApprove = () => {
    approveUserRequest(request.courseId, request.studentId);
  }


  return (
    <React.Fragment>
      <ListItem
        button
        onClick={handleClick}
      >
        <ListItemAvatar>
          <Avatar src={request.studentImage}>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={request.studentFirstName + " " + request.studentLastName} />
        <Button variant="contained" color="secondary" size="small">
          pending
        </Button>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        
            <Typography variant="body1" gutterBottom >
              Requested by : {request.studentFirstName}
            </Typography>
            <Typography variant="body1" gutterBottom >
              Payment option : CBE birr wallet
            </Typography>
            <Typography variant="body1" gutterBottom >
              Phone number : {request.phoneNumber}
            </Typography>
            <Typography variant="body1" gutterBottom >
              Requested Course  : {request.courseTitle}
            </Typography>
            <Typography variant="body1" gutterBottom >
              Expected payment : {request.coursePrice}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              type='submit'
              onClick={handleApprove}
              size="small"
            >
              Approve
            </Button>
      </Collapse>
      <Divider/>
    </React.Fragment>
  );
};

RequestItem.propTypes = {
  className: PropTypes.string,
  // request: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
      user : state.currentUser.user,
      // userId : state.auth.userId
      isUserFetched: state.currentUser.isUserFetched
  }
}

export default connect(mapStateToProps, {approveUserRequest})(RequestItem);
