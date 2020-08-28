import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { 
  Avatar,
  Typography,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  CardMedia,
  CardContent
} from '@material-ui/core';
// import StarIcon from '@material-ui/icons/Star';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CommentForm } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1%',
    boxShadow: theme.shadows[5],
    width: 300,
    height: 370
  },
  rating:{
    alignContent: "center",
    marginTop: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(3)
  },
  media: {
    height: 0,
    paddingTop: '45.25%', // 16:9
  },
}));

const Profile = props => {
  const { className, currentCourse, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const course = {
    name: currentCourse.title,
    avatar: currentCourse.imageUrl,
    // rating: 5
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const getRatingStars = () => {
  //   var rate = [];
  //   for(var i = 0; i < course.rating; i++){
  //     rate.push(<StarIcon></StarIcon>);
  //   } 
  //   return rate;
  // }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={course.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {course.name}
      </Typography>
      {/* <Typography variant="body2">{getRatingStars()}</Typography> */}
      <Button
          className = {classes.rating}
          onClick={handleOpen}
          color="primary"
          variant="outlined"
          size="small"
      >
        Rate
      </Button>
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
            
          <Fade in={open}
           >
            <Card className={classes.paper}> 
              <CardMedia
                className={classes.media}
                image="/images/avatars/avatar_12.jpg"
              />
              <CardContent>
                <CommentForm
                  handleClose={handleClose}
                />
              </CardContent>  
            </Card>
          </Fade>
        </Modal>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => ({
  currentCourse: state.currentCourse.course
});

export default connect(mapStateToProps)(Profile);
