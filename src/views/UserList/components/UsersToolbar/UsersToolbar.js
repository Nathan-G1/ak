import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { SearchInput } from 'components';
import { handleSetUsers, fetchUsersForAdmin } from '../../../../actions/userListAction';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));


const UsersToolbar = props => {

  const { fun, handleSetUsers, fetchUsersForAdmin, className, ...rest } = props;

  const classes = useStyles();

  function getUsers(userType) {
    
  }
  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.importButton} onClick={() => fetchUsersForAdmin('student')}>Students</Button>
        <Button className={classes.exportButton} onClick={() => fetchUsersForAdmin('Teacher')}>Teachers</Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add Teacher
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search user..."
        />
      </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
      user: state.currentUser.user
  }
}

export default connect(mapStateToProps, {fetchUsersForAdmin})(UsersToolbar);
