import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { connect } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';
import { StatusBullet } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refunded: 'danger'
};

const CourseContent = props => {
  const { className, courseVideoList, ...rest } = props;

  const classes = useStyles();

  const [courseLectureList, setCourseLectureList] = useState(courseVideoList)

  useEffect(() => {
    setCourseLectureList(courseVideoList);
  })

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        title="Course content"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>length</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>
                {courseLectureList.map(content => (
                  <TableRow
                    hover
                    key={content.id}
                  >
                    <TableCell>{content.title}</TableCell>
                    {/* <TableCell>{content.videoLength}</TableCell> */}
                    <TableCell>--------</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          size="small"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

CourseContent.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    courseVideoList: state.currentCourse.lectureVideos,
  }
};

export default connect(mapStateToProps)(CourseContent);
