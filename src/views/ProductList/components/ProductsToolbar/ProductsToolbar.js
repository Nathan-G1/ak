import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Card } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { AddCourseForm } from '../../components';
import { connect } from 'react-redux';
import { fetchCourseWithCategory } from '../../../../actions/courseAction';

import { SearchInput, } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '1%',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 800,
    height: 600
  },
}));

const ProductsToolbar = props => {
  const { className, userRole, fetchCourseWithCategory, ...rest } = props;
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
       { 
        userRole == "Teacher" && 
        <Button
            onClick={handleOpen}
            color="primary"
            variant="contained"
        >
            Add courses
        </Button>
       }
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
              <AddCourseForm
                handleClose={handleClose}
              />
            </div>
          </Fade>
        </Modal>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search courses"
        />
        <Button onClick={() => fetchCourseWithCategory("5f392e604ecbb20017ced43a")}>General</Button>
        <Button onClick={() => fetchCourseWithCategory("5f3175834262d10017f033b8")}>Academic</Button>
        <Button onClick={() => fetchCourseWithCategory("5f392e474ecbb20017ced439")}>College</Button>
      </div>
    </div>
  );
};

ProductsToolbar.propTypes = {
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
export default connect(mapStateToProps , { fetchCourseWithCategory })(ProductsToolbar);
