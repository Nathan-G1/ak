import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import LockIcon from '@material-ui/icons/Lock';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  Input,
  Avatar
} from '@material-ui/core';
import ReactPlayer from 'react-player'


const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none'
  },
  avatar: {
    marginRight: 'auto',
    height:60,
    width: 60,
    flexShrink: 0,
    flexGrow: 0
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const PaymentForm = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const history = useHistory();

  const [values, setValues] = useState({
    nameOnCard: 'James Craig',
    cardNumber: 231312938,
    Expiration: '',
    Subscription: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const categories = [
    {
      value: '300ETB /3 months ',
      label: '300ETB /3 months '
    },
    {
      value: '600ETB /6 months ',
      label: '600ETB /6 months '
    },
    {
      value: '900ETB /9 months ',
      label: '900ETB /9 months '
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
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
      </form>
    </Card>
  );
};

PaymentForm.propTypes = {
  className: PropTypes.string
};

export default PaymentForm;
