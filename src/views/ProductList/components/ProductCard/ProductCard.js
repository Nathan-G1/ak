import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { getCourse } from '../../../../actions/courseAction';
import { getCourseReview } from '../../../../actions/courseAction';
import { checkCourseAccess } from '../../../../actions/courseRequestAction';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
  Grid,
  Divider
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    maxWidth: 325,
  },
  media: {
    height: 140,
  },
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  },
  rating: {
    marginTop: theme.spacing(2),
  },
}));

const ProductCard = props => {
  const { className,
          course,
          getCourse, 
          userType, 
          getCourseReview,
          userId,
          checkCourseAccess, ...rest } = props;

  const history = useHistory();

  const classes = useStyles();

  const getRatingStars = () => {
    var rate = [];
    for (var i = 0; i < course.rating; i++) {
      rate.push(<StarIcon></StarIcon>);
    }
    return rate;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      onClick={() => {

        if (userType.toLowerCase() == 'student') {
          getCourse(course.id);
          getCourseReview(course.id);
          checkCourseAccess(course.id, userId)
          history.push("/course-detail");
        } else if (userType.toLowerCase() == 'teacher') {
          getCourse(course.id);
          history.push("/course-profile");
        }

      }}

    >

      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={course.icon}
          image="/images/courseImgs/courseImg_1.jpg" // this will be edited with the original image
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {course.description}
          </Typography>
          <Typography
            variant="body2"
            className={classes.rating}
            align="center"
            size="small"
          >{getRatingStars()}</Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userType: state.currentUser.user.userType,
    userId: state.currentUser.user.id
  }
};


export default connect(mapStateToProps, { getCourse, getCourseReview, checkCourseAccess })(ProductCard);
