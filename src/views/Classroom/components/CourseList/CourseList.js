import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const CourseList = props => {
  const { className,courseList, ...rest } = props;

  const classes = useStyles();

  function hanldeCourseVideoChange(course){
    props.onCourseVideoChange(course);
  }


  return (
    
      <List>
      {courseList.map((course, i) => (
        <div>
          <ListItem key={course.order} button onClick={() => hanldeCourseVideoChange(course)}>
              <ListItemText>{course.title}</ListItemText>
          </ListItem>
          <Divider />
        </div>
        )
      )
      }
      </List>
    
  );
};

CourseList.propTypes = {
  className: PropTypes.string
};

export default CourseList;
