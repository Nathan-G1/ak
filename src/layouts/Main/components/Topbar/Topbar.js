import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Avatar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { connect } from 'react-redux';
import { handleSignout } from '../../../../actions/authAction';

const useStyles = makeStyles(theme => ({
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

const Topbar = props => {
  const { className, onSidebarOpen, handleSignout, currentuser, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const handleSignOut = () => {
    props.handleSignout();
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <Avatar
            className={classes.small}
            src={`https://samvisionapi.herokuapp.com/images/${currentuser.avatar}`} />
          <Typography
            className={classes.nameTxt}
          >{currentuser.firstName}</Typography>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={handleSignOut}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    currentuser: state.currentUser.user
  }
};

export default connect(mapStateToProps, { handleSignout })(Topbar);
