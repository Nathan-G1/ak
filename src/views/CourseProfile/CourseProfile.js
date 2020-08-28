import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { AddVideoForm } from './components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import ImageIcon from '@material-ui/icons';
import { updateCourse, uploadImage } from '../../actions/courseAction';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
  Grid,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  Avatar,
  CircularProgress,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  addVideoBtn: {
    marginTop: theme.spacing(1),
  },

  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  spinner: {
    position: "absolute",
    height: "100px",
    width: "100px",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-50px",
    backgroundSize: "100%"
  },

  uploadButton: {
    marginRight: theme.spacing(2)
  },

  avatar: {
    marginRight: 'auto',
    height: 150,
    width: 300,
    flexShrink: 0,
    flexGrow: 0
  },

  button: {
    marginTop: theme.spacing(1)
  }
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   borderRadius: '1%',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  //   width: 700,
  //   height: 400
  // },
}));

const CourseProfile = (props) => {
  const { className,
    dispatch,
    staticContext,
    selectedCourse,
    courseVideoList,
    updateCourse,
    courseImage,
    user, ...rest } = props;

  const classes = useStyles();

  const history = useHistory();

  const [course, setCourse] = useState(selectedCourse);

  const [values, setValues] = useState(
    {
      title: `${course.title}`,
      icon: `${courseImage}`,
      description: `${course.description}`,
      categoryId: `${course.categoryId}`,
      objective: '',
      about: `${course.about}`,
      requirements: `${course.requirements}`,
      objectives: [],
      objective: ''
    }
  );

  useEffect(() => {
    setCourse(selectedCourse);
    setValues({
      title: `${selectedCourse.title}`,
      icon: `https://samvisionapi.herokuapp.com/images/${courseImage}`,
      description: `${selectedCourse.description}`,
      categoryId: `${selectedCourse.categoryId}`,
      about: `${selectedCourse.about}`,
      requirements: `${selectedCourse.requirements}`,
      objectives: selectedCourse.objectives,
      objective: ''
    })
    // if(!props.isCourseFetched){
    //   setCourse(selectedCourse);
    // }
    // alert(selectedCourse.title)
    // alert(selectedCourse.title + " and " + course.title)
  }, [selectedCourse])



  const [open, setOpen] = React.useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    var course = {
      title: values.title,
      preparedBy: user.firstName,
      instructorPhoto: user.avatar,
      length: selectedCourse.length,
      certificate: selectedCourse.certificate,
      videos: selectedCourse.videos,

      publishedDate: selectedCourse.publishedDate,
      icon: courseImage,
      enrolledStudents: selectedCourse.enrolledStudents,
      description: values.description,
      categoryId: values.categoryId,
      rating: selectedCourse.rating,
      totalDownloads: selectedCourse.totalDownloads,
      updatedAt: selectedCourse.updatedAt,
      about: values.about,
      isFree: true,
      courseFee: 0,
      requirements: values.requirements,

      objectives: selectedCourse.objectives,
      id: selectedCourse.id
    }

    // console.log(course);
    updateCourse(selectedCourse.id, course);
    setImage(false);
    history.push("/courses");
  }

  const handleChange = event => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleAddObjectives = event => {
    setValues({
      ...values,
      objective: ''
    })
    values.objectives.push(values.objective);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categories = [
    {
      value: '5f3175834262d10017f033b8',
      label: 'Academic'
    },
    {
      value: '5f392e474ecbb20017ced439',
      label: 'College'
    },
    {
      value: '5f392e604ecbb20017ced43a',
      label: 'General'
    }
  ];

  //image input
  const [image, setImage] = useState(false);

  const handleCapture = ({ target }) => {
      const fileReader = new FileReader();
      const name = 'images';

      fileReader.readAsDataURL(target.files[0]);
      fileReader.onload = (e) => {
              // setImage(e.target.result);
              props.uploadImage(target.files[0]);
              setImage(true);
      };
      
      
  };

  // const uploadImage = ({image}) => {
  //   console.log(image);
    
  // }


  return (
    props.isCourseLoaded ? <CircularProgress className={classes.spinner}/> : 
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
          subheader="The information can be edited"
          title="Profile"
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
              <CardMedia
                className={classes.avatar}
                // src={selectedCourse.icon}
                image={image ? `https://samvisionapi.herokuapp.com/images/${courseImage}` : `https://samvisionapi.herokuapp.com/images/${selectedCourse.icon}`}
              />

              {/* <Fragment> */}
                <input
                  color="primary"
                  accept="image/*"
                  type="file"
                  onChange={handleCapture}
                  id="icon-button-file"
                  style={{ display: 'none', }}
                />
                <label htmlFor="icon-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    className={classes.button}
                    size="large"
                    color="primary"
                    size="small"
                    // onClick={uploadImage}
                  >
                    {/* <ImageIcon className={classes.extendedIcon} /> */}
                    upload
                  </Button>
                </label>
              {/* </Fragment> */}

              {/* <Button
                className={classes.uploadButton}
                color="primary"
                variant="text"
              >
                Upload Image
              </Button> */}
            </Grid>

            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the title"
                label="Title"
                margin="dense"
                name="title"
                onChange={handleChange}
                required
                // defaultValue={course.title}
                value={values.title}
                // ref={input => values.title = input}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Select Category"
                margin="dense"
                name="categoryId"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.categoryId}
                // ref={input => values.categoryId = input}
                variant="outlined"
              >
                {categories.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                multiline
                rows='2'
                rowsMax='10'
                label="Description"
                margin="dense"
                name="description"
                onChange={handleChange}
                required
                value={values.description}
                // defaultValue={selectedCourse.description}
                // ref={input => values.description = input}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <Card>
                {/* <CardContent> */}
                <Typography component={'span'}>
                  {
                    <List>
                      {(selectedCourse.objectives).map((v, index) => {
                        return <ListItem key={index}>{v}</ListItem>
                      })}

                    </List>
                  }
                </Typography>
                <Divider />
              </Card>
              <TextField
                fullWidth
                margin="dense"
                name="objective"
                onChange={handleChange}
                required
                value={values.objective}
                // defaultValue={selectedCourse.objectives}
                // ref={input => values.objectives = input}
                variant="outlined"
              />
              <Button
                color="primary"
                variant="outlined"
                onClick={handleAddObjectives}
                size="small"
              >
                Add Course Objective
              </Button>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                multiline
                rows='3'
                label="Requirement"
                margin="dense"
                name="requirements"
                required
                onChange={handleChange}
                value={values.requirements}
                // defaultValue={selectedCourse.requirements}
                // ref={input => values.requirements = input}
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
                multiline
                rows='3'
                label="About"
                margin="dense"
                name="about"
                required
                onChange={handleChange}
                // defaultValue={selectedCourse.about}
                value={values.about}
                variant="outlined"
              />
            </Grid>

            <Grid
              item
              md={12}
              xs={12}
            >
              <Card>
                <CardHeader
                  subheader="Add the course's lecture videos here"
                // title="Course"
                />
                <Divider />
                <Typography component={'span'}>
                  {
                    <List>
                      {(courseVideoList).map((v, index) => {
                        return <ListItem key={index}>{v.title}</ListItem>
                      })}

                    </List>
                  }
                </Typography>
                <Divider />
                <CardActions>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleOpen}
                    size="small"
                  >
                    Add Video
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.paper}>
                        <AddVideoForm
                          handleClose={handleClose}
                        />
                      </div>
                    </Fade>
                  </Modal>
                </CardActions>
                {/* </CardContent> */}
              </Card>

            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            type='submit'
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>

  );
};


CourseProfile.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedCourse: state.currentCourse.course,
    courseImage: state.currentCourse.courseImage,
    courseVideoList: state.currentCourse.lectureVideos,
    isCourseLoaded: state.currentCourse.isCourseFetched,
    user: state.currentUser.user
  }
};

export default connect(mapStateToProps, { updateCourse, uploadImage })(CourseProfile);
