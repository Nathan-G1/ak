import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { AddVideoForm } from './components';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import StarIcon from '@material-ui/icons/Star';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  Avatar,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  // root: {
  //   padding: theme.spacing(4)
  // },
  // iframe: {
  //   width: '100%',
  //   minHeight: 640,
  //   border: 0
  // },
  // title: {
  //   marginTop: theme.spacing(3),
  // },

  // avatar: {
  //   width: 60,
  //   height: 60
  // },

  // avatarS: {
  //   width: 30,
  //   height: 30,
  //   marginRight: theme.spacing(1),
  // },
  // subtitle: {
  //   marginTop: theme.spacing(1),
  //   fontWeight: 700,
  //   fontSize: 15,
  // },
  addVideoBtn: {
    marginTop: theme.spacing(1),
  },
  // helper: {
  //   marginTop: theme.spacing(3),
  // },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  uploadButton: {
    marginRight: theme.spacing(2)
  },

  avatar: {
    marginRight: 'auto',
    height: 80,
    width: 80,
    flexShrink: 0,
    flexGrow: 0
  },
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   borderRadius: '1%',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  //   width: 700,
  //   height: 400
  // },
  // enrolledStd: {
  //   marginTop: theme.spacing(2)
  // }
}));

const CourseProfile = (props) => {
  const { className, selectedCourse, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  // const [values, setValues] = useState(selectedCourse);
  

  const [values, setValues] = useState(selectedCourse);

  const handleSubmit = event => {
    event.preventDefault();
    const course = {
      id: 12,
      title: values.videoTitle,
      rating: 0,
      time: 3,
      description: values.courseDescription,
      imageUrl: '/images/products/product_1.png',
      totalDownloads: '0',
      updatedAt: '27/03/2019',
      preparedBy: "",
      instructorPhoto: '/images/avatars/avatar_11.png',
      instructorName: 'Abebe',
      whatToLearn: [
        'printing and typesetting',
        'There are many variations',
        'web page editors now',
        'The point of using Lorem'
      ],
      about: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      requirements: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  Lorem Ipsum available, but the majority have suffered alteration in some form, by injected hu',
      teacher: "",
      length: 0,
      certificate: true,
      icon: "",
      enrolledStudents: 0,
      categoryId: "",
      objectives: [
        ""
      ],
      videos: []
    }
  }
    const handleChange = event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    };

    const handleAddObjectives = event => {
      setValues({
        ...values,
        objectives: ''
      })
      values.whatToLearn.push(values.objectives);
    }

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const categories = [
      {
        value: 'academic',
        label: 'Academic'
      },
      {
        value: 'college',
        label: 'College'
      },
      {
        value: 'general',
        label: 'General'
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
                <Avatar
                  className={classes.avatar}
                  src={values.icon}
                />
                <Button
                  className={classes.uploadButton}
                  color="primary"
                  variant="text"
                >
                  Upload Image
              </Button>
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
                  value={values.title}
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
                  <Typography>
                    {
                      <List>
                        {(values.whatToLearn).map((v, index) => {
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
                  name="objectives"
                  onChange={handleChange}
                  required
                  value={values.objectives}
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
                  <Typography>
                    {
                      <List>
                        {(values.videos).map((v, index) => {
                          return <ListItem key={index}>{v}</ListItem>
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

                {/* <TextField
                fullWidth
                label="Add Lecture Video"
                margin="dense"
                name="addedVideo"
                onChange={handleChange}
                required
                value={values.addedVideo}
                variant="outlined"
              />
              */}

              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
            >
              Save details
          </Button>
          </CardActions>
        </form>
      </Card>

    );
  };

  function mapStateToProps(state) {
    return {
      selectedCourse: state.currentCourse.course,
    }
  };

  export default connect(mapStateToProps)(CourseProfile);
