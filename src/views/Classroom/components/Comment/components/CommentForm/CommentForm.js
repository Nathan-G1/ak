import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  List,
  ListItem,
  CardContent,
  TextField,
  Grid,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button
} from '@material-ui/core';
import ReactPlayer from 'react-player'


const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    width: 40,
    height: 40
  },
}));

const CommentForm = props => {
  const { className, currentuser, ...rest } = props;

  const classes = useStyles();

  const [isFormActionVisible, setIsFormActionVisible] = useState(false);
  const [values, setValues] = useState({
    qna: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form>
        <Divider />
        <CardContent>
        <List>
            <ListItem>
            <ListItemAvatar>
                <Avatar
                className={classes.avatar}
                src={currentuser.avatar}  
                />
            </ListItemAvatar>
            <ListItemText
                primary={
                <React.Fragment>
                    <TextField
                    fullWidth
                    label="Question..."
                    margin="dense"
                    name="qna"
                    onChange={handleChange}
                    onClick={() => {
                        setIsFormActionVisible(true);
                    }}
                    />
                </React.Fragment>
                }
            >
            </ListItemText>
            </ListItem>
            {
                isFormActionVisible && 
                <Grid
                container
                className={classes.commentBtn}
                justify="flex-end"
                >
                <Button 
                    size="small"
                    onClick={() => {
                        setIsFormActionVisible(false);
                    }}
                >
                    Cancel
                </Button>
                <Button 
                    variant="outlined"
                    size="small"
                    type="submit"
                >
                    Ask
                </Button>
                </Grid>
            }
                
        </List>
        </CardContent>
    </form>
  );
};

CommentForm.propTypes = {
  className: PropTypes.string
};

export default CommentForm;
