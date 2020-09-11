import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { ReviewItem, CommentForm } from './components'
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
  Avatar,
  ListItemAvatar,
  Grid,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  inline: {
    // display: 'inline',
  },
  avatar: {
    width: 40,
    height: 40
  },
  reviewList:{
    padding: theme.spacing(3),
  }
}));

const Review = props => {
  const { className, courseReview, ...rest } = props;

  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState({
    name: 'Girma',
    avatar: '/images/avatars/avatar_7.png'
  });

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
      <CardHeader
        // subheader="Discussion"
        title="Review"
      />
      <CardContent>
        <CommentForm
          currentuser={currentUser}
        />
      </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <List>
              {
                courseReview.map((review) => (
                  <React.Fragment>
                    <ListItem
                      className={classes.reviewList} 
                      key={review.id} 
                      alignItems="flex-start"
                    >
                      <ReviewItem
                        review={review}
                        currentuser={currentUser}
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

Review.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    courseReview: state.currentCourse.courseReview
  }
};

export default connect(mapStateToProps, { })(Review);
