import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import { WhatToLearn, About } from './components';
import StarIcon from '@material-ui/icons/Star';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField, 
  Typography,
  Avatar, 
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  },
  title: {
    marginTop: theme.spacing(3), 
  },

  avatar: {
    width: 60,
    height: 60
  },

  avatarS: {
    width: 30,
    height: 30, 
    marginRight: theme.spacing(1), 
  },
  subtitle: {
    marginTop: theme.spacing(1),
    fontWeight: 700,
    fontSize: 15,
  },
  button: {
    marginTop: theme.spacing(3), 
  },
  helper: {
    marginTop: theme.spacing(3), 
  }
}));

const CourseDetail = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    courseIcon: '/images/products/product_5.png',
    courseName: 'Applied Data Science with Python Specialization',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ',
    rating: 5,
    instructorPhoto: '/images/avatars/avatar_11.png',
    instructorName: 'Abebe',
    whatToLearn: [
      'printing and typesetting',
      'There are many variations',
      'web page editors now',
      'The point of using Lorem'
    ],
    about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
  });

  const getRatingStars = () => {
    var rate = [];
    for(var i = 0; i < values.rating; i++){
      rate.push(<StarIcon></StarIcon>);
    } 
    return rate;
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardContent>
        <Avatar
          alt="course"
          className={classes.avatar}
          src={values.courseIcon}
        />

        <Typography
          className={classes.title}
          variant="h2"
        >
          {values.courseName}
        </Typography>
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {values.description}
        </Typography>
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {getRatingStars()}
        </Typography>
        <Grid
          container
          spacing={0}
        >
          
            <Avatar
              alt="course"
              className={classes.avatarS}
              src={values.instructorPhoto}
            />
          
            <Typography
              className={classes.subtitle}
            >
              {values.instructorName}
            </Typography>
          
        </Grid>

        <Typography>
        <Button
              className={classes.button}
              color="primary"
              variant="contained"
            >
              Enroll
        </Button>
        </Typography>

        </CardContent>
      </Card>
      
      <Card className={classes.helper}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
          >
            WHAT YOU WILL LEARN
            <WhatToLearn
              lists = {values.whatToLearn}
            />
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.helper}>
      <CardHeader
          title="About this Course"
      />
      <Divider />
        <CardContent>
          <Typography
              className={classes.title}
              variant="h5"
          >

              <About
                description = {values.about}
              />
          </Typography>

        </CardContent>
      </Card>
    </React.Fragment>
    
  );
};

export default CourseDetail;
