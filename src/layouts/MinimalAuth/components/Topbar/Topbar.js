import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Avatar, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  nameTxt: {
    color: 'white',
    paddingLeft: theme.spacing(1)
  }
}));

const Topbar = (props, { isAuthenticated = props.isauthenticated }) => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();


  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo.svg"
          />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    // isauthenticated: state.auth.isAuthenticated
  }
};

export default connect(mapStateToProps)(Topbar);
