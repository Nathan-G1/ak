import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { connect } from 'react-redux';
import {
  Grid,
  useMediaQuery,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import clsx from 'clsx';
import { Video, Comment, Sidebar, CourseList } from './components';
import { func } from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  },
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    height: '100%'
  },
  button: {

  },
  buttonGrid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  },
}));

const Classroom = ({ courseVideosState }) => {

  // const courseVideos = [
  //   {
  //     id: 1,
  //     title: 'create repository',
  //     video: 'https://youtu.be/juxyvqiOMfY',
  //     order: 1 
  //     },
  //   {
  //     id: 2,
  //     title: 'cloning a repository',
  //     video: 'https://www.youtube.com/watch?v=p8N0xN0ihMA',
  //     order: 2
  //   },
  //   {
  //     id: 3,
  //     title: 'push and pull',
  //     video: 'https://www.youtube.com/watch?v=c2Kf-rXI_pk',
  //     order: 3 
  //   },
  //   {
  //     id: 4,
  //     title: 'rebasing and stashing',
  //     video: 'https://www.youtube.com/watch?v=GbECT1J9bXg',
  //     order: 4 
  //   },
  //   {
  //     id: 5,
  //     title: 'create branch',
  //     video: 'https://www.youtube.com/watch?v=VGosZWBTF7A',
  //     order: 5 
  //   },
  //   {
  //     id: 6,
  //     title: 'delete branch',
  //     video: 'https://www.youtube.com/watch?v=gDqGSmTPtOQ',
  //     order: 6 
  //   },
  //   {
  //     id: 7,
  //     title: 'delete repository',
  //     video: 'https://www.youtube.com/watch?v=5dZ_lvDgevk',
  //     order: 7 
  //   }

  // ];  

  const courseVideos = courseVideosState;

  const [currentLecture, setCurrentLecture] = useState(courseVideos[0]);

  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  //TODO
  const [isFirstLecture, setIsFirstLecture] = useState(false);
  const [isLastLecture, setIsLastLecture] = useState(false);

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const hanldeCourseVideoChange = (course) => {
    setCurrentLecture(course);
  };

  const handleNext = () => {
    for (var i = 0; i < courseVideos.length; i++) {
      if (courseVideos[i].order == (currentLecture.order + 1)) {
        console.log(currentLecture.title);
        setCurrentLecture(courseVideos[i]);
        if (i == (courseVideos.length - 1)) {
          setIsLastLecture(true);
          setIsFirstLecture(false);
        } else {
          setIsLastLecture(false);
          setIsFirstLecture(false);
        }
      }
    }
  }

  const handlePrev = () => {
    for (var i = 0; i < courseVideos.length; i++) {
      if (courseVideos[i].order == (currentLecture.order - 1)) {
        console.log(currentLecture.title);
        setCurrentLecture(courseVideos[i]);
        if (i == 0) {
          setIsFirstLecture(true);
          setIsLastLecture(false);
        } else {
          setIsFirstLecture(false);
          setIsLastLecture(false);
        }
      }
    }
  }


  const shouldOpenSidebar = isDesktop ? true : openSidebar;
  const shouldOpenList = isDesktop ? false : true;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        coursevideos={courseVideos}
        onCourseVideoChange={hanldeCourseVideoChange}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        <Grid
          container
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            <Video
              currentlecture={currentLecture}
            />
            <Grid
              container
              className={classes.buttonGrid}
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid>
                {isFirstLecture ? '' :
                  <Button
                    className={classes.button}
                    color="primary"
                    variant="outlined"
                    onClick={handlePrev}
                    size="small"
                  >
                    <ArrowBackIosIcon />
                Prev
                </Button>
                }
              </Grid>
              <Grid>
                {isLastLecture ? '' :
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={handleNext}
                    size="small"
                  >
                    next
                <ArrowForwardIosIcon />
                  </Button>
                }
              </Grid>
            </Grid>
            {shouldOpenList ?
              <CourseList
                courseList={courseVideos}
                onCourseVideoChange={hanldeCourseVideoChange}
              /> : ''
            }
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
          <Comment />
        </Grid>
      </main>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    courseVideosState: state.courseVideos
  }
};

export default connect(mapStateToProps)(Classroom);
