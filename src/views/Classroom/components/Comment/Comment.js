import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { CommentItem } from './components'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Button,
  TextField,
  List,
  ListItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#f0f5f5',
  },
  inline: {
    // display: 'inline',
  },
  avatar: {
    width: 40,
    height: 40
  }
}));

const Comment = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [comments, setComments] = useState([
    {
      id: 1,
      userName: 'Abebe',
      avatar: '/images/avatars/avatar_11.png',
      comment: 'I like it . this is so helpful. Thanks ',
      likes: 12,
      dislikes: 1,
      replies: [
        {
          id: 2,
          userName: 'Abebe',
          avatar: '/images/avatars/avatar_11.png',
          comment: 'I like it . this is so helpful. Thanks ',
          likes: 12,
          dislikes: 1,
          replies: [

          ]
        },
      ]
    },
    {
      id: 3,
      userName: 'Abebe',
      avatar: '/images/avatars/avatar_1.png',
      comment: 'I like it . this is so helpful. Thanks ',
      likes: 12,
      dislikes: 1,
      replies: [
        {
          id: 4,
          userName: 'Abebe',
          avatar: '/images/avatars/avatar_2.png',
          comment: 'I like it . this is so helpful. Thanks ',
          likes: 12,
          dislikes: 1,
          replies: [

          ]
        },
      ]
    },
    {
      id: 5,
      userName: 'Abebe',
      avatar: '/images/avatars/avatar_3.png',
      comment: 'I like it . this is so helpful. Thanks ',
      likes: 12,
      dislikes: 1,
      replies: [
        {
          id: 6,
          userName: 'Abebe',
          avatar: '/images/avatars/avatar_4.png',
          comment: 'I like it . this is so helpful. Thanks ',
          likes: 12,
          dislikes: 1,
          replies: [

          ]
        },
      ]
    },
    {
      id: 7,
      userName: 'Abebe',
      avatar: '/images/avatars/avatar_5.png',
      comment: 'I like it . this is so helpful. Thanks ',
      likes: 12,
      dislikes: 1,
      replies: [
        {
          id: 8,
          userName: 'Abebe',
          avatar: '/images/avatars/avatar_6.png',
          comment: 'I like it . this is so helpful. Thanks ',
          likes: 12,
          dislikes: 1,
          replies: [

          ]
        },
        {
          id: 9,
          userName: 'Abebe',
          avatar: '/images/avatars/avatar_7.png',
          comment: 'I like it . this is so helpful. Thanks ',
          likes: 12,
          dislikes: 1,
          replies: [

          ]
        },
      ]
    },
  ]);

  const [values, setValues] = useState({
    password: '',
    comment: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleLikeCount = (id) => {
      var i = 0;
      for(var j = 0; j < comments.length; j++){
        if(id == comments[j].id){
          i = j
        }
      }

      const items = comments;
      const item = items[i];
      item.likes++;
      items[i]=item;
      setComments(items);
      // setComments(prevState => ({
      //   comments : {
      //     ...prevState,
      //     [prevState[i].likes]: prevState[i].likes + 1,
      //   }
      // }));
  }

  const handleDisLikeCount = (id) => {
    var i = 0;
    for(var j = 0; j < comments.length; j++){
      if(id == comments[j].id){
        i = j
      }
    }

    const items = comments;
    const item = items[i];
    item.dislikes++;
    items[i]=item;
    setComments(items);
  }

  return (
    <React.Fragment>
      <Card
        {...rest}
        className={clsx(classes.root, className)}
      >
        <form>
          <CardHeader
            subheader="Discussion"
            title="Q&A"
          />
          <Divider />
          <CardContent>

            <TextField
              fullWidth
              label="Comment..."
              margin="dense"
              name="qna"
              onChange={handleChange}

              value={values.comment}
              variant="outlined"
            />
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="outlined"
            >
              Comment
            </Button>
          </CardActions>
        </form>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <List>
              {
                comments.map((comment) => (
                  <React.Fragment>
                    <ListItem key={comment.id} alignItems="flex-start">
                      <CommentItem
                        comment={comment}
                        handleLikeCount={handleLikeCount}
                        handleDisLikeCount={handleDisLikeCount}
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                  )
                )
              }
          </List>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

Comment.propTypes = {
  className: PropTypes.string
};

export default Comment;
