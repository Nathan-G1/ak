import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { addCourseVideo } from '../../../../actions/courseAction';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
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
    height: 60,
    width: 60,
    flexShrink: 0,
    flexGrow: 0
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  }
}));

const AddVideoForm = props => {
  const { className, handleClose, courseId, addCourseVideo, courseLectures, ...rest } = props;
  const [isVideoAdded, setIsVideoAdded] = useState(false);

  // useEffect(() => {
  //   if(isCourseUpdated){}
  // })
  const classes = useStyles();
  const nextPart = courseLectures.length + 1;

  const [values, setValues] = useState({
    videoTitle: 'chapter one',
    videoLink: 'http:/lecture1/d',
    courseId: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    const video = {
      url: values.videoLink,
      title: values.videoTitle,
      description: values.videoTitle,
      courseId: courseId,
      videoLength: 0,
      materials: "",
      part: nextPart,
    }

    //props.addVideo(video);
    addCourseVideo(courseId, video);
    setIsVideoAdded(true);
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
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <CardHeader
          subheader="The information can be edited later"
          title="Video"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >

            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the video title"
                label="Video title"
                margin="dense"
                name="videoTitle"
                onChange={handleChange}
                required
                value={values.videoTitle}
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
                label="Video link"
                margin="dense"
                name="videoLink"
                onChange={handleChange}
                required
                value={values.videoLink}
                variant="outlined"
              />

            </Grid>

          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            type='submit'
            onClick={() => handleClose()}
          >
            Add
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddVideoForm.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = state => ({
  courseId: state.currentCourse.course.id,
  courseLectures: state.currentCourse.lectureVideos
});

export default connect(mapStateToProps, { addCourseVideo})(AddVideoForm);
