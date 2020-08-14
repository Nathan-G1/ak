import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UserList = (props) => {
  const { isUsersFetched, usersList } = props;
  const classes = useStyles();

  const [users, setUsers] = useState(usersList);

  useEffect(() => {
    if (isUsersFetched) {
      setUsers(usersList);
    }
  })
  return (
    <div className={classes.root}>
      <UsersToolbar/>
      <div className={classes.content}>
        <UsersTable users={users} />
      </div>
    </div>
  );
};

UserList.propTypes = {
  usersList: PropTypes.array
};

function mapStateToProps(state) {
  return {
      usersList: state.usersList.users,
      isUsersFetched: state.usersList.isUsersFetched
  }
}

export default connect(mapStateToProps, {})(UserList);
