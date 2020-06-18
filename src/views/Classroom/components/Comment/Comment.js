import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { CommentItem, CommentForm } from './components'
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
    backgroundColor: '#f0f5f5',
  },
  inline: {
    // display: 'inline',
  },
  avatar: {
    width: 40,
    height: 40
  },
  commentBtn:{
    
  }
}));

const Comment = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState(props.currentUserState);

  const [comments, setComments] = useState(props.incomingComments);

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
        subheader="Discussion"
        title="Q&A"
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
                comments.map((comment) => (
                  <React.Fragment>
                    <ListItem key={comment.id} alignItems="flex-start">
                      <CommentItem
                        comment={comment}
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

Comment.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state) => {
  return{
    incomingComments: state.comments.comments,
    currentUserState: state.comments.currentUser
  }
}

export default connect(mapStateToProps, {})(Comment);
