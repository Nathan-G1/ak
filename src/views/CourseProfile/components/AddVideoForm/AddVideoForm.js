import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
// import { addVideo } from '../../../../actions/courseAction';
import { addCourse } from '../../../../actions/courseAction';
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
  const { className, handleClose, ...rest } = props;
  const [isVideoAdded, setIsVideoAdded] = useState(false);

  // useEffect(() => {
  //   if(isCourseUpdated){}
  // })
  const classes = useStyles();

  const [values, setValues] = useState({
    videoTitle: 'chapter one',
    videoLink: 'http:/lecture1/d',
    part: 0,
    courseId: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    const video = {
      url: values.videoLink,
      title: values.videoTitle,
      description: "",
      courseId: values.courseId,
      videoLength: 0,
      materials: "",
      part: values.part,
    }

    //props.addVideo(video);
    props.addCourse(video);
    setIsVideoAdded(true);
  }

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const categories = [
    {
      value: 'Introduction',
      label: 'Introduction'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
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
                helperText="Please specify the course title"
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
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Part"
                margin="dense"
                name="videoTitle"
                onChange={handleChange}
                required
                value={values.part}
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
  // get current course id
});

export default connect(mapStateToProps, { addCourse /* addVideo */ })(AddVideoForm);
