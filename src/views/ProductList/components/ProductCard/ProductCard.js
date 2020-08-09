import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { getCourse } from '../../../../actions/courseAction';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
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
  rating:{
    marginTop: theme.spacing(2),
  },
}));

const ProductCard = props => {
  const { className, course, getCourse, ...rest } = props;

  const history = useHistory();

  const classes = useStyles();

  const getRatingStars = () => {
    var rate = [];
    for(var i = 0; i < course.rating; i++){
      rate.push(<StarIcon></StarIcon>);
    } 
    return rate;
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      onClick={()=>{
        // add conditional state here
        // for teacher and student
        getCourse(course.id);
        history.push("/course-detail");
      }}
      
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={course.icon}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {course.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {course.description}
        </Typography>
        <Typography 
          variant="body2" 
          className={classes.rating}
          align = "center"
          size = "small"
          >{getRatingStars()}</Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              2hr to Complete
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <GetAppIcon className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
              {course.totalDownloads} Enrolled
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card> 
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  course: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
  }
};


export default connect(mapStateToProps, { getCourse })(ProductCard);
