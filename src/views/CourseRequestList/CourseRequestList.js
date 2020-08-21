import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { UsersToolbar, RequestItem } from './components';
import { getRequests } from '../../actions/courseRequestAction';
import mockData from './data';
import PropTypes from 'prop-types';
import {

  List,

} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const CourseRequestList = (props) => {
  const { courseRequests, getRequests, ...rest } = props;
  const classes = useStyles();
  
  useEffect(() => {
    // getRequests();
    // if (isUsersFetched) {
      setRequests(courseRequests);
    // }
  })

  const [requests, setRequests] = useState(courseRequests);

  
  
  return (
    <div className={classes.root}>
      <UsersToolbar/>
      <div className={classes.content}>
        <List component='nav'>
          {
            requests.map((request, i) => (
              <RequestItem key = {i} request={request} />
            ))
          }
          
        </List>
      </div>
    </div>
  );
};

CourseRequestList.propTypes = {
  // usersList: PropTypes.array
};

function mapStateToProps(state) {
  return {
      courseRequests: state.courseRequests.requests,
  }
}

export default connect(mapStateToProps, { getRequests })(CourseRequestList);
