import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateUser, uploadProfileImage } from '../../../../actions/userAction';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  CircularProgress,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AccountProfile = props => {
  const { className, updateUser, uploadProfileImage, ...rest } = props;

  const classes = useStyles();

  const [user, setUser] = useState(props.user);

  const [isImageUploaded, setIsImageUploaded] = useState(false);

  useEffect(() => {
    setUser(props.user);
    setIsImageUploaded(false);
  });

 

  const handleCapture = ({ target }) => {
      const fileReader = new FileReader();
      // const name = 'images';
      var localUser = {
        userType: props.user.userType,
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        avatar: props.userImage,
        phoneNumber: props.user.phoneNumber,
        password: props.userPassword,
        realm: props.user.realm,
        username: props.user.username,
        email: props.user.email, // shouldn't be editable
        emailVerified: props.user.emailVerified,
        id: props.user.id,
        courseId: props.user.courseId
      }

      fileReader.readAsDataURL(target.files[0]);
      fileReader.onload = (e) => {
              // updateUser(localUser, props.user.id);
              uploadProfileImage(target.files[0], localUser);
              setIsImageUploaded(true);
      };
  };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
              {user.firstName} {user.lastName} 
            </Typography>
            <Typography
              className={classes.locationText}
              color="textSecondary"
              variant="body1"
            >
              Addis Ababa, Ethiopia
            </Typography>
            {/* <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {moment().format('hh:mm A')} ({user.timezone})
            </Typography> */}
          </div>
          <Avatar
            className={classes.avatar}
            // src={props.isImageLoaded ? `https://samvisionapi.herokuapp.com/images/${props.userImage}` : `https://samvisionapi.herokuapp.com/images/${props.user.avatar}` }
            src = {`https://samvisionapi.herokuapp.com/images/${props.user.avatar}`}
          />
        </div>
        <div className={classes.progress}>
          <Typography variant="body1">Profile Completeness: 70%</Typography>
          <LinearProgress
            value={70}
            variant="determinate"
          />
        </div>
        <input
          color="primary"
          accept="image/*"
          type="file"
          onChange={handleCapture}
          id="icon-button-file"
          style={{ display: 'none', }}
        />
      </CardContent>
      <Divider />
      <CardActions>
        <label htmlFor="icon-button-file">
          <Button
            variant="text"
            component="span"
            className={classes.uploadButton}
            size="large"
            color="primary"
            size="small"
            // onClick={uploadImage}
          >
            {/* <ImageIcon className={classes.extendedIcon} /> */}
            Change
          </Button>
        </label>
        <Button variant="text">Remove picture</Button>
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    user: state.currentUser.user,
    userImage: state.currentUser.userImage,
    userPassword: state.currentUser.userPassword,
    isImageLoaded: state.currentUser.isImageLoaded
  }
};

export default  connect(mapStateToProps, { updateUser, uploadProfileImage })(AccountProfile);
