import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { sendRequest, sendReceiptPicture } from '../../../../actions/courseRequestAction';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { ImageIcon } from '@material-ui/icons/Lock';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  List,
  ListItemText,
  ListItemAvatar,
  TextField,
  Button,
  Input,
  Avatar,
  ListItem,
  CardMedia
} from '@material-ui/core';
import ReactPlayer from 'react-player'


const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none'
  },
  avatar: {
    marginRight: 'auto',
    height: 60,
    width: 60,
    flexShrink: 0,
    flexGrow: 0
  },
  image: {
    width: 180,
    height: 120,
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const PaymentForm = props => {
  const { className,
    handleClose,
    user,
    course,
    sendRequest, ...rest } = props;

  const classes = useStyles();

  const history = useHistory();

  const [values, setValues] = useState({
    phoneNumber: '',
    Expiration: '',
    Subscription: ''
  });

  const [option, setOption] = useState();

  const handleSubmit = event => {
    event.preventDefault();

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const requestData = {
      studentId: user.id,
      studentFirstName: user.firstName,
      studentLastName: user.lastName,
      studentImage: user.avatar,
      courseTitle: course.title,
      courseId: course.id,
      phoneNumber: values.phoneNumber,
      receiptImage: props.currentRequestImage,
      requestDate: `${date}`,
      isApproved: false,
      coursePrice: 0,   // tobe fetched from current course 
    }

    // console.log(requestData);
    sendRequest(requestData);
    handleClose();

  }

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const [isImageSelected, setIsImageSelected] = useState(false);

  const handleCapture = ({ target }) => {
      const fileReader = new FileReader();
      const name = 'images';

      fileReader.readAsDataURL(target.files[0]);
      fileReader.onload = (e) => {
              // setImage(e.target.result);
              props.sendReceiptPicture(target.files[0]);
              setIsImageSelected(true);
      };
      
      
  };


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        subheader="The information can be edited later"
        title="Payment Method"
      />
      <Divider />
      <CardContent>
        <Typography variant="body1" gutterBottom >
          Transfer the required amount of money with one of the payment methods listed below.
        </Typography>
        <List>
          <ListItem
            onClick={() => {
              setOption(false);
            }}
          >
            <ListItemAvatar>
              <Avatar src='/images/products/cbe.jpg'>

              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="CBE(Commertial Bank of Ethiopia) Account (AK Academy, 1000221122423)"
              secondary="transfer to this account and send us a picture of the receipt you get from the bank" />
          </ListItem>
          <ListItem
            onClick={() => {
              setOption(true);
            }}
          >
            <ListItemAvatar>
              <Avatar src='/images/products/cbebirr.png'>

              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="CBE birr wallet Phone Number: 0912312123 "
              secondary="transfer to this phone number using your cbe birr wallet and send us your phone number" />
          </ListItem>
        </List>

        <form
          autoComplete="off"
          noValidate
          onSubmit={handleSubmit}
        >
          {option ?
            <TextField
              fullWidth
              label="Phone Number"
              margin="dense"
              name="phoneNumber"
              onChange={handleChange}
              type="text"
              required
              // eslint-disable-next-line react/jsx-sort-props
              // SelectProps={{ native: true }}
              value={values.phoneNumber}
              variant="outlined"
            />

            :
            <React.Fragment>
              <Grid
                container
                spacing={1}
              >
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  <input
                    color="primary"
                    accept="image/*"
                    type="file"
                    onChange={handleCapture}
                    id="icon-button-file"
                    style={{ display: 'none', }}
                  />
                  <label htmlFor="icon-button-file">
                    <Button
                      variant="text"
                      component="span"
                      className={classes.button}
                      size="large"
                      color="primary"
                      size="small"
                      // onClick={uploadImage}
                    >
                      {/* <ImageIcon className={classes.extendedIcon} /> */}
                      select image
                    </Button>
                  </label>
                </Grid>
                <Grid
                  item
                  md={12}
                  xs={12}
                >
                  {isImageSelected ?
                  <CardMedia
                    className={classes.image}
                    image={`https://samvisionapi.herokuapp.com/images/${props.currentRequestImage}`}
                  /> : ''
                  }
                </Grid>
              </Grid>
            </React.Fragment>
          }
        </form>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          type='submit'
          onClick={handleSubmit}
          size="small"
        >
          Request Access
          </Button>
      </CardActions>
    </Card>
  );
};

PaymentForm.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => ({

  user: state.currentUser.user,
  course: state.currentCourse.course,
  currentRequestImage: state.courseRequests.currentRequestImage
});


export default connect(mapStateToProps, { sendRequest, sendReceiptPicture })(PaymentForm);
