import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { 
  Avatar,
  Typography,
  Button,
  TextField,
  Input,
  Box,
  Grid
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarIcon from '@material-ui/icons/Star';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  name: {
    marginTop: theme.spacing(1)
  },

  rating:{
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  btn: {
    marginTop: theme.spacing(2)
  }
}));

const CommentForm = props => {
  const { className,handleClose, ...rest } = props;

  const classes = useStyles();

  const [feedback, setFeedback] = useState({
    rating: 2,
    comment: ''
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name] : e.target.value
    });
  }

  const hanldeSkip = (e) => {
    handleClose();
  }

  return (
        <form>
            <Grid  container justify="center">
                <Box>
                <Typography>
                  How was your class?
                </Typography>
                <Rating
                    name="rating"
                    value={feedback.rating}
                    onChange={handleChange}
                />
                </Box>
                
                <TextField
                fullWidth
                label="Any feedback"
                margin="dense"
                name="courseDescription"
                multiline
                rows= '4'
                rowsMax= '10'
                onChange={handleChange}
                name="feedback"
                variant="outlined" 
                />
                <span>
                  <Button
                  className={classes.btn}
                  color="primary"
                  variant="contained"
                  type="submit"
                  size="small"
                  >
                    Submit
                  </Button> <span/>
                  <Button
                    className={classes.btn}
                    // color="primary"
                    // variant="contained"
                    size="small"
                    onClick={hanldeSkip}
                  >
                    Skip
                  </Button>
                </span>
            </Grid>
        </form>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string
};

export default CommentForm;
