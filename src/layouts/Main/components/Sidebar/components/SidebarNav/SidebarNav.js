/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState, useEffect } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Hidden, Typography  } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from 'react-redux';
import { handleSetUser } from '../../../../../../actions/userAction'; 
import { handleSignout } from '../../../../../../actions/authAction';
import {
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{ flexGrow: 1 }}
  >
    <RouterLink {...props} />
  </div>
));

const SidebarNav = props => {
  const { user, pages, className, handleSignout, ...rest } = props;

  const [ fetchedUser, setUser ] = useState(user);
  useEffect(() => {
    setUser(user);
    
    // props.handleSetUser(props.userId);
  })
  // get user and set it here
  
  const handleSignOut = () => {
    handleSignout();
  }

  const classes = useStyles();

  return (
    !fetchedUser.userType?  <CircularProgress/> :
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {pages.map(page => (
        page.user.includes(fetchedUser.userType.toLowerCase()) &&
        <ListItem
          className={classes.item}
          disableGutters
          key={page.title}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
      <ListItem
        button
        onClick={handleSignOut}
      >
        <Hidden
          lgUp
        >
          <div><ExitToAppIcon/></div>
            Logout
        </Hidden>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
      user : state.currentUser.user,
      // userId : state.auth.userId
      isUserFetched: state.currentUser.isUserFetched
  }
}

export default connect(mapStateToProps, {handleSetUser, handleSignout})(SidebarNav);
