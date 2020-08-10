import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles, useTheme} from '@material-ui/styles';
import {
  Grid,
  useMediaQuery,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider
} from '@material-ui/core';

import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const useStyles = makeStyles(theme => ({
  main:{
    marginTop: theme.spacing(3), 
  },
  listStyle: {
    marginTop: theme.spacing(2), 
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
}));

const WhatToLearn = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const itemList = props.lists;

  return (
    <List 
      className={isDesktop ? classes.listStyle : ''}
    >
      {
        itemList.map((item) => (
          
          <ListItem>
            <ListItemIcon style={{color:"green"}}>
              <DoneOutlineIcon/>
            </ListItemIcon>
            <ListItemText>{item}</ListItemText>
          </ListItem>
        ))
      }
    </List>
  );
};

WhatToLearn.propTypes = {
  className: PropTypes.string
};

export default WhatToLearn;
