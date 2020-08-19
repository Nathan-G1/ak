import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { sendRequest } from '../../../../actions/courseRequestAction';

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
  ListItem
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
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const PaymentForm = props => {
  const { className,
    handleClose,
    userId,
    courseId,
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
      studentId: userId,
      courseId: courseId,
      phoneNumber: values.phoneNumber,
      receiptImage: '',
      requestDate: `${date}`,
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
            <Button>
              select image
            </Button>
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

    userId: state.currentUser.user.id,
    courseId: state.currentCourse.course.id
  });
  

export default connect(mapStateToProps, { sendRequest })(PaymentForm);
