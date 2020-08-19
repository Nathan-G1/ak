import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { closeSuccessMsg } from '../../actions/courseRequestAction';
import { WhatToLearn, About, PaymentForm, Requirements, CourseContent, Review } from './components';
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
  Avatar,
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
    backgroundImage: `url(${'/images/courseImgs/courseImg_1.jpg'})`
  },
  iframe: {
    width: '100%',
    minHeight: 640,
    border: 0
  },
  title: {
    marginTop: theme.spacing(3),
  },

  avatar: {
    width: 60,
    height: 60
  },

  avatarS: {
    width: 30,
    height: 30,
    marginRight: theme.spacing(1),
  },
  subtitle: {
    marginTop: theme.spacing(1),
    fontWeight: 700,
    fontSize: 15,
  },
  button: {
    marginTop: theme.spacing(3),
  },
  helper: {
    marginTop: theme.spacing(3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paperForScssMod: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400,
    height: 260
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 700,
    height: 400
  },
  enrolledStd: {
    marginTop: theme.spacing(2)
  }
}));

const CourseDetail = (props) => {
  const { className,
    selectedCourse,
    isRequestDelivered,
    closeSuccessMsg, ...rest } = props;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);


  const [values, setValues] = useState(selectedCourse);

  useEffect(() => {
    setValues(selectedCourse);
    // alert(selectedCourse.title)
    if (isRequestDelivered) {
      handleOpenForScssMod();
    }
  }, [selectedCourse, isRequestDelivered])

  const getRatingStars = () => {
    var rate = [];
    for (var i = 0; i < values.rating; i++) {
      rate.push(<StarIcon></StarIcon>);
    }
    return rate;
  }



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenForScssMod = () => {
    setOpenSuccessModal(true);
  };

  const handleCloseForScssMod = () => {
    closeSuccessMsg();
    setOpenSuccessModal(false);
  };

  return (
    <React.Fragment>
      <Card
        className={classes.root}
      // style={{backgroundImage: `url(${values.icon})`}}
      >
        <CardContent>
          <Avatar
            alt="course"
            className={classes.avatar}
            src={values.icon} // this is going to be removed 
          />

          <Typography
            className={classes.title}
            variant="h2"
          >
            {values.title}
          </Typography>
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            {values.description}
          </Typography>
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            gutterBottom
            variant="body2"
          >
            {getRatingStars()}
          </Typography>
          <Grid
            container
            spacing={0}
          >

            <Avatar
              alt="course"
              className={classes.avatarS}
              src={values.instructorPhoto}
            />

            <Typography
              className={classes.subtitle}
            >
              {values.preparedBy}
            </Typography>

          </Grid>

          <Typography>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => {
                handleOpen();
                // history.push("/classroom");
              }}
            >
              Enroll
        </Button>
          </Typography>
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
                <PaymentForm
                  handleClose={handleClose}
                />
              </div>
            </Fade>
          </Modal>
          <Typography
            className={classes.enrolledStd}
          >
            <b>2332</b> already enrolled
          </Typography>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openSuccessModal}
            onClose={handleCloseForScssMod}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openSuccessModal}>
              <div className={classes.paperForScssMod}>
                <Card>
                  <CardHeader
                    subheader=""
                    title="Request sent"
                  />
                  <Divider />
                  <CardContent>
                    <Typography variant="body1" gutterBottom >
                      Your request has successfully delivered. you will be approved
                      soon after checking the validity of your payment information. stay tunned!!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      color="primary"
                      variant="contained"
                      size="small"
                      onClick={() => handleCloseForScssMod()}
                    >
                      Close
                    </Button>
                  </CardActions>
                </Card>
              </div>
            </Fade>
          </Modal>

        </CardContent>
      </Card>

      <Card className={classes.helper}>
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
          >
            WHAT YOU WILL LEARN
            <WhatToLearn
              lists={values.whatToLearn}
            />
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.helper}>
        <CardHeader
          title="Requirement"
        />
        <Divider />
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
          >

            <Requirements
              requirements={values.requirements}
            />
          </Typography>

        </CardContent>
      </Card>

      <CourseContent
        className={classes.helper}
      />

      <Card className={classes.helper}>
        <CardHeader
          title="About this Course"
        />
        <Divider />
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
          >

            <About
              description={values.about}
            />
          </Typography>

        </CardContent>
      </Card>

      <Review
        className={classes.helper}
      />

    </React.Fragment>

  );
};

function mapStateToProps(state) {
  return {
    selectedCourse: state.currentCourse.course,
    isRequestDelivered: state.courseRequests.isRequestDelivered
  }
};

export default connect(mapStateToProps, { closeSuccessMsg })(CourseDetail);
