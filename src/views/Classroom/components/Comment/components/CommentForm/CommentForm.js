import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { addComment, addReply } from '../../../../../../actions/commentAction';
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
  const { className, currentuser, videoId, ...rest } = props;

  const classes = useStyles();

  const [isFormActionVisible, setIsFormActionVisible] = useState(false);
  const [isTheFormForReply, setIsTheFormForReply] = useState(props.istheformforreply);
  const [values, setValues] = useState({
    qna: ''
  });

  useEffect(() => {
  })

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const comment = {
      text: values.qna,
      userName: props.currentuser.firstName,
      avatar: props.currentuser.avatar,
      likes: 0,
      dislikes: 0,
      replies: [

      ],
      commentId: "",
      videoId: videoId,
      courseId: ""
    };

    if (isTheFormForReply) {
      props.addReply(props.commentid, comment);
    } else {
      props.addComment(JSON.stringify(comment));
    }

    setValues(values => ({
      ...values,
      qna: ''
    }));

    if (props.setistheformvisible) {
      props.setistheformvisible();
    }

  }
  return (
    <form
      onSubmit={handleSubmit}
    >
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
                    label={isTheFormForReply ? 'Reply...' : 'Question...'}
                    margin="dense"
                    name="qna"
                    required
                    onChange={handleChange}
                    onClick={() => {
                      setIsFormActionVisible(true);
                    }}
                    value={values.qna}
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
                {isTheFormForReply ? 'Reply' : 'Ask'}
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

const mapStateToProps = state => ({
  currentuser: state.currentUser.user,
  videoId: state.selectedVideo.video.id
});


export default connect(mapStateToProps, { addComment, addReply })(CommentForm);
