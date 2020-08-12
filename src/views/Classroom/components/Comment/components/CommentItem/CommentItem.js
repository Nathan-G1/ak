import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { CommentForm } from '../';
import { connect } from 'react-redux';
import { getCommentReplies } from '../../../../../../actions/commentAction';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Button,
} from '@material-ui/core';
import { setStatic } from 'recompose';
import { blue } from '@material-ui/core/colors';
import { transform } from 'typescript';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    // display: 'inline',
  },
  avatar: {
    width: 40,
    height: 40
  },

  clickedViewReply: {
    color: 'blue',
    textTransform : 'capitalize',
  },
  notActiveViewReply : {
    textTransform : 'capitalize',
  }
}));

const CommentItem = props => {
  const { className, comment ,currentuser, incomingCommentReplies, getCommentReplies, ...rest } = props;
  const [isRepliesVisibile, setIsRepliesVisible] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const [isCommentFormVisible, setIsCommentFormVisible] = useState(false);
  const [commentReplies, setCommentReplies] = useState(incomingCommentReplies);

  const classes = useStyles();

  useEffect(() => {
    setCommentReplies(incomingCommentReplies);
    // getCommentReplies();
  })

  const viewReplies = (commentId) => {
    // alert(commentReplies.length);
    getCommentReplies(commentId);
    setIsRepliesVisible(!isRepliesVisibile);
  }

  const handleLikeCount = (e) => {
    props.handleLikeCount(comment.id);
    setIsLikeClicked(!isLikeClicked);
  }

  const handleDisLikeCount = (e) => {
    props.handleDisLikeCount(comment.id);
    setIsLikeClicked(!isLikeClicked);
  }

  const handleLikeCountForReplies = (id) => {
    var i = 0;
    for(var j = 0; j < commentReplies.length; j++){
      if(id == commentReplies[j].id){
        i = j
      }
    }

    const items = commentReplies;
    const item = items[i];
    item.likes++;
    items[i]=item;
    setCommentReplies(items);
  }

  const handleDisLikeCountForReplies = (id) => {
    var i = 0;
    for(var j = 0; j < commentReplies.length; j++){
      if(id == commentReplies[j].id){
        i = j
      }
    }

    const items = commentReplies;
    const item = items[i];
    item.dislikes++;
    items[i]=item;
    setCommentReplies(items);
  }

  const changeFormVisibility= () => {
    setIsCommentFormVisible(!isCommentFormVisible);
  }
  return (
    <React.Fragment>
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          className={classes.avatar}
          src={comment.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={comment.userName}
        secondary={
          <React.Fragment>
            {/* <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {comment.userName}
                        </Typography> */}
            {comment.text}<br />
            <IconButton 
              onClick={handleLikeCount}
            >
              <ThumbUpIcon />
              <Typography>{comment.likes}</Typography>
            </IconButton>
            <IconButton
              onClick={handleDisLikeCount}
            >
              <ThumbDownAltIcon />
              <Typography>{comment.dislikes}</Typography>
            </IconButton>
            <Button
              size="small"
              onClick={() => {
                changeFormVisibility();
              }}
            >
              Reply
            </Button>
            <br />
            {
              isCommentFormVisible && 
              <CommentForm
                currentuser={currentuser}
                istheformforreply={true}
                commentid={comment.id}
                setistheformvisible={changeFormVisibility}
              />
            }
            
            <Button
              size="small"
              className={isRepliesVisibile ? classes.clickedViewReply : classes.notActiveViewReply}
              onClick={() => {viewReplies(comment.id)}}
            >
                {
                  isRepliesVisibile ? (
                    <React.Fragment>
                      <ArrowDropUpIcon/>
                      {/* <span>Hide {commentReplies.length} {commentReplies.length > 1 ? 'replies' : 'reply'}</span> */}
                      <span>Hide Reply</span>
                    </React.Fragment>
                      
                    ) : (
                      <React.Fragment>
                        <ArrowDropDownIcon />
                        <span>view Reply</span>
                        {/* <span>view {commentReplies.length} {commentReplies.length > 1 ? 'replies' : 'reply'}</span> */}
                      </React.Fragment>
                    )
                }
                
            </Button>
            {
              isRepliesVisibile &&
              <List>
                {
                  commentReplies.map((comment) => (
                    <React.Fragment>
                      <ListItem key={comment.id} alignItems="flex-start">
                        <CommentItem
                          comment={comment}
                          currentuser={props.currentuser}
                          handleLikeCount={handleLikeCountForReplies}
                          handleDisLikeCount={handleDisLikeCountForReplies}
                        
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  )
                  )
                }

              </List>
            }

          </React.Fragment>
        }
      />
    </React.Fragment>
  );
};

CommentItem.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => ({
  incomingCommentReplies: state.comments.selectedCommentReplies,
});

export default connect(mapStateToProps, { getCommentReplies })(CommentItem);
