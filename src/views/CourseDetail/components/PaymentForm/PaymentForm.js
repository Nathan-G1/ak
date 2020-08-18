import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
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
  const { className, handleClose, ...rest } = props;

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
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    const requestData = {
      studentId: '',
      courseId: '',
      phoneNumber: '',
      receiptImage: '',
      requestDate: `${date}`
    }

    // props.sendRequest(requestData);
      
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
      {/* <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information can be edited later"
          title="Payment Method"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            
            <Grid
              item
              md={6}
              xs={12}
            >
                <TextField
                  fullWidth
                  helperText="Please specify the course title"
                  label="Name on Card"
                  margin="dense"
                  name="nameOnCard"
                  onChange={handleChange}
                  required
                  value={values.nameOnCard}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Card Number"
                margin="dense"
                name="cardNumber"
                onChange={handleChange}
                required
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.cardNumber}
                variant="outlined"
              >
              </TextField>

              
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Expiration"
                margin="dense"
                name="Expiration"
                onChange={handleChange}
                required
                value={values.Expiration}
                variant="outlined"
              />
              
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Subscription"
                margin="dense"
                name="Subscription"
                select
                onChange={handleChange}
                required
                value={values.Subscription}
                variant="outlined"
              >
                {categories.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={()=>{
                history.push("/classroom");
              }}
          >
            <LockIcon/>
            Pay
          </Button>
        </CardActions>
      </form> */}
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
                <ImageIcon />
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
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="CBE birr wallet Phone Number: 0912312123 "
              secondary="transfer to this phone number using your cbe birr wallet and send us your phone number" />
          </ListItem>
        </List>
        {option ?
          <form
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <TextField
              fullWidth
              label="Phone Number"
              margin="dense"
              name="phoneNumber"
              onChange={handleChange}
              required
              // eslint-disable-next-line react/jsx-sort-props
              SelectProps={{ native: true }}
              value={values.phoneNumber}
              variant="outlined"
            >

            </TextField>
          </form>
          : <Button>
            select image
        </Button>
        }

      </CardContent>
      <CardActions>
        <Button
          color="primary"
          variant="contained"
          type='submit'
          onClick={() => handleClose()}
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

export default PaymentForm;
