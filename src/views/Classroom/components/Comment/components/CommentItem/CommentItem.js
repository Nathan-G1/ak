import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
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
  const { className, comment, ...rest } = props;
  const [isRepliesVisibile, setIsRepliesVisible] = useState(false);
  // const [currentComment, setCurrentComment] = useState(commentlist[0]);

  const classes = useStyles();

  const viewReplies = () => {
    // console.log(currentComment.replies);
    setIsRepliesVisible(!isRepliesVisibile);
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
            {comment.comment}<br />
            <IconButton
              onClick={() => {

              }
              }
            >
              <ThumbUpIcon />
              <Typography>{comment.likes}</Typography>
            </IconButton>
            <IconButton>
              <ThumbDownAltIcon />
              <Typography>{comment.dislikes}</Typography>
            </IconButton>
            <Button
              size="small"
            >
              Reply
            </Button>
            <br />
            <Button
              size="small"
              className={isRepliesVisibile ? classes.clickedViewReply : classes.notActiveViewReply}
              onClick={viewReplies}
            >
                {
                  isRepliesVisibile ? (
                    <React.Fragment>
                      <ArrowDropUpIcon/>
                      <span>Hide {comment.replies.length} {comment.replies.length > 1 ? 'replies' : 'reply'}</span>
                    </React.Fragment>
                      
                    ) : (
                      <React.Fragment>
                        <ArrowDropDownIcon />
                        <span>view {comment.replies.length} {comment.replies.length > 1 ? 'replies' : 'reply'}</span>
                      </React.Fragment>
                    )
                }
                
            </Button>
            {
              isRepliesVisibile &&
              <List>
                {
                  comment.replies.map((comment) => (
                    <React.Fragment>
                      <ListItem key={comment.id} alignItems="flex-start">
                        <CommentItem
                          comment={comment}
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

export default CommentItem;
