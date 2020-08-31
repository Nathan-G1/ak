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
  CardMedia,
  List,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Collapse,
  Typography,
  Button,
  Grid
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
  requestImage: {
    width: 250,
    height: 180
  },

  handledButton: {
    color: 'white',
    backgroundColor: 'green'
  }

}));

const RequestItem = props => {
  const { className, request, approveUserRequest, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleApprove = () => {
    const selectedRequest = {
      studentId: request.studentId,
      studentFirstName: request.studentFirstName,
      studentLastName: request.studentLastName,
      studentImage: request.studentImage,
      courseTitle: request.courseTitle,
      courseId: request.courseId,
      phoneNumber: request.phoneNumber,
      receiptImage: request.receiptImage,
      requestDate: request.requestDate,
      isApproved: true,
      coursePrice: request.coursePrice,
      id: request.id
    }
    
    approveUserRequest(selectedRequest, request.courseId, request.id);
    setOpen(!open);
  }


  return (
    <React.Fragment>
      <ListItem
        button
        onClick={handleClick}
      >
        <ListItemAvatar>
          <Avatar 
            src={`https://samvisionapi.herokuapp.com/images/${request.studentImage}`}
          >
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={request.studentFirstName + " " + request.studentLastName} />
        {request.isApproved ? 
          <Button variant="contained" className={classes.handledButton} size="small">
            Handled
          </Button> :
          <Button variant="contained" color="secondary" size="small">
            pending
          </Button>
        }
        
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>

          <Grid
            container
          >
            <Grid
              item
              md={6}
              xs={12}
            >
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
                  disabled = {request.isApproved ?  true : false}
                >
                  Approve
                </Button>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
                <CardMedia
                  className={classes.requestImage}
                  image={`https://samvisionapi.herokuapp.com/images/${request.receiptImage}`}
                />
            </Grid>
          </Grid>
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
