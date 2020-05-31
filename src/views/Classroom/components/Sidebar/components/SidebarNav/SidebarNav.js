/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes, { func } from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors } from '@material-ui/core';

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

// const CustomRouterLink = forwardRef((props, ref) => (
//   <div
//     ref={ref}
//     style={{ flexGrow: 1 }}
//   >
//     <RouterLink {...props} />
//   </div>
// ));

const SidebarNav = props => {
  const { coursevideos, className, ...rest } = props;

  const classes = useStyles();

  function handleCourseVideo(coursevideo){
    props.onCourseVideoChange(coursevideo);
  }

  return (
    <List
      {...rest}
      className={clsx(classes.root, className)}
    >
      {coursevideos.map(coursevideo => (
        <ListItem
          className={classes.item}
          disableGutters
          key={coursevideo.id}
        >
          <Button
            activeClassName={classes.active}
            className={classes.button}
            // component={CustomRouterLink}
            onClick={() => handleCourseVideo(coursevideo)}
            key={coursevideo.id}
          >
            {coursevideo.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
};

export default SidebarNav;
